import Test from "./Test";
import Tabletest from "./Tabletest";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <h1 className="text-brand-500">Atomos Genesis React</h1>
        <Test />
        <Tabletest />
      </div>
    </BrowserRouter>
  );
}

export default App;
