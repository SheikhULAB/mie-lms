// components/TEvaluation.tsx

import React from 'react';
import Sidebar from './Sidebar';

const TEvaluation: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1 p-4 md:p-8 space-y-8">
                {/* Mock Test Overview Section */}
                <section className="p-4 md:p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Mock Test Management</h2>
                    <p className="text-gray-600">Organize, distribute, and manage mock tests for different classes with ease.</p>

                    <div className="mt-6 space-y-6">
                        {/* Mock Test Filter and Add Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
                            <div className="w-full md:w-auto">
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
                            <button className="mt-4 md:mt-0 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg">+ Add New Mock Test</button>
                        </div>

                        {/* Mock Test List Section */}
                        <div className="relative">
                            {/* Mock test container with scrolling */}
                            <div className="overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                                {/* Mock Test List */}
                                <ul className="p-4 space-y-4">
                                    {/* Mock Test Item */}
                                    {[1, 2].map((test) => (
                                        <li key={test} className="flex flex-col md:flex-row items-start md:items-center p-4 bg-gray-100 rounded-lg shadow-md">
                                            <div className="flex items-center">
                                                <div className="p-3 bg-blue-600 rounded-full">
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M4 4h16v16H4V4z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-lg font-semibold text-gray-800">Mock Test {test}</p>
                                                    <p className="text-gray-600">Class 10{test === 1 ? 'A' : 'B'}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 md:mt-0 md:ml-auto space-y-2 md:space-x-2 flex flex-col md:flex-row">
                                                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Download Paper</button>
                                                <button className="px-4 py-2 text-white bg-green-600 rounded-lg">Upload Marks</button>
                                                <button className="px-4 py-2 text-white bg-yellow-600 rounded-lg">View Submitted Papers</button>
                                                <button className="px-4 py-2 text-white bg-red-600 rounded-lg">Delete Test</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Scroll indicator */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center pt-4 bg-gradient-to-t from-white">
                                <button className="px-4 py-2 text-white bg-gray-800 rounded-lg">Scroll to see more</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Evaluation Test Section */}
                <section className="p-4 md:p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Evaluation Test Management</h2>
                    <p className="text-gray-600">Schedule, manage, and evaluate tests for better student performance tracking.</p>

                    <div className="mt-6">
                        {/* Add Evaluation Test and Filters */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
                            <div className="w-full md:w-auto">
                                <label htmlFor="evaluation-class-filter" className="block text-gray-700">Filter by Class:</label>
                                <select
                                    id="evaluation-class-filter"
                                    className="block w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="all">All Classes</option>
                                    <option value="10A">Class 10A</option>
                                    <option value="10B">Class 10B</option>
                                </select>
                            </div>
                            <button className="mt-4 md:mt-0 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg">+ Add New Evaluation Test</button>
                        </div>

                        {/* Evaluation Test Table */}
                        <div className="mt-6 overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-gray-600">Evaluation Test</th>
                                        <th className="px-4 py-2 text-left text-gray-600">Class</th>
                                        <th className="px-4 py-2 text-left text-gray-600">Due Date</th>
                                        <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2].map((evaluation) => (
                                        <tr key={evaluation}>
                                            <td className="px-4 py-2">Evaluation Test {evaluation}</td>
                                            <td className="px-4 py-2">Class 10{evaluation === 1 ? 'A' : 'B'}</td>
                                            <td className="px-4 py-2">2024-07-{10 + evaluation}</td>
                                            <td className="px-4 py-2">
                                                <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row">
                                                    <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Download Test</button>
                                                    <button className="px-4 py-2 text-white bg-green-600 rounded-lg">Upload Marked File</button>
                                                    <button className="px-4 py-2 text-white bg-yellow-600 rounded-lg">View Submissions</button>
                                                    <button className="px-4 py-2 text-white bg-red-600 rounded-lg">Delete Test</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TEvaluation;
