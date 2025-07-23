"use client";

import { useState } from "react";
import Navbar from "@/components/navbar"; // reuse the navbar
import { BookOpen, Leaf, ThermometerSun, Trash2 } from "lucide-react";

const learningData = [
  {
    ageGroup: "kids",
    topic: "glaciers",
    title: "Melting Glaciers",
    description: "Glaciers are giant ice blocks. They're melting due to global warming!",
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "pollution",
    title: "Air Pollution",
    description: "Pollution from vehicles and factories harms our air and health.",
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "climate",
    title: "Climate Crisis Explained",
    description: "Understand the science, impact, and solutions to the climate crisis.",
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "recycling",
    title: "Smart Recycling",
    description: "Recycling saves energy, reduces waste, and helps the planet.",
    icon: <BookOpen size={24} />,
  },
  // Add more entries as needed
];

export default function LearnPage() {
  const [ageGroup, setAgeGroup] = useState("kids");
  const [topic, setTopic] = useState("glaciers");

  const filteredContent = learningData.filter(
    (item) => item.ageGroup === ageGroup && item.topic === topic
  );

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B5E20]">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#C8E6C9] p-6 space-y-6 border-r border-[#B2DFDB] hidden md:block">
          <div>
            <h2 className="text-lg font-bold mb-2">Select Age Group</h2>
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="w-full p-2 rounded border border-[#B0BEC5] bg-white text-[#1B5E20]"
            >
              <option value="kids">Kids</option>
              <option value="teens">Teens</option>
              <option value="adults">Adults</option>
            </select>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Choose a Topic</h2>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-2 rounded border border-[#B0BEC5] bg-white text-[#1B5E20]"
            >
              <option value="glaciers">Glaciers</option>
              <option value="pollution">Pollution</option>
              <option value="climate">Climate Change</option>
              <option value="recycling">Recycling</option>
            </select>
          </div>
        </aside>

        {/* Content Section */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Learn About {topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredContent.length > 0 ? (
              filteredContent.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#C8E6C9] rounded-lg shadow hover:shadow-md transition p-4"
                >
                  <div className="flex items-center gap-2 text-[#2E7D32] mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-[#37474F]">{item.description}</p>
                </div>
              ))
            ) : (
              <p>No content available for this selection.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
