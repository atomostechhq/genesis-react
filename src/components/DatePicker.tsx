import { useRef, useState, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker, DropdownProps, PropsSingle } from "react-day-picker";
import { RiCalendar2Line } from "@remixicon/react";
import Input from "./Input";
import { cn } from "../utils";

interface DatePickerProps {
  selected: Date | undefined;
  setSelected: (value: Date | undefined) => void;
  disabled?: boolean;
  disabledCalendar?: { before: Date } | { after: Date };
  placeholder?: string;
  dateFormat?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
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
.rdp-day_button:hover{
background-color:#EAECF0;
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
.rdp-day.rdp-disabled {
  opacity:50%;
  color: #98A2B3;
  pointer-events: none;
  user-select:none;
}
`;

const DatePicker = ({
  selected,
  setSelected,
  disabled = false,
  disabledCalendar,
  dateFormat,
  placeholder = "DD/MM/YY",
  position = "bottom-left",
}: DatePickerProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const popperRef = useRef<HTMLDivElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const closePopper = () => setIsPopperOpen(false);

  const formatSelectedDate = (date?: Date, dateFormat?: string) => {
    if (!date) return "";
    return format(date, dateFormat || "dd/MM/yyyy");
  };

  // Add event listener to handle clicks outside of the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperElement &&
        !popperElement.contains(event.target as Node) &&
        !popperRef.current?.contains(event.target as Node)
      ) {
        closePopper();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popperElement]);

  function CustomSelectDropdown(props: DropdownProps) {
    const { options, value, onChange } = props;

    const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <select
        className="border p-1 shadow rounded-md mb-3 outline-none mx-1"
        value={value?.toString()}
        onChange={handleValueChange}
      >
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value.toString()}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  const handleDaySelect: PropsSingle["onSelect"] = (date) => {
    if (date) {
      setSelected(date);
      closePopper();
    }
  };

  return (
    <div className="relative w-full">
      <div ref={popperRef}>
        <Input
          type="text"
          readOnly
          className="w-full main-shadow"
          placeholder={placeholder || format(new Date(), "dd/mm/yyyy")}
          aria-label="Pick a date"
          value={formatSelectedDate(selected, dateFormat)}
          onClick={() => setIsPopperOpen(true)}
          disabled={disabled}
          endIcon={<RiCalendar2Line size={16} />}
        />
      </div>
      {isPopperOpen && (
        <div
          tabIndex={-1}
          className={cn(
            "text-[16px] shadow-sm border bg-white rounded-md",
            "mt-1 mx-auto z-[1000] transition-all absolute duration-75 delay-100 ease-in-out",
            {
              "bottom-11 right-0": position === "top-right",
              "bottom-11 left-0": position === "top-left",
              "top-10 right-0": position === "bottom-right" || !position,
              "top-10 left-0": position === "bottom-left",
            }
          )}
          ref={(element) => setPopperElement(element)}
          role="dialog"
          aria-label="Single DayPicker calendar"
        >
          <style>{css}</style>
          <DayPicker
            mode="single"
            hideNavigation
            defaultMonth={selected || new Date()}
            showOutsideDays
            disabled={disabledCalendar}
            components={{ Dropdown: CustomSelectDropdown }}
            captionLayout="dropdown"
            endMonth={new Date(new Date().getFullYear() + 100, 12)}
            selected={selected}
            onSelect={handleDaySelect}
            modifiersStyles={{
              selected: {
                backgroundColor: "var(--primary-500)",
                color: "white",
                borderRadius: "5px",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
