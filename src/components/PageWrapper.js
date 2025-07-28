"use client";

export default function PageWrapper({ children }) {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      {children}
    </div>
  );
}
