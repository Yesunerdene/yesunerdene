import React, { useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [theme, settheme] = useState("dark-theme");

  const changeTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";

    localStorage.setItem("theme", newTheme);
    settheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="row">
        <div onClick={changeTheme} className="theme-button">
          {theme === "dark-theme" ? (
            <FontAwesomeIcon size="xl" color="#2c3440" icon="fa-solid fa-sun" />
          ) : (
            <FontAwesomeIcon size="lg" color="#FFF" icon="fa-solid fa-moon" />
          )}
        </div>
      </div>
      <div className="content">
        <Home theme={theme} />
      </div>
    </div>
  );
}

export default App;
