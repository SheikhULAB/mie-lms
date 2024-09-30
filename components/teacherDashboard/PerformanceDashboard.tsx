// components/StudentPerformanceMonitor.tsx
import React from 'react';
import Sidebar from './Sidebar';

const PerformanceDashboard: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Student Performance Overview Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Student Performance Overview</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Detailed performance tracking for individual students based on mock tests, evaluations, and IELTS equivalent scores.
          </p>

          {/* Student Details and Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 mt-4 bg-gray-100 rounded-lg shadow space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="student-name" className="block text-gray-700">Select Student:</label>
              <select
                id="student-name"
                className="block w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="all">All Students</option>
                <option value="student1">Student 1</option>
                <option value="student2">Student 2</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="class-filter" className="block text-gray-700">Filter by Class:</label>
              <select
                id="class-filter"
                className="block w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="all">All Classes</option>
                <option value="10A">Class 10A</option>
                <option value="10B">Class 10B</option>
              </select>
            </div>
          </div>
        </section>

        {/* Mock Test Performance Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Mock Test Performance</h2>

          {/* Mock Test Scores Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Mock Test</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Class</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Score</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Max Score</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Percentage</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">IELTS Equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Mock Test 1</td>
                  <td className="px-2 sm:px-4 py-2">Class 10A</td>
                  <td className="px-2 sm:px-4 py-2">75</td>
                  <td className="px-2 sm:px-4 py-2">100</td>
                  <td className="px-2 sm:px-4 py-2">75%</td>
                  <td className="px-2 sm:px-4 py-2">6.5</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Mock Test 2</td>
                  <td className="px-2 sm:px-4 py-2">Class 10B</td>
                  <td className="px-2 sm:px-4 py-2">85</td>
                  <td className="px-2 sm:px-4 py-2">100</td>
                  <td className="px-2 sm:px-4 py-2">85%</td>
                  <td className="px-2 sm:px-4 py-2">7.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Evaluation Test Performance Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Evaluation Test Performance</h2>

          {/* Evaluation Test Scores Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Evaluation Test</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Class</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Score</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Max Score</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Percentage</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-600">Performance Ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Math Evaluation</td>
                  <td className="px-2 sm:px-4 py-2">Class 10A</td>
                  <td className="px-2 sm:px-4 py-2">80</td>
                  <td className="px-2 sm:px-4 py-2">100</td>
                  <td className="px-2 sm:px-4 py-2">80%</td>
                  <td className="px-2 sm:px-4 py-2">1.06</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Science Evaluation</td>
                  <td className="px-2 sm:px-4 py-2">Class 10B</td>
                  <td className="px-2 sm:px-4 py-2">90</td>
                  <td className="px-2 sm:px-4 py-2">100</td>
                  <td className="px-2 sm:px-4 py-2">90%</td>
                  <td className="px-2 sm:px-4 py-2">1.18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Performance Ratios Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Performance Ratios & Analysis</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Analyze student's performance by comparing mock and evaluation test scores to measure growth and improvement over time.
          </p>

          {/* Performance Ratio Graph or Data */}
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full sm:w-1/2 p-4 text-white bg-blue-600 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold">Improvement Ratio</h3>
                <p className="mt-2 text-base sm:text-lg">1.12</p>
              </div>
              <div className="w-full sm:w-1/2 p-4 text-white bg-green-600 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold">Consistency Ratio</h3>
                <p className="mt-2 text-base sm:text-lg">0.95</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
