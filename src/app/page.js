"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { useTheme } from "@context/ThemeContext"; // ✅ Make sure this path matches your structure
import { useTheme } from "../context/ThemeContext";

export default function AuthSection() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/pages/home");
  };

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row ${
        theme === "dark" ? "bg-[#263238] text-white" : "bg-[#F1F8E9] text-black"
      }`}
    >
      {/* Left Section */}
      <div
        className={`md:w-1/2 flex flex-col justify-center items-center p-10 text-center ${
          theme === "dark" ? "bg-[#37474F]" : "bg-[#C8E6C9]"
        }`}
      >
        <Image src="/logo.png" alt="Company Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-3xl font-bold text-[#1B5E20] mb-2">EcoTrack</h1>
        <p className="text-lg max-w-md">
          Track your carbon footprint, reduce emissions, and take action for a greener future. Join us in creating a sustainable world.
        </p>
      </div>

      {/* Right Section - Forms */}
      <div
        className={`md:w-1/2 flex flex-col justify-center items-center p-8 ${
          theme === "dark" ? "bg-[#455A64]" : "bg-white"
        }`}
      >
        <div className="w-full max-w-md">
          {/* Theme Toggle Button */}
          <div className="flex justify-between mb-6">
            <button
              onClick={toggleTheme}
              className="text-sm text-blue-500 hover:underline"
            >
               {theme === "dark" ? "☀️" : "🌙"} 
            </button>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-[#2E7D32] hover:underline"
            >
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
          </div>

          {/* Login Form */}
          {isLogin && (
            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow bg-opacity-20">
              <h2 className="text-xl font-semibold mb-4">Login</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#2E7D32] text-white py-2 rounded hover:bg-[#1B5E20] transition"
              >
                Login
              </button>
            </form>
          )}

          {/* Registration Form */}
          {!isLogin && (
            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow bg-opacity-20">
              <h2 className="text-xl font-semibold mb-4">Register</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#2E7D32] text-white py-2 rounded hover:bg-[#1B5E20] transition"
              >
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
