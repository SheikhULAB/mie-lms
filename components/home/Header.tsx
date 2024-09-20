"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 p-4 flex justify-between items-center sticky top-0 z-10">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="MIE LMS Logo" width={65} height={65} />
        </Link>
      </div>

      {/* Right: Menu Icon */}
      <div className="relative">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</Link>
            <Link href="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Subscription</Link>
            <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resources</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
