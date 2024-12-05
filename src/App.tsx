import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Test";
import Tabletest from "./Tabletest";

function App() {
  return (
    <div className="theme-brand">
      <h1 className="text-brand-500">Atomos Genesis React</h1>
      <Test />
      <Tabletest/>
    </div>
  );
}

export default App;
