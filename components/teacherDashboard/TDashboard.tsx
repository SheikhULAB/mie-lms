// components/Dashboard.tsx

import React from 'react';
import Sidebar from './Sidebar';

interface MockTest {
  id: number;
  title: string;
  className: string;
}

interface EvaluationTest {
  id: number;
  title: string;
  className: string;
  dueDate: string;
}

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

const TDashboard: React.FC = () => {
  const mockTests: MockTest[] = [
    { id: 1, title: "Mock Test 1", className: "Class 10A" },
    { id: 2, title: "Mock Test 2", className: "Class 10B" },
  ];

  const evaluationTests: EvaluationTest[] = [
    { id: 1, title: "Math Evaluation", className: "Class 10A", dueDate: "2024-07-10" },
  ];

  const notifications: Notification[] = [
    { id: 1, message: "System Update: New feature added.", timestamp: "2 minutes ago" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Mock Test Overview Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Mock Test Overview</h2>
          <div className="mt-4 space-y-4 lg:max-h-64 overflow-y-auto">
            {mockTests.map((test) => (
              <div key={test.id} className="bg-gray-100 rounded-lg shadow-md p-4 flex items-center space-x-4">
                <div className="p-3 bg-blue-600 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">{test.title}</p>
                  <p className="text-gray-600">{test.className}</p>
                </div>
                <div className="space-x-2">
                  <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Download Paper</button>
                  <button className="px-4 py-2 text-white bg-green-600 rounded-lg">Upload Marks</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Test Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Evaluation Test</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Evaluation Test</th>
                  <th className="px-4 py-2 text-left text-gray-600">Class</th>
                  <th className="px-4 py-2 text-left text-gray-600">Due Date</th>
                  <th className="px-4 py-2 text-left text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {evaluationTests.map((test) => (
                  <tr key={test.id}>
                    <td className="px-4 py-2">{test.title}</td>
                    <td className="px-4 py-2">{test.className}</td>
                    <td className="px-4 py-2">{test.dueDate}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Download Test</button>
                      <button className="px-4 py-2 text-white bg-green-600 rounded-lg">Upload Marked File</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Student Performance Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Student Performance</h2>
          <div className="mt-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">Chart Placeholder</p>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
          <div className="mt-4">
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>System Update:</strong> {notification.message}</p>
                    <p className="text-sm text-gray-500">{notification.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Daily Quiz Assignment Section */}
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Daily Quiz Assignment</h2>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700">Question:</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows={3} placeholder="Enter your quiz question here" />
            </div>

            {Array.from({ length: 4 }, (_, index) => (
              <div key={index}>
                <label className="block text-gray-700">Option {index + 1}:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder={`Option ${index + 1}`} />
              </div>
            ))}

            <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg">Submit Question</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default TDashboard;
