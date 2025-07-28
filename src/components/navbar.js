"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/pages/home" },
    { name: "Learn", href: "/pages/learn" },
    { name: "Pledge", href: "/pages/pledge" },
    { name: "Calculate", href: "/pages/carbonFootPrints" },
  ];

  return (
    <nav className="bg-[#F1F8E9] dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/ecoTrack-circle.png" alt="EcoTrack" width={40} height={40} />
          <span className="text-[#1B5E20] font-bold text-xl">EcoTrack</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-[#2E7D32] dark:text-white font-medium hover:text-[#1B5E20] transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2E7D32] dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-[#1B5E20] dark:text-white transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-[#1B5E20] dark:text-white transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1B5E20] dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 dark:bg-gray-800 transition">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-[#2E7D32] dark:text-white font-medium border-b border-[#C8E6C9] dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
