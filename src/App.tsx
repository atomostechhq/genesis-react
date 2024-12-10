import "./App.css";
import Test from "./Test";
import Tabletest from "./Tabletest";
import React, { useState } from "react";
import DatePicker from "./components/DatePicker";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [inputValueDate, setInputValueDate] = useState<string>("");

  return (
    <div className="theme-brand">
      <h1 className="text-brand-500">Atomos Genesis React</h1>
      <DatePicker
        selected={selectedDate}
        setSelected={setSelectedDate}
        inputValue={inputValueDate}
        setInputValue={setInputValueDate}
      />
      <Test />
      <Tabletest />
    </div>
  );
}

export default App;
