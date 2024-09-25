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
                href="/teacherdashboard"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/teacherdashboard/teacher-evaluation"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Mock Test and Evaluation
              </Link>
            </li>
            <li>
              <Link
                href="/teacherdashboard/resources-management"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Resources Management
              </Link>
            </li>

            <li>
              <Link
                href="/teacherdashboard/student-performance"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Student Performance
              </Link>
            </li>

            <li>
              <Link
                href="/teacherdashboard/teacher-notification"
                className="flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                Notifications
              </Link>
            </li>
            <li>
              <Link
                href="/teacherdashboard/logout"
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