
import "./App.css";

import { FocusInput } from "./components/FocusInput";
import { WindowSize } from "./components/WindowSize";
import { Stopwatch } from "./components/StopWatch";

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-2">
        React Hook Playground
      </h1>

      <p className="text-center text-muted mb-4">
        Practice useRef and useEffect
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <FocusInput />
        </div>

        <div className="col-md-6">
          <Stopwatch />
        </div>

        <div className="col-md-6">
          <WindowSize />
        </div>
      </div>
    </div>
  );
}

export default App;

