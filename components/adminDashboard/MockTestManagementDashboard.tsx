"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

// Define interfaces for mock test data
interface MockTest {
  type: string;
  total_taken: number;
  category: string;
}

interface Evaluation {
  type: string;
  pending: number;
}

interface TeacherActivity {
  name: string;
  checked: number;
  pending: number;
}

const MockTestManagementDashboard: React.FC = () => {
  // State placeholders for mock test data
  const [mockTests, setMockTests] = useState<MockTest[]>([
    { type: "Math", total_taken: 50, category: "Grade 10" },
    { type: "Science", total_taken: 30, category: "Grade 9" },
  ]);

  const [evaluations, setEvaluations] = useState<Evaluation[]>([
    { type: "Written", pending: 5 },
    { type: "Oral", pending: 3 },
  ]);

  const [teachers, setTeachers] = useState<TeacherActivity[]>([
    { name: "John Doe", checked: 15, pending: 5 },
    { name: "Jane Smith", checked: 10, pending: 2 },
  ]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar positioned on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6 space-y-6 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        {/* Mock Test Overview Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Mock Test Overview</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Test Type</th>
                  <th className="px-4 py-2 text-left text-gray-600">Total Taken</th>
                  <th className="px-4 py-2 text-left text-gray-600">Category</th>
                </tr>
              </thead>
              <tbody>
                {mockTests.map((mockTest, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{mockTest.type}</td>
                    <td className="px-4 py-2">{mockTest.total_taken}</td>
                    <td className="px-4 py-2">{mockTest.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Evaluation Overview Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Evaluation Overview</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Evaluation Type</th>
                  <th className="px-4 py-2 text-left text-gray-600">Pending Evaluations</th>
                </tr>
              </thead>
              <tbody>
                {evaluations.map((evaluation, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{evaluation.type}</td>
                    <td className="px-4 py-2">{evaluation.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Teacher Activity Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Teacher Activity</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Teacher</th>
                  <th className="px-4 py-2 text-left text-gray-600">Checked</th>
                  <th className="px-4 py-2 text-left text-gray-600">Pending</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{teacher.name}</td>
                    <td className="px-4 py-2">{teacher.checked}</td>
                    <td className="px-4 py-2">{teacher.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Mock Test Performance Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Mock Test Performance</h2>
          <div className="p-4 bg-gray-100 rounded-lg mt-4">
            {/* Replace with a dynamic chart or graph component */}
            <p className="text-gray-600">Performance Graph Placeholder</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MockTestManagementDashboard;
