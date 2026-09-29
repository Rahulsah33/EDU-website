import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      className="icon-button"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
