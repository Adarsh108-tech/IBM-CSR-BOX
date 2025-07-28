"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const Map = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function HomePage() {
  const [filter, setFilter] = useState("all");
  const [newsIndex, setNewsIndex] = useState(0);


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
    {
      title: "Eco-Bricks Being Used in New Smart Cities",
      description: "Waste plastic bricks are being adopted in smart infrastructure.",
    },
    {
      title: "Solar Villages Lead the Green Revolution",
      description: "Remote areas now fully powered by solar energy.",
    },
  ];

  // Rotate news
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % ecoNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-[#F1F8E9] text-[#1B5E20] dark:bg-gray-900 dark:text-white">

      {/* 📍 MAP Section */}
      <section className="p-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-[#C8E6C9] dark:border-gray-700">
          <div className="p-4 bg-[#C8E6C9] dark:bg-gray-700 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1B5E20] dark:text-white">Nearby Eco Spots</h2>
            <div className="text-[#2E7D32] dark:text-green-200 font-medium">
              {filter === "all" ? "Showing All" : `Filtered: ${filter}`}
            </div>
          </div>

          <Map filter={filter} />

          {/* Filter Buttons */}
          <div className="p-4 flex justify-around bg-[#F1F8E9] dark:bg-gray-800 border-t border-[#C8E6C9] dark:border-gray-600">
            {["all", "recycle", "ngo"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  filter === type
                    ? "bg-[#2E7D32] text-white"
                    : "bg-[#C8E6C9] text-[#1B5E20] dark:bg-gray-600 dark:text-white hover:bg-[#B2DFDB] dark:hover:bg-gray-500"
                }`}
              >
                {type === "all" && <MapPin size={18} />}
                {type === "recycle" && "♻️"}
                {type === "ngo" && "🤝"}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 📰 News Ticker */}
      <div className="bg-[#A5D6A7] dark:bg-green-700 py-3 px-6 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-[#1B5E20] dark:text-white font-semibold">
          🗞️ {new Date().toLocaleDateString()} | {ecoNews[newsIndex].title} — {ecoNews[newsIndex].description}
        </div>
      </div>

      {/* 🗞️ News Grid */}
      <section className="p-6 flex-grow">
        <h2 className="text-2xl font-bold text-[#1B5E20] dark:text-white mb-4">🌍 Eco-Friendly News</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ecoNews.map((news, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-[#C8E6C9] dark:border-gray-700 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#2E7D32] dark:text-green-300 mb-2">{news.title}</h3>
              <p className="text-[#37474F] dark:text-gray-300">{news.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌐 Footer */}
      <footer className="bg-[#C8E6C9] dark:bg-gray-800 p-8 text-center border-t border-[#A5D6A7] dark:border-gray-700 mt-8">
        <div className="text-[#1B5E20] dark:text-white text-lg font-semibold mb-2">
          🌍 Let's make the world greener — one step at a time.
        </div>
        <img
          src="https://i.pinimg.com/originals/f3/7e/bb/f37ebbea1f4318dec775a4d705bd7cca.gif"
          alt="Spinning globe"
          className="w-20 mx-auto"
        />
        <div className="text-xs text-[#2E7D32] dark:text-green-200 mt-4">
          © {new Date().getFullYear()} EcoTrack • Built with 💚
        </div>
      </footer>

      {/* 🔁 Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 35s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
