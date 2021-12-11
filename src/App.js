import logo from "./logo.svg";
import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const iframe = useRef();

  useEffect(() => {
    setInterval(() => {
      const hours = new Date().getHours();
      if (hours === 1) {
        iframe.current.contentWindow.location.reload();
      }
    }, 50 * 60 * 1000); // every 50 minutes
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
