import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
             {/* Sidebar */}
      <div className="flex flex-col w-64 h-full text-white bg-red-600">
        {/* Logo */}
        <div className="flex items-center h-16 bg-red-700 justify-center">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12" />
          {/* You can replace the image with your logo */}
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-2 overflow-y-auto sidebar">
          <ul className="space-y-2">
            <li>
              <Link
                href="/studentdashboard"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/studentdashboard/my-courses"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                My Courses
              </Link>
            </li>

            <li>
              <Link
                href="/studentdashboard/mocktest"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Mock Test
              </Link>
            </li>
            <li>
              <Link
                href="/studentdashboard/expert_evaluation"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Expert Evaluation
              </Link>
            </li>

            <li>
              <Link
                href="/studentdashboard/profile_settings"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Profile Settings
              </Link>
            </li>

            <li>
              <Link
                href="/studentdashboard/help"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                href="/studentdashboard/logout"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
        </div>
    );
};

export default Sidebar;