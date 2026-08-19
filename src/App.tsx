// @ts-nocheck
import { useEffect, useState, useRef } from "react";

const params = window.location.search.substr(1);

function App(props) {
  useEffect(() => {
    document.location = `https://zambrero.github.io/p4p/index.html?${params}`;
  }, []);

  return <div></div>;
}

export default App;
