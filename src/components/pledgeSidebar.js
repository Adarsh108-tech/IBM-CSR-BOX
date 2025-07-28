"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function Sidebar({ setHabitType }) {
  const habitCategories = [
    "Carbon-Emissions",
    "Methane-Emissions",
    "Overconsumption-Waste",
    "Deforestation",
    "Water-Usage",
    "Consumerism-Packaging",
    "Digital-Footprint"
  ];

  const [active, setActive] = useState("Carbon-Emissions");
  const [isOpen, setIsOpen] = useState(false); // for mobile menu

  const handleClick = (category) => {
    setHabitType(category);
    setActive(category);
    setIsOpen(false); // close menu on selection (for mobile)
  };

  return (
    <div className="relative">
      {/* Mobile toggle button */}
      <div className="sm:hidden flex justify-center mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#2E7D32] text-white px-4 py-2 rounded-md font-medium hover:bg-[#1B5E20] transition"
        >
          Select Type
        </button>
      </div>

      {/* Sidebar panel */}
      <aside
        className={`sm:block fixed sm:static top-0 right-0 z-50 bg-white sm:bg-transparent h-full sm:h-auto w-64 sm:w-full shadow-lg sm:shadow-none rounded-l-2xl sm:rounded-none p-4 sm:p-0 border-l sm:border-none transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}
      >
        {/* Close button for mobile */}
        <div className="sm:hidden flex justify-end mb-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#1B5E20] text-3xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-4 sm:mb-2 text-[#1B5E20]">Habit Types</h2>
        <ul className="space-y-2">
          {habitCategories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleClick(category)}
                className={`w-full text-left px-3 py-2 rounded-md transition font-medium
                  ${
                    active === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 hover:bg-green-100 text-[#1B5E20]"
                  }`}
              >
                {category.replace(/-/g, " ")}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay when menu is open on mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-40"
        />
      )}
    </div>
  );
}
