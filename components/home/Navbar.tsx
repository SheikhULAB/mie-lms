"use client"; // This marks the component as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login'); // Navigate to the login route
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex space-x-6">
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">IELTS Preparation</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Expert Evaluation</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Programs</a>
      </div>
      <button
        onClick={handleSignInClick}
        className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
      >
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
