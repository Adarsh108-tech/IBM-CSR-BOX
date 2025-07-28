"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/pledgeSidebar";
import habits from "./habit.json";
import { FiGlobe, FiFeather } from "react-icons/fi";

const PLEDGE_START_KEY = "pledgeStartDate";
const getCompletedKey = (type) => `completedDays-${type}`;

const getDayIndexFromStart = () => {
  const storedDate = localStorage.getItem(PLEDGE_START_KEY);
  if (!storedDate) return 0;
  const startDate = new Date(storedDate);
  const today = new Date();
  const diff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return Math.min(diff, 20); // Cap at 21 days
};

export default function PledgePage() {
  const [selectedType, setSelectedType] = useState("Carbon-Emissions");
  const [selectedDay, setSelectedDay] = useState(null);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [completedDays, setCompletedDays] = useState([]);
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    const startDate = localStorage.getItem(PLEDGE_START_KEY);
    if (!startDate) {
      const today = new Date().toISOString();
      localStorage.setItem(PLEDGE_START_KEY, today);
    }

    const index = getDayIndexFromStart();
    setTodayIndex(index);

    const storedCompleted = JSON.parse(localStorage.getItem(getCompletedKey(selectedType)) || "[]");
    setCompletedDays(storedCompleted);
    setTaskCompleted(storedCompleted.includes(index));
  }, [selectedType]);

  const handleDayClick = (index) => {
    setSelectedDay(index);
    setTaskCompleted(completedDays.includes(index));
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const handleCompleteTask = () => {
    if (!completedDays.includes(selectedDay)) {
      const updated = [...completedDays, selectedDay];
      setCompletedDays(updated);
      localStorage.setItem(getCompletedKey(selectedType), JSON.stringify(updated));
    }
    setTaskCompleted(true);
    handleCloseModal();
  };

  const getTaskForDay = (dayIndex) => {
    const tasks = habits[selectedType] || [];
    return tasks[dayIndex % tasks.length] || "No task available.";
  };

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B5E20]">

      <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        {/* Heading and info */}
        <div>
          <h1 className="text-3xl font-extrabold mb-4 flex items-center text-[#1B5E20]">
            <FiGlobe className="text-4xl mr-3 transition-transform duration-300 hover:scale-110 hover:text-[#2E7D32]" />
            Make a 21-Day Pledge
          </h1>

          <p className="mb-6 text-lg text-[#37474F]">
            Ready to make a positive impact? Select a habit type and challenge yourself for 21 days!
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-xl font-semibold mb-4 text-[#2E7D32]">
              Selected Pledge Type:{" "}
              <span className="font-bold text-[#1B5E20]">
                {selectedType.replace(/-/g, " ")}
              </span>
            </p>
            <p className="text-[#37474F]">
              Click on any day in the calendar to see your task. You can only complete today's task.
            </p>
          </div>
        </div>

        {/* Calendar and Sidebar */}
        <div className="flex flex-col sm:flex-row-reverse gap-6">
          {/* Sidebar */}
          <div className="w-full sm:w-1/4 sm:pl-4">
            <Sidebar setHabitType={setSelectedType} />
          </div>

          {/* Calendar */}
          <div className="w-full sm:w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-[#1B5E20]">Your 21-Day Journey</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {Array.from({ length: 21 }, (_, index) => (
                <div
                  key={index}
                  onClick={() => handleDayClick(index)}
                  className={`relative h-28 flex flex-col items-center justify-center rounded-xl border-2 transition-all duration-300 overflow-hidden
                    ${index === todayIndex
                      ? "bg-[#2E7D32] border-[#2E7D32] text-white shadow-lg transform scale-105 cursor-pointer hover:scale-110"
                      : "bg-[#C8E6C9] border-[#C8E6C9] text-[#1B5E20] cursor-pointer hover:scale-105"}
                    ${selectedDay === index ? "ring-4 ring-[#4FC3F7] ring-opacity-70" : ""}`}
                >
                  <div className="text-lg font-bold">Day {index + 1}</div>
                  <div className="text-sm">{index === todayIndex ? "Today" : ""}</div>
                  {completedDays.includes(index) && (
                    <div className="absolute top-1 right-1 bg-[#4FC3F7] text-white text-xs px-2 py-1 rounded-full">
                      Completed
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Daily Task */}
      {selectedDay !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-5 text-[#1B5E20] flex items-center gap-2">
              <FiFeather className="text-[#1B5E20]" />{" "}
              {selectedDay === todayIndex ? "Today's Challenge" : `Day ${selectedDay + 1} Challenge`}
            </h2>

            <p className="mb-6 text-xl text-[#37474F] leading-relaxed">{getTaskForDay(selectedDay)}</p>

            {selectedDay === todayIndex && (
              <div className="mb-6 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="taskCompleted"
                  checked={taskCompleted}
                  onChange={handleCompleteTask}
                  className="form-checkbox h-6 w-6 text-[#2E7D32] rounded-md focus:ring-[#2E7D32]"
                />
                <label htmlFor="taskCompleted" className="text-lg text-[#1B5E20] font-medium">
                  I've completed this task!
                </label>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-6 py-3 bg-gray-200 text-[#1B5E20] rounded-lg hover:bg-gray-300 transition duration-200 font-semibold"
              >
                Close
              </button>
              {selectedDay === todayIndex && (
                <button
                  onClick={handleCompleteTask}
                  className="px-6 py-3 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1B5E20] transition duration-200 font-semibold shadow-md"
                >
                  Accept Task
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
