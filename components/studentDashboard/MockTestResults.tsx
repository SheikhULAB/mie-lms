// src/components/MockTestResults.tsx
"use client"; // Marks the component as a Client Component

import React from "react";
import Sidebar from "./Sidebar";

const MockTestResults: React.FC = () => {
  return (
    <div className="flex h-screen"> {/* Flex container for sidebar and content */}
      <Sidebar /> {/* Sidebar takes 1/4 of the width */}
      
      <div className="flex-1 p-6 space-y-6 overflow-y-auto"> {/* Main content takes remaining width */}
        {/* Header Section with Tabs */}
        <div className="flex items-center justify-between p-4 text-white rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500">
          <h2 className="text-3xl font-bold">Mock Test Results</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-semibold text-purple-700 transition bg-white rounded-lg shadow hover:bg-purple-200">
              Academic
            </button>
            <button className="px-4 py-2 font-semibold text-purple-700 transition bg-white rounded-lg shadow hover:bg-purple-200">
              General
            </button>
            <button className="px-4 py-2 font-semibold text-purple-700 transition bg-white rounded-lg shadow hover:bg-purple-200">
              Module-Based
            </button>
          </div>
        </div>

        {/* Creative Mock Test Cards */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Academic Mock Test */}
          <div className="relative p-6 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500 rounded-full">
                {/* Academic Icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Academic Mock Test</h3>
                <p className="text-gray-500">Date: 2024-09-01</p>
                <p className="text-gray-500">Score: 7.5</p>
              </div>
            </div>
            <button className="absolute px-4 py-2 text-white transition bg-purple-500 rounded-lg shadow right-4 bottom-4 hover:bg-purple-700">
              View Report
            </button>
          </div>

          {/* General Mock Test */}
          <div className="relative p-6 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-500 rounded-full">
                {/* General Icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">General Mock Test</h3>
                <p className="text-gray-500">Date: 2024-08-28</p>
                <p className="text-gray-500">Score: 6.5</p>
              </div>
            </div>
            <button className="absolute px-4 py-2 text-white transition bg-purple-500 rounded-lg shadow right-4 bottom-4 hover:bg-purple-700">
              View Report
            </button>
          </div>

          {/* Module-Based Mock Test */}
          <div className="relative p-6 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-500 rounded-full">
                {/* Module-Based Icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Module Based Mock Test</h3>
                <p className="text-gray-500">Date: 2024-08-20</p>
                <p className="text-gray-500">Score: 8.0</p>
              </div>
            </div>
            <button className="absolute px-4 py-2 text-white transition bg-purple-500 rounded-lg shadow right-4 bottom-4 hover:bg-purple-700">
              View Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestResults;
