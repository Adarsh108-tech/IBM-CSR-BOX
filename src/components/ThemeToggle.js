"use client";
import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:scale-110 transition text-xl text-[#2E7D32]"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
