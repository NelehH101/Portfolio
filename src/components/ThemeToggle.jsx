import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  // Start with dark mode by default
  const [theme, setTheme] = useState("dark");

  // Apply theme to <html> instead of body
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // Optional: save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load saved preference if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className={`icon sun ${theme === "dark" ? "hidden" : "visible"}`} />
      <Moon className={`icon moon ${theme === "dark" ? "visible" : "hidden"}`} />
    </button>
  );
};

export default ThemeToggle;