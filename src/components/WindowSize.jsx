
import { useEffect, useState } from "react";

export function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Empty dependency array: set up the listener on mount.
    // Cleanup prevents the listener from remaining after unmount.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="card p-3 h-100">
      <h5>4. Window Size</h5>
      <p className="mb-0">
        Browser width: <strong>{width}px</strong>
      </p>
      <small className="text-muted">
        Resize your browser to see the value change.
      </small>
    </section>
  );
}