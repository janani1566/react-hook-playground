
import { useEffect, useState } from "react";

export function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [requestMode, setRequestMode] = useState("success");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let isActive = true;

    setLoading(true);
    setError(false);
    setUser(null);

    const timer = setTimeout(() => {
      if (!isActive) {
        return;
      }

      if (requestMode === "error") {
        setError(true);
      } else {
        setUser({
          name: "Janani",
          role: "Front End Developer",
        });
      }

      setLoading(false);
    }, 1500);

    // Cancel the simulated request if it is no longer needed.
    return () => {
      isActive = false;
      clearTimeout(timer);
    };
  }, [requestMode, retry]);

  const loadProfile = () => {
    setRequestMode("success");
    setRetry((current) => current + 1);
  };

  const testError = () => {
    setRequestMode("error");
    setRetry((current) => current + 1);
  };

  const retryRequest = () => {
    setRetry((current) => current + 1);
  };

  return (
    <section className="card p-3 h-100">
      <h5>6. Simulated API Call — User Profile</h5>

      {loading && (
        <div className="alert alert-info" role="status">
          Loading profile...
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-danger" role="alert">
          Failed to load the user profile. Please try again.
        </div>
      )}

      {!loading && !error && user && (
        <div className="alert alert-success">
          <p className="mb-1">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="mb-0">
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      )}

      <div className="d-flex gap-2 flex-wrap">
        <button className="btn btn-primary" onClick={loadProfile}>
          Load Profile
        </button>

        <button className="btn btn-danger" onClick={testError}>
          Test Error
        </button>

        <button className="btn btn-secondary" onClick={retryRequest}>
          Retry
        </button>
      </div>
    </section>
  );
}