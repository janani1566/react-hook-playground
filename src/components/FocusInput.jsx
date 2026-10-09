
import React, { useRef, useState } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="card p-3 h-100">
      <h5>1. Auto Focus Input</h5>

      <label className="form-label">Enter text</label>

      <input
        ref={inputRef}
        className="form-control mb-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={handleFocus}
        >
          Focus Input
        </button>

        <button
          className="btn btn-secondary"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};