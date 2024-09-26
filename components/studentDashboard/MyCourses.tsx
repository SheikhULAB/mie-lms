// components/MyCourses.tsx
import React from 'react';
import Sidebar from './Sidebar';

const MyCourses: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        {/* Overview Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="p-3 bg-red-600 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Enrolled Courses</p>
                <p className="text-gray-600">5</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="p-3 bg-green-600 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Completed Assignments</p>
                <p className="text-gray-600">12</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="p-3 bg-blue-600 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Upcoming Exams</p>
                <p className="text-gray-600">3</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="p-3 bg-yellow-600 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Pending Reviews</p>
                <p className="text-gray-600">2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Activities</h2>
          <div className="mt-4">
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-gray-700"><strong>John Doe</strong> submitted an assignment.</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-gray-700"><strong>Jane Smith</strong> joined a new course.</p>
                  <p className="text-sm text-gray-500">10 minutes ago</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-gray-700"><strong>Robert Brown</strong> started a new quiz.</p>
                  <p className="text-sm text-gray-500">30 minutes ago</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Available Courses Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Available Courses</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Course Card 1 */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Course Title 1</h3>
              <p className="mt-2 text-gray-600">Short course description goes here.</p>
              <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">Enroll Now</button>
            </div>
            {/* Course Card 2 */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Course Title 2</h3>
              <p className="mt-2 text-gray-600">Short course description goes here.</p>
              <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">Enroll Now</button>
            </div>
            {/* Course Card 3 */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Course Title 3</h3>
              <p className="mt-2 text-gray-600">Short course description goes here.</p>
              <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">Enroll Now</button>
            </div>
            {/* Add more course cards as needed */}
          </div>
        </section>

        {/* Profile Settings Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Profile Settings</h2>
          <div className="mt-4">
            <form action="#">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700">First Name</label>
                  <input type="text" id="first-name" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700">Last Name</label>
                  <input type="text" id="last-name" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input type="password" id="password" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
                  <input type="password" id="confirm-password" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                </div>
              </div>
              <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">Save Changes</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCourses;
