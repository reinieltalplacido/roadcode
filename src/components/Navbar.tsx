import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black py-2 px-6 border-b border-white/10 w-full">
      <div className="grid grid-cols-3 items-center w-full">
        {/* Left: Logo and Nav Links */}
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#6366F1" />
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="sans-serif" fontWeight="bold">C</text>
          </svg>
          <Link href="/" className="text-white font-bold text-2xl tracking-tight hover:opacity-80 transition select-none mr-8">
            Codemap
          </Link>
          <Link href="#" className="hover:text-white transition text-sm font-medium text-white/80 mr-6">Showcase</Link>
          <Link href="/docs" className="hover:text-white transition text-sm font-medium text-white">Docs</Link>
        </div>
        {/* Center: Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-72 px-4 py-1.5 rounded bg-[#18181b] text-white border border-white/10 focus:outline-none focus:border-white/20 placeholder:text-white/40 text-sm"
          />
        </div>
        {/* Right: Action Buttons */}
        <div className="flex items-center justify-end space-x-3">
          <button className="bg-[#23272f] text-white text-xs font-semibold px-4 py-1.5 rounded hover:bg-[#2a2e38] border border-white/10 transition">Feedback</button>
          <Link href="/learn" className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded hover:bg-gray-200 transition">Learn</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 