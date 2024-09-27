import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const linkClass =
    'flex items-center px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white';

  return (
    <div>
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-full text-white bg-red-600">
        {/* Logo */}
        <div className="flex items-center h-16 bg-red-700 justify-center">
          <img
            src="/images/logo.png"
            alt="Your Company Logo"
            className="h-12 w-12"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-2 overflow-y-auto sidebar" aria-label="Sidebar Navigation">
          <ul className="space-y-2">
            <li>
              <Link href="/admindashboard" className={linkClass}>
                Admin Panel
              </Link>
            </li>

            <li>
              <Link href="/admindashboard/user-management" className={linkClass}>
                User Management
              </Link>
            </li>

            <li>
              <Link href="/admindashboard/mock-test-management" className={linkClass}>
                Mock Test Management
              </Link>
            </li>

            <li>
              <Link href="/admindashboard/event-details" className={linkClass}>
                Event Details
              </Link>
            </li>

            <li>
              <Link href="/admindashboard/notifications" className={linkClass}>
                Notifications
              </Link>
            </li>

            <li>
              <Link href="/admindashboard/logout" className={linkClass}>
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
