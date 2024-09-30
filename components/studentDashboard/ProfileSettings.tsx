"use client"; // Marks the component as a Client Component

import React from "react";
import Sidebar from "./Sidebar";

const StudentDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 p-6 space-y-8 overflow-y-auto">
        {/* Profile Card Section */}
        <section className="p-6 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Profile Information</h2>
          <div className="p-4 mb-6 transition-transform duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-white">Profile Card</h3>
            <p className="text-white">Name: <span id="displayName">John Doe</span></p>
            <p className="text-white">Email: <span id="displayEmail">john.doe@example.com</span></p>
            <p className="text-white">Address: <span id="displayAddress">123 Main St</span></p>
            <p className="text-white">Contact No: <span id="displayContact">+1234567890</span></p>
            <p className="text-white">Educational Institute: <span id="displayInstitute">XYZ University</span></p>
            <p className="text-white">Career Details: <span id="displayCareer">Software Developer</span></p>
            <p className="text-white">Other Details: <span id="displayOther">N/A</span></p>
          </div>
        </section>

        {/* Edit Profile Section */}
        <section className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="mb-2 text-xl font-semibold text-gray-700">Edit Profile</h3>
          <form id="editProfileForm" className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="tel"
              placeholder="Contact No"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Educational Institute"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Career Details"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Other Details"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Update Profile
            </button>
          </form>
        </section>

        {/* Password Change Section */}
        <section className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Change Password</h2>
          <form id="changePasswordForm" className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Change Password
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
