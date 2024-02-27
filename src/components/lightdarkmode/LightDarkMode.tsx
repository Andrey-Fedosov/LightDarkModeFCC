import React from "react";
import "./theme.css";
import { useLocalStorage } from "./useLocalStorage";

export function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function changeThemeHandler() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h2>It's light dark mode</h2>
        <button onClick={changeThemeHandler}>Change color</button>
      </div>
    </div>
  );
}
