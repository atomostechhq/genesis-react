import {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  ReactNode,
} from "react";
import { RiCalendarLine } from "@remixicon/react";
import { type DateRange, DayPicker, PropsRange } from "react-day-picker";
import { format } from "date-fns";
import Input from "./Input";
import Button from "./Button";
import { cn } from "../utils";

interface DateRangePickerProps {
  selectedRange?: DateRange | undefined;
  setSelectedRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  dateRangeInput?: string;
  setDateRangeInput: (value: string) => void;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRangeSelect?: (range: DateRange | undefined) => void;
  disabledCalendar?: { before: Date } | { after: Date };
  handleApply: () => void;
  children?: ReactNode;
  position?: "top" | "bottom";
}

const css = `
.rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #EAECF0;
    border-radius: 5px;
}
.rdp-button:focus-visible:not([disabled]){
    color:black;
    background:white;
    border-radius: 5px;
    border: 1px solid var(--primary-400);
}
.rdp-root {
    padding:8px;
    --rdp-accent-color: var(--primary-600);
    --rdp-accent-background-color: #f0f0f0;
}
.rdp-day_button {
    background: none;
    cursor: pointer;
    color: inherit;
    font-size:14px;
    justify-content: center;
    align-items: center;
    display: flex;
    width:30px;
    height:30px;
    border: var(--primary-600);
    border-radius: 5px;
}
.rdp-selected .rdp-day_button {
     border: none;
     color:white
}
.rdp-day{
     width: 10px;
     height:10px;

}
.rdp-weekday{
    font-size:14px;
}
.rdp-weekdays {
    margin-top:5px;
    margin-bottom:25px;
}
.rdp-day.rdp-today {
  font-weight:700;
}
.rdp-day.rdp-outside{
  color: #98A2B3;
}
.rdp-caption_label{
  display: none;
}
.rdp-selected .rdp-day_button {
    color: #000;
}
.rdp-day.rdp-selected.rdp-range_start > .rdp-day_button, .rdp-day.rdp-selected.rdp-range_end > .rdp-day_button{
    color:#fff;
}
.rdp-day.rdp-disabled {
  opacity:50%;
  color: #98A2B3;
  pointer-events: none;
  user-select:none;
}
`;

const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      selectedRange,
      setSelectedRange,
      dateRangeInput,
      setDateRangeInput,
      handleInputChange,
      handleRangeSelect,
      disabledCalendar,
      position = "bottom",
      children,
      handleApply,
    },
    ref
  ) => {
    const [isPopperOpen, setIsPopperOpen] = useState(false);

    const popperRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => popperRef.current!);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!popperRef.current?.contains(event.target as Node)) {
          setIsPopperOpen(false);
        }
      };

      if (isPopperOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isPopperOpen]);

    const handleButtonClick = () => setIsPopperOpen(true);

    const handleReset = () => {
      console.log("Resetting selected range and date range input");
      setSelectedRange(undefined);
      setDateRangeInput("");
    };

    const handleRangeSelectInternal: PropsRange["onSelect"] = (range) => {
      setSelectedRange(range);
      if (range?.from && range.to) {
        const fromDateString = format(range.from, "dd/MM/yyyy");
        const toDateString = format(range.to, "dd/MM/yyyy");
        const formattedDateRange = `${fromDateString} - ${toDateString}`;
        setDateRangeInput(formattedDateRange);
        console.log("Range selected and input updated:", formattedDateRange);
        // setIsPopperOpen(false);
      } else {
        console.log("Range partially selected:", range);
      }

      // Call the passed handleRangeSelect function if it exists
      if (handleRangeSelect) {
        handleRangeSelect(range);
      }
    };

    const handleApplyClick = () => {
      if (selectedRange?.from && selectedRange.to) {
        const fromDateString = format(selectedRange.from, "dd/MM/yyyy");
        const toDateString = format(selectedRange.to, "dd/MM/yyyy");
        const formattedDateRange = `${fromDateString} - ${toDateString}`;
        setDateRangeInput(formattedDateRange);
        console.log("Formatted Date Range to apply:", formattedDateRange);
        handleApply();
      } else {
        console.log("No valid date range selected");
      }
      setIsPopperOpen(false);
    };

    return (
      <div className="relative">
        <div ref={popperRef}>
          <Input
            type="text"
            startIcon={<RiCalendarLine size={16} />}
            placeholder="DD/MM/YYYY - DD/MM/YYYY"
            className="main-shadow w-full"
            readOnly
            value={dateRangeInput}
            onChange={handleInputChange}
            onClick={handleButtonClick}
          />
        </div>
        {isPopperOpen && (
          <div
            className={cn(
              "shadow-md rounded-md p-3 flex gap-5 justify-center items-start",
              "mt-1 h-[300px] absolute bg-white z-[1000] transition-all duration-75 delay-100 ease-in-out",
              position === "top"
                ? "bottom-12"
                : position === "bottom" && "top-11"
            )}
            ref={popperRef}
            aria-label="Date Range Picker"
          >
            {children && (
              <div className="flex flex-col whitespace-nowrap items-start h-full border-r border-gray-200 pr-2">
                {children}
              </div>
            )}
            <div className="flex flex-col h-full justify-between">
              <style>{css}</style>
              <DayPicker
                mode="range"
                selected={selectedRange}
                endMonth={new Date(new Date().getFullYear() + 50, 12)}
                onSelect={handleRangeSelectInternal}
                showOutsideDays
                disabled={disabledCalendar}
                hideNavigation
                captionLayout="dropdown"
                modifiersStyles={{
                  selected: {
                    backgroundColor: "var(--primary-600)",
                    borderRadius: "5px",
                  },
                  range_middle: {
                    borderRadius: "0px",
                    backgroundColor: "var(--primary-100)",
                    color: "black",
                  },
                  range_start: {
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "0px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "0px",
                  },
                  range_end: {
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "5px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "5px",
                  },
                }}
              />
              <div className="flex justify-between pt-2 border-t border-gray-200 gap-3">
                <Button
                  variant="outlined"
                  className="border-none py-1 px-2 text-sm"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  className="py-1 px-2 text-sm"
                  onClick={handleApplyClick}
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";

export default DateRangePicker;
