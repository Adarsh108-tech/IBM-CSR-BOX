"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/pages/home" },
    { name: "Learn", href: "/pages/learn" },
    { name: "Pledge", href: "/pages/pledge" },
    { name: "Calculate", href: "/pages/carbonFootPrints" },
  ];

  return (
    <nav className="bg-[#F1F8E9] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/ecoTrack-circle.png" alt="EcoTrack" width={40} height={40} />
          <span className="text-[#1B5E20] font-bold text-xl">EcoTrack</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-[#2E7D32] font-medium hover:text-[#1B5E20] transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2E7D32] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1B5E20]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-[#2E7D32] font-medium border-b border-[#C8E6C9]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
