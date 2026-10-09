
import React, { useState, useEffect, useRef } from "react";

export const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div className="card p-3 h-100">
      <h5>2. Previous Value Tracker</h5>

      <h3>Current: {count}</h3>

      <p>
        Previous:{" "}
        {previousCount.current === null
          ? "None"
          : previousCount.current}
      </p>

      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};