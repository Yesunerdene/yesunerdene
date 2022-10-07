import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [theme, settheme] = useState("dark-theme");

  useEffect(() => {
    document.body.style.background = "#2c3440";
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";

    localStorage.setItem("theme", newTheme);
    settheme(newTheme);
    let color;

    if (newTheme === "dark-theme") {
      color = "#2c3440";
    } else {
      color = "#FFF";
    }

    document.body.style.background = color;
  };

  return (
    <div className={`App ${theme}`}>
      <div className="content">
        <Home theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}

export default App;
