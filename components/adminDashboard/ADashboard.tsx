import React from 'react';
import Sidebar from './Sidebar';

// Define a type for user activities
interface Activity {
  user: string;
  action: string;
  date: string;
  status: 'Completed' | 'In Progress';
}

// Define a type for recent activities
interface RecentActivity {
  user: string;
  action: string;
  time: string;
  iconColor: string;
}

// Main Dashboard component
const ADashboard: React.FC = () => {
  // Sample data for user activity
  const userActivities: Activity[] = [
    { user: 'John Doe', action: 'Completed Test', date: '2024-07-02', status: 'Completed' },
    { user: 'Jane Smith', action: 'Started Test', date: '2024-07-01', status: 'In Progress' },
  ];

  // Sample data for recent activities
  const recentActivities: RecentActivity[] = [
    { user: 'John Doe', action: 'completed a test.', time: '2 minutes ago', iconColor: 'bg-blue-500' },
    { user: 'Jane Smith', action: 'updated her profile.', time: '10 minutes ago', iconColor: 'bg-green-500' },
    { user: 'Robert Brown', action: 'started a new test.', time: '30 minutes ago', iconColor: 'bg-yellow-500' },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 space-y-6 md:p-6 overflow-y-auto">
        {/* Overview Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Overview</h2>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Total Users', count: 1234, color: 'red' },
              { title: 'Active Tests', count: 56, color: 'green' },
              { title: 'Completed Tests', count: 1028, color: 'blue' },
              { title: 'Pending Reviews', count: 12, color: 'yellow' },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <div className={`p-3 bg-${item.color}-600 rounded-full`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600">{item.count.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reports Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Reports</h2>
          <div className="mt-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">Chart Placeholder</p>
            </div>
          </div>
        </section>

        {/* User Activity Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">User Activity</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">User</th>
                  <th className="px-4 py-2 text-left text-gray-600">Activity</th>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                  <th className="px-4 py-2 text-left text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {userActivities.map((activity, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{activity.user}</td>
                    <td className="px-4 py-2">{activity.action}</td>
                    <td className="px-4 py-2">{activity.date}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          activity.status === 'Completed'
                            ? 'bg-green-200 text-green-800'
                            : 'bg-yellow-200 text-yellow-800'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Recent Activities</h2>
          <div className="mt-4">
            <ul className="space-y-4">
              {recentActivities.map((activity, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className={`flex items-center justify-center w-12 h-12 ${activity.iconColor} rounded-full`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ADashboard;
