import Test from "./Test";
import Tabletest from "./Tabletest";
import FileUploadTest from "./fileUpload/page";

function App() {
  return (
    <div>
      <h1 className="text-brand-500">Atomos Genesis React</h1>
      <FileUploadTest />
      <Test />
      <Tabletest />
    </div>
  );
}

export default App;
