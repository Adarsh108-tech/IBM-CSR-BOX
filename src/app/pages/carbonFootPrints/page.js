"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#2E7D32", "#4FC3F7", "#C8E6C9"];

export default function CarbonCalculator() {
  const [form, setForm] = useState({
    transportMode: "car",
    distance: 0,
    electricity: 0,
    diet: "average",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculateEmissions = () => {
    const { transportMode, distance, electricity, diet } = form;

    const transportFactors = {
      car: 0.21,
      bus: 0.08,
      train: 0.05,
      flight: 0.25,
    };

    const dietFactors = {
      vegetarian: 1.5,
      vegan: 1.2,
      average: 2.5,
      meatLover: 3.3,
    };

    const transportEmission = (distance || 0) * transportFactors[transportMode];
    const electricityEmission = (electricity || 0) * 0.85;
    const foodEmission = dietFactors[diet] * 30;

    const total = transportEmission + electricityEmission + foodEmission;

    return {
      transportEmission,
      electricityEmission,
      foodEmission,
      totalEmission: total,
    };
  };

  const emissions = calculateEmissions();

  const chartData = [
    { name: "Transport", value: emissions.transportEmission },
    { name: "Electricity", value: emissions.electricityEmission },
    { name: "Food", value: emissions.foodEmission },
  ];

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B5E20] dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-[#C8E6C9] dark:border-gray-700 space-y-6">
          <h1 className="text-2xl font-bold mb-4">🌍 Carbon Emission Calculator</h1>

          <div>
            <label className="block mb-1 font-medium">🚗 Transport Mode</label>
            <select
              name="transportMode"
              value={form.transportMode}
              onChange={handleChange}
              className="w-full border p-2 rounded border-[#B0BEC5] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="flight">Flight</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Distance Travelled (km)</label>
            <input
              type="number"
              name="distance"
              value={form.distance}
              onChange={handleChange}
              className="w-full border p-2 rounded border-[#B0BEC5] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">🏡 Electricity Used (kWh per month)</label>
            <input
              type="number"
              name="electricity"
              value={form.electricity}
              onChange={handleChange}
              className="w-full border p-2 rounded border-[#B0BEC5] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">🍽️ Diet Type</label>
            <select
              name="diet"
              value={form.diet}
              onChange={handleChange}
              className="w-full border p-2 rounded border-[#B0BEC5] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="average">Average</option>
              <option value="meatLover">Meat Lover</option>
            </select>
          </div>

          <div className="pt-6 border-t border-[#C8E6C9] dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-2 text-[#2E7D32] dark:text-green-300">
              Estimated Monthly Emissions:
            </h2>
            <ul className="space-y-1">
              <li>
                🚗 Transport:{" "}
                <strong>{emissions.transportEmission.toFixed(2)} kg CO₂</strong>
              </li>
              <li>
                ⚡ Electricity:{" "}
                <strong>{emissions.electricityEmission.toFixed(2)} kg CO₂</strong>
              </li>
              <li>
                🥗 Food:{" "}
                <strong>{emissions.foodEmission.toFixed(2)} kg CO₂</strong>
              </li>
              <li className="mt-2 text-[#1B5E20] dark:text-white text-xl">
                🌐 <strong>Total: {emissions.totalEmission.toFixed(2)} kg CO₂</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-[#C8E6C9] dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-[#2E7D32] dark:text-green-300">
            Emission Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
