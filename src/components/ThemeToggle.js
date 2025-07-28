"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded hover:scale-110 transition">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
