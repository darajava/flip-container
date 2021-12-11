import logo from "./logo.svg";
import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const iframe = useRef();

  useEffect(() => {
    setInterval(async () => {
      const hours = new Date().getHours();
      if (hours === 24) {
        try {
          await fetch(
            `https://darajava.github.io/flip/index.html?${window.location.search.substr(
              1
            )}`
          );

          if (window.navigator.onLine) {
            iframe.current.contentWindow.location.reload();
          }
        } catch {}
      }
    }, 5000);
    // }, 50 * 60 * 1000); // every 50 minutes
  }, []);
  return (
    <div className="App">
      <iframe
        ref={iframe}
        src={`https://darajava.github.io/flip/index.html?${window.location.search.substr(
          1
        )}`}
        title={"flipper"}
      ></iframe>
    </div>
  );
}

export default App;
