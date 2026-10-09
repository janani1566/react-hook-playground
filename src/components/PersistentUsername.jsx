
import React, { useState, useEffect } from "react";

export const PersistentUsername = () => {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return (
    <div className="card p-3 h-100">
      <h5>5. Persistent Username</h5>

      <label className="form-label">Username</label>

      <input
        className="form-control"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />

      <p className="mt-3 mb-0">
        Saved username: <strong>{username || "None"}</strong>
      </p>
    </div>
  );
};