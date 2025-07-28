"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext"; 


const pledgeTypes = [
  "Air Pollution",
  "Deforestation",
  "Plastic Waste",
  "Energy Saving",
  "Water Conservation",
];

const dailyTasks = {
  "Air Pollution": [
    "Use public transport today",
    "Avoid using your car",
    "Plant a tree or share a green post online",
    "Switch off your vehicle at red lights",
    "Promote carpooling to a friend",
  ],
  "Deforestation": [
    "Read about deforestation impact",
    "Avoid printing paper unnecessarily",
    "Share awareness on social media",
    "Opt for digital notes",
    "Donate to forest NGOs",
  ],
  "Plastic Waste": [
    "Avoid single-use plastic today",
    "Carry a cloth bag",
    "Say no to bottled water",
    "Separate dry and plastic waste",
    "Clean up one plastic item",
  ],
  "Energy Saving": [
    "Turn off unused appliances",
    "Use natural light during the day",
    "Limit phone screen time",
    "Turn off lights when leaving room",
    "Charge only when needed",
  ],
  "Water Conservation": [
    "Turn off the tap while brushing",
    "Fix any leaks today",
    "Use a bucket instead of shower",
    "Spread awareness about water saving",
    "Don't waste drinking water",
  ],
};

const getTodayIndex = () => new Date().getDate() % 21;

export default function PledgePage() {
  const [selectedType, setSelectedType] = useState("Air Pollution");
  const [selectedDay, setSelectedDay] = useState(null);
  const [taskAccepted, setTaskAccepted] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const todayIndex = getTodayIndex();

  const { theme, toggleTheme } = useTheme(); // ⬅️ Get theme and toggle function

  const handleDayClick = (index) => {
    if (index === todayIndex) {
      setSelectedDay(index);
      setTaskAccepted(false);
      setTaskCompleted(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const getRandomTask = () => {
    const tasks = dailyTasks[selectedType] || [];
    return tasks[todayIndex % tasks.length];
  };

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B5E20] dark:bg-gray-900 dark:text-white transition-colors duration-300">

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">🌍 Make a 21-Day Pledge</h1>

        {/* Type Filter */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Choose a cause:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2 rounded border border-[#B0BEC5] bg-white dark:bg-gray-700 dark:text-white"
          >
            {pledgeTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* 21 Day Calendar */}
        <div className="grid grid-cols-7 gap-3">
          {Array.from({ length: 21 }, (_, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(index)}
              className={`h-20 flex items-center justify-center rounded-lg border font-medium transition ${
                index === todayIndex
                  ? "bg-[#2E7D32] text-white hover:bg-[#1B5E20]"
                  : "bg-white dark:bg-gray-700 border-[#C8E6C9] text-[#1B5E20] dark:text-white cursor-not-allowed"
              }`}
              disabled={index !== todayIndex}
            >
              Day {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDay !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-[#2E7D32] dark:text-green-300">Today's Task</h2>
            <p className="mb-4 text-[#37474F] dark:text-gray-200">{getRandomTask()}</p>

            <div className="mb-4">
              <label className="flex items-center gap-2 text-[#1B5E20] dark:text-white">
                <input
                  type="checkbox"
                  checked={taskCompleted}
                  onChange={() => setTaskCompleted(!taskCompleted)}
                />
                I’ve completed this task!
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-[#1B5E20] rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setTaskAccepted(true);
                  handleCloseModal();
                }}
                className="px-4 py-2 bg-[#2E7D32] text-white rounded hover:bg-[#1B5E20]"
              >
                Accept Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
