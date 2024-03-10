import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark");

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <h1 className="title">Hello world!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};
export default App;
