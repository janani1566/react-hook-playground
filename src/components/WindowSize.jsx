
import { useState, useEffect } from "react";

export const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="card p-3 h-100">
      <h5>4. Window Size</h5>

      <p className="mb-0">
        Browser width: <strong>{width}px</strong>
      </p>
    </div>
  );
};

