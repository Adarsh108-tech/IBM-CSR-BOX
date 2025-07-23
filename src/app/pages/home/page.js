"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar"; // Ensure you have this
import { MapPin, Leaf, TreePalm } from "lucide-react";

// Dynamically import the map if you're using Leaflet or Google Maps
const Map = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function HomePage() {
  const [filter, setFilter] = useState("all");

  const ecoNews = [
    {
      title: "Glacier Melting Accelerates in Himalayas",
      description: "New studies show a 30% faster melt rate due to global warming.",
    },
    {
      title: "NGOs Plant 1 Million Trees in India",
      description: "A joint initiative across states has led to a massive reforestation effort.",
    },
    {
      title: "Plastic to Pavement: Roads Go Recycled",
      description: "Innovative roads made from plastic waste are gaining popularity.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B5E20]">
      <Navbar />

      {/* MAP SECTION */}
      <section className="p-6">
        <div className="bg-white shadow rounded-lg overflow-hidden border border-[#C8E6C9]">
          <div className="p-4 bg-[#C8E6C9] flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1B5E20]">Nearby Eco Spots</h2>
            <div className="text-[#2E7D32] font-medium">{filter === "all" ? "Showing All" : `Filtered: ${filter}`}</div>
          </div>

          {/* Replace this with a real map like Leaflet or Google Map */}
          <div className="h-[400px] bg-gray-200 flex items-center justify-center text-gray-600">
            {/* Example placeholder */}
            <span className="text-lg">[Map will be rendered here]</span>
          </div>

          {/* FILTER CONTROLS */}
          <div className="p-4 flex justify-around bg-[#F1F8E9] border-t border-[#C8E6C9]">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                filter === "all"
                  ? "bg-[#2E7D32] text-white"
                  : "bg-[#C8E6C9] text-[#1B5E20] hover:bg-[#B2DFDB]"
              }`}
            >
              <MapPin size={18} /> All
            </button>
            <button
              onClick={() => setFilter("recycle")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                filter === "recycle"
                  ? "bg-[#2E7D32] text-white"
                  : "bg-[#C8E6C9] text-[#1B5E20] hover:bg-[#B2DFDB]"
              }`}
            >
              ♻️ Recycle Bins
            </button>
            <button
              onClick={() => setFilter("ngo")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                filter === "ngo"
                  ? "bg-[#2E7D32] text-white"
                  : "bg-[#C8E6C9] text-[#1B5E20] hover:bg-[#B2DFDB]"
              }`}
            >
              🤝 NGOs
            </button>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="p-6">
        <h2 className="text-2xl font-bold text-[#1B5E20] mb-4">🌱 Eco-Friendly News</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ecoNews.map((news, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-[#C8E6C9] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-2">{news.title}</h3>
              <p className="text-[#37474F]">{news.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
