"use client";
import React, { useRef, useState, useEffect } from "react";
import { format } from "date-fns";
import {
  DayPicker,
  MonthCaptionProps,
  PropsSingle,
  useDayPicker,
} from "react-day-picker";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiCalendar2Line,
} from "@remixicon/react";
import Button from "./Button";
import Input from "./Input";

interface DatePickerProps {
  selected?: Date | undefined;
  setSelected: (value: Date | undefined) => void;
  inputValue?: string;
  setInputValue: (value: string) => void;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  disabledCalendar?: { before: Date };
  placeholder?: string;
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
    border-radius: 10px;
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
`;

const DatePicker = ({
  selected,
  setSelected,
  inputValue,
  setInputValue,
  handleInputChange,
  disabled = false,
  disabledCalendar,
  placeholder = "DD/MM/YY",
}: DatePickerProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(true);
  const popperRef = useRef<HTMLDivElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const closePopper = () => setIsPopperOpen(false);

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

  // chevron icon for navigation
  function CustomCaption(props: MonthCaptionProps) {
    const { goToMonth, nextMonth, previousMonth } = useDayPicker();
    return (
      <div className="flex justify-between gap-4 items-center">
        <Button
          size={"sm"}
          variant={"outlined"}
          intent={"default-outlined"}
          className=" p-1 border-none"
          disabled={!previousMonth}
          onClick={(e) => {
            e.preventDefault();
            previousMonth && goToMonth(previousMonth);
          }}
        >
          <RiArrowLeftSLine />
        </Button>
        {format(props.calendarMonth.date, "MMM yyy")}
        <Button
          size={"sm"}
          variant={"outlined"}
          intent={"default-outlined"}
          className=" p-1 border-none"
          disabled={!nextMonth}
          onClick={(e) => {
            e.preventDefault();
            nextMonth && goToMonth(nextMonth);
          }}
        >
          <RiArrowRightSLine />
        </Button>
      </div>
    );
  }

  const handleDaySelect: PropsSingle["onSelect"] = (date) => {
    if (date) {
      setSelected(date);
      setInputValue(format(date, "MMM dd, y"));
      closePopper();
    }
  };

  return (
    <div className="relative">
      <div ref={popperRef}>
        <Input
          type="text"
          readOnly
          placeholder={placeholder || format(new Date(), "dd/mm/yyyy")}
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Pick a date"
          onClick={() => setIsPopperOpen(true)}
          disabled={disabled}
          endIcon={<RiCalendar2Line size={16} />}
        />
      </div>
      {isPopperOpen && (
        <div
          tabIndex={-1}
          className="shadow-sm mt-1 mx-auto rounded-md text-[16px] absolute bg-white z-[1000] transition-all duration-75 delay-100 ease-in-out"
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
            components={{ MonthCaption: CustomCaption }}
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
