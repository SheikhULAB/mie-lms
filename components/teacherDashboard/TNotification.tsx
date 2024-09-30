// components/Notifications.tsx
import React from 'react';
import Sidebar from './Sidebar';

const TNotifications: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-8 space-y-6 sm:space-y-8">
        {/* Page Title */}
        <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Notifications</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Stay updated with the latest announcements and important alerts.
          </p>
        </section>

        {/* Recent Notifications Section */}
        <section className="p-6 sm:p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Recent Notifications</h2>
          <div className="mt-4 sm:mt-6 space-y-4">
            {/* Notification Item */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex items-start sm:items-center space-x-3">
                <div className="p-2 sm:p-3 bg-blue-600 rounded-full">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.714A9.717 9.717 0 012.286 12 9.717 9.717 0 0112 2.286 9.717 9.717 0 0121.714 12 9.717 9.717 0 0112 21.714zM11 6v6l5.297 3.18L17 14.09l-4.5-2.73V6H11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Exam Schedule Update
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    The exam for Class 10A has been rescheduled to 10th October.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">2 hours ago</span>
            </div>

            {/* Repeat for other notifications */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex items-start sm:items-center space-x-3">
                <div className="p-2 sm:p-3 bg-green-600 rounded-full">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.714A9.717 9.717 0 012.286 12 9.717 9.717 0 0112 2.286 9.717 9.717 0 0121.714 12 9.717 9.717 0 0112 21.714zM11 6v6l5.297 3.18L17 14.09l-4.5-2.73V6H11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Mock Test Results Published
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    The results for Mock Test 1 are now available.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">1 day ago</span>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="p-6 sm:p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Announcements</h2>
          <div className="mt-4 sm:mt-6 space-y-4">
            {/* Announcement Item */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-md">
              <div className="flex items-start sm:items-center space-x-3">
                <div className="p-2 sm:p-3 bg-yellow-500 rounded-full">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.714A9.717 9.717 0 012.286 12 9.717 9.717 0 0112 2.286 9.717 9.717 0 0121.714 12 9.717 9.717 0 0112 21.714zM11 6v6l5.297 3.18L17 14.09l-4.5-2.73V6H11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    New Course Available
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Enroll in the new advanced Math course starting next week.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">3 days ago</span>
            </div>

            {/* Repeat for other announcements */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-md">
              <div className="flex items-start sm:items-center space-x-3">
                <div className="p-2 sm:p-3 bg-yellow-500 rounded-full">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.714A9.717 9.717 0 012.286 12 9.717 9.717 0 0112 2.286 9.717 9.717 0 0121.714 12 9.717 9.717 0 0112 21.714zM11 6v6l5.297 3.18L17 14.09l-4.5-2.73V6H11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Holiday Announcement
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Classes will remain closed on 15th August for Independence Day.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">5 days ago</span>
            </div>
          </div>
        </section>

        {/* Category Filter for Alerts */}
        <section className="p-6 sm:p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Filter by Category</h2>
          <div className="flex flex-wrap mt-4 sm:mt-6 space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-4 py-2 text-white bg-blue-600 rounded-lg">Exams</button>
            <button className="w-full sm:w-auto px-4 py-2 text-white bg-green-600 rounded-lg">Results</button>
            <button className="w-full sm:w-auto px-4 py-2 text-white bg-yellow-600 rounded-lg">Announcements</button>
            <button className="w-full sm:w-auto px-4 py-2 text-white bg-red-600 rounded-lg">Important</button>
          </div>

          {/* Filtered Notifications (after category selection) */}
          <div className="mt-4 sm:mt-6 space-y-4">
            {/* Sample notification after category selection */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-red-100 rounded-lg shadow-md">
              <div className="flex items-start sm:items-center space-x-3">
                <div className="p-2 sm:p-3 bg-red-500 rounded-full">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.714A9.717 9.717 0 012.286 12 9.717 9.717 0 0112 2.286 9.717 9.717 0 0121.714 12 9.717 9.717 0 0112 21.714zM11 6v6l5.297 3.18L17 14.09l-4.5-2.73V6H11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Urgent: Assignment Submission Deadline
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Please submit your assignments for Class 10A by 8 PM today.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">1 hour ago</span>
            </div>

            {/* Repeat for other filtered notifications */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-blue-100 rounded-lg shadow-md">
              <div className="flex items-start sm:items-center space-x-3">
                <div className="p-2 sm:p-3 bg-blue-500 rounded-full">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.714A9.717 9.717 0 012.286 12 9.717 9.717 0 0112 2.286 9.717 9.717 0 0121.714 12 9.717 9.717 0 0112 21.714zM11 6v6l5.297 3.18L17 14.09l-4.5-2.73V6H11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Exam Hall Allocation Released
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Check your allocated hall for the upcoming Mock Test 2.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">2 days ago</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TNotifications;
