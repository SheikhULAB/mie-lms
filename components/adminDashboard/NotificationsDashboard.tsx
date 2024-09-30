"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

// Define the interface for a Notification
interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
}

const NotificationDashboard: React.FC = () => {
  // Initial sample notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New User Registered",
      message: "A new user has just signed up with the email john.doe@example.com.",
      timestamp: "10 minutes ago",
    },
    {
      id: 2,
      title: "Event Published",
      message: 'The event "Workshop on Web Development" has been successfully published.',
      timestamp: "1 hour ago",
    },
  ]);

  // Function to handle deleting a single notification
  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // Function to handle clearing all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar positioned on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6 space-y-6 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        {/* Notifications Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Notifications</h2>
          <div className="mt-4 space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <div className="mb-2 md:mb-0">
                    <p className="text-gray-700 font-bold">{notification.title}</p>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.timestamp}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 mt-2 md:mt-0"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No notifications available.</p>
            )}
          </div>
        </section>

        {/* Clear All Notifications Button */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <div className="flex justify-end">
            <button
              onClick={clearAllNotifications}
              className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-800"
            >
              Clear All Notifications
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotificationDashboard;
