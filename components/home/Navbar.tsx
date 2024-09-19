"use client"; // This marks the component as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState<{
    ielts: boolean;
    evaluation: boolean;
    programs: boolean;
  }>({
    ielts: false,
    evaluation: false,
    programs: false,
  });

  const handleSignInClick = () => {
    router.push('/login'); // Navigate to the login route
  };

  const toggleDropdown = (key: 'ielts' | 'evaluation' | 'programs', isOpen: boolean) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [key]: isOpen,
    }));
  };

  const handleSubmenuClick = (route: string) => {
    router.push(route); // Navigate to the specified route
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex space-x-6">
        {/* IELTS Preparation Menu */}
        <div
          className="relative"
          onMouseEnter={() => toggleDropdown('ielts', true)}
          onMouseLeave={() => toggleDropdown('ielts', false)}
        >
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded">
            IELTS Preparation
          </button>
          {isDropdownOpen.ielts && (
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-10">
              <a
                onClick={() => handleSubmenuClick('/ielts-academic')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Academic IELTS MOCK
              </a>
              <a
                onClick={() => handleSubmenuClick('/ielts-general')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                General Practice Mock
              </a>
              <a
                onClick={() => handleSubmenuClick('/ielts-module')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Module Based Mock
              </a>
            </div>
          )}
        </div>

        {/* Expert Evaluation Menu */}
        <div
          className="relative"
          onMouseEnter={() => toggleDropdown('evaluation', true)}
          onMouseLeave={() => toggleDropdown('evaluation', false)}
        >
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded">
            Expert Evaluation
          </button>
          {isDropdownOpen.evaluation && (
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-10">
              <a
                onClick={() => handleSubmenuClick('/writing-evaluation')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Writing Evaluation
              </a>
              <a
                onClick={() => handleSubmenuClick('/speaking-evaluation')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Speaking Evaluation
              </a>
            </div>
          )}
        </div>

        {/* Programs Menu */}
        <div
          className="relative"
          onMouseEnter={() => toggleDropdown('programs', true)}
          onMouseLeave={() => toggleDropdown('programs', false)}
        >
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded">
            Programs
          </button>
          {isDropdownOpen.programs && (
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-10">
              <a
                onClick={() => handleSubmenuClick('/ielts-courses')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                IELTS Courses
              </a>
              <a
                onClick={() => handleSubmenuClick('/live-events')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Live Events
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Sign In Button */}
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
