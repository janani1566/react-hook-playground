import { useEffect, useState } from "react";

export const UserProfile = () => {
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [shouldFail, setShouldFail] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setStatus("loading");
    setUser(null);
    setError("");

    const timer = setTimeout(() => {
      if (shouldFail) {
        setError("Failed to load the profile. Please try again.");
        setStatus("error");
      } else {
        setUser({
          name: "Sample User",
          email: "sample@example.com",
        });
        setStatus("success");
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [attempt, shouldFail]);

  const retry = () => {
    setAttempt((currentAttempt) => currentAttempt + 1);
  };

  const toggleResult = () => {
    setShouldFail((current) => !current);
    setAttempt((currentAttempt) => currentAttempt + 1);
  };

  return (
    <section className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">F. Simulated API Call</h5>

        {status === "loading" && (
          <div className="alert alert-info" role="status">
            Loading...
          </div>
        )}

        {status === "success" && user && (
          <div className="alert alert-success">
            <h6>{user.name}</h6>
            <p className="mb-0">{user.email}</p>
          </div>
        )}

        {status === "error" && (
          <div className="alert alert-danger">
            <p>{error}</p>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={retry}
            >
              Retry
            </button>
          </div>
        )}

        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={toggleResult}
        >
          {shouldFail ? "Try Success" : "Simulate Error"}
        </button>
      </div>
    </section>
  );
};