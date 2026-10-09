
import { useState, useEffect } from "react";

export const PersistentUsername = () => {
  const [username, setUsername] = useState(
    () => localStorage.getItem("playgroundUsername") || ""
  );

  useEffect(() => {
    localStorage.setItem("playgroundUsername", username);
  }, [username]);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5>Persistent Username</h5>

        <label className="form-label">Username</label>

        <input
          type="text"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />

        <div className="alert alert-success mb-0">
          Saved username: {username || "No username entered"}
        </div>
      </div>
    </div>
  );
};

