
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { FocusInput } from "./components/FocusInput";
import { PreviousValue } from "./components/PreviousValue";
import { Stopwatch } from "./components/StopWatch";
import { WindowSize } from "./components/WindowSize";
import { PersistentUsername } from "./components/PersistentUsername";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Hook Playground</h1>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <FocusInput />
        </div>

        <div className="col-12 col-md-6">
          <PreviousValue />
        </div>

        <div className="col-12 col-md-6">
          <Stopwatch />
        </div>

        <div className="col-12 col-md-6">
          <WindowSize />
        </div>

        <div className="col-12 col-md-6">
          <PersistentUsername />
        </div>

        <div className="col-12 col-md-6">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default App;

