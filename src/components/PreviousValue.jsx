
import { useRef, useState } from "react";

export const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const previousValue = useRef(null);

  const Increment = () => {
    previousValue.current = count;
    setCount(count + 1);
  };

  const Decrement = () => {
    previousValue.current = count;
    setCount(count - 1);
  };


return (
  <div className="container-fluid mt-4 px-4">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <div
          className="card shadow mx-auto w-100"
          style={{ maxWidth: "500px" }}
        >
          <div className="card-body text-center p-4">
            <h4 className="mb-4">
              2.Previous Value Tracker
            </h4>

            <div className="alert alert-primary mb-3">
              Current: {count}
            </div>

            <div className="alert alert-secondary mb-4">
              Previous:{" "}
              {previousValue.current === null
                ? "None"
                : previousValue.current}
            </div>

            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <button
                className="btn btn-danger"
                onClick={Decrement}
              >
                Decrement
              </button>

              <button
                className="btn btn-success"
                onClick={Increment}
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
