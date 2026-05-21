import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function App() {
  const [status, setStatus] = useState({
    state: "loading",
    message: "Chargement..."
  });

  useEffect(() => {
    let cancelled = false;

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setStatus({
          state: "ok",
          message: data.message || "Backend OK",
          data
        });
      })
      .catch((error) => {
        if (cancelled) return;
        setStatus({ state: "error", message: error.message });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="app">
      <h1>Job 08 Fullstack</h1>
      <p>Backend URL: {API_URL}</p>
      <div className={`status ${status.state}`}>
        <strong>Status:</strong> {status.message}
      </div>
    </div>
  );
}

export default App;
