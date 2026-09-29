import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext.js";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("rr-edu-theme");
    return (
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("rr-edu-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
