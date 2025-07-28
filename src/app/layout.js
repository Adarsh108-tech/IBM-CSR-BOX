"use client";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300 min-h-screen">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
