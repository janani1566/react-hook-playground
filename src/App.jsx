
import "./App.css";

import { FocusInput } from "./components/FocusInput.jsx";
import { PreviousValue } from "./components/PreviousValue.jsx";
import { Stopwatch } from "./components/Stopwatch.jsx";
import { WindowSize } from "./components/WindowSize.jsx";
import { PersistentUsername } from "./components/PersistentUsername.jsx";
import { UserProfile } from "./components/UserProfile.jsx";
import { RefExperiment } from "./components/RefExperiment.jsx";

function App() {
  return (
    <main className="container py-4">
      <header className="text-center mb-4">
        <h1>React Hook Playground</h1>
        <p className="text-muted">
          Practical examples of useRef and useEffect
        </p>
      </header>

      <div className="row g-4">
        <div className="col-md-6">
          <FocusInput />
        </div>

        <div className="col-md-6">
          <PreviousValue />
        </div>

        <div className="col-md-6">
          <Stopwatch />
        </div>

        <div className="col-md-6">
          <WindowSize />
        </div>

        <div className="col-md-6">
          <PersistentUsername />
        </div>

        <div className="col-md-6">
          <UserProfile />
        </div>

        <div className="col-12">
          <RefExperiment />
        </div>
      </div>

      <footer className="text-center text-muted mt-4">
        <small>React Hooks Practice — useRef + useEffect</small>
      </footer>
    </main>
  );
}

export default App;