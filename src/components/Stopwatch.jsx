
import { useEffect, useRef, useState } from "react";

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    // Cleanup runs when paused, reset, or unmounted.
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);

    // Clear the active interval immediately if there is one.
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="card p-3 h-100">
      <h5>3. Stopwatch</h5>

      <h2 className="my-3">{seconds} seconds</h2>

      <div className="d-flex gap-2 flex-wrap">
        <button
          className="btn btn-success"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Pause
        </button>

        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}