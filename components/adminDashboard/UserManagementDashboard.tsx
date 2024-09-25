"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

// Define interfaces for different user types
interface Student {
  name: string;
  studentId: string;
}

interface Teacher {
  name: string;
  teacherId: string;
  courses: string;
  schedule: string;
}

interface Admin {
  username: string;
  role: string;
}

const UserManagementDashboard: React.FC = () => {
  // State for students, teachers, and admins
  const [students, setStudents] = useState<Student[]>([
    { name: "John Doe", studentId: "123456" },
  ]);
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      name: "Jane Smith",
      teacherId: "789012",
      courses: "Math, Science",
      schedule: "Mon-Fri 9am-12pm",
    },
  ]);
  const [admins, setAdmins] = useState<Admin[]>([
    { username: "Admin User", role: "Super Admin" },
  ]);

  // Add new student
  const handleAddStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newStudent: Student = {
      name: form.studentName.value,
      studentId: form.studentID.value,
    };
    setStudents([...students, newStudent]);
    form.reset();
  };

  // Add new teacher
  const handleAddTeacher = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newTeacher: Teacher = {
      name: form.teacherName.value,
      teacherId: form.teacherID.value,
      courses: form.courses.value,
      schedule: form.schedule.value,
    };
    setTeachers([...teachers, newTeacher]);
    form.reset();
  };

  // Add new admin
  const handleAddAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newAdmin: Admin = {
      username: form.adminUsername.value,
      role: form.adminRole.value,
    };
    setAdmins([...admins, newAdmin]);
    form.reset();
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar positioned on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        {/* Students Section */}
        <section id="students" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Students</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-xl">
            <table className="min-w-full">
              <thead className="sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                <tr>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Student ID
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="transition bg-white hover:bg-gray-50">
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.studentId}</td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105">
                        Edit
                      </button>
                      <button className="px-4 py-2 ml-2 text-white transition-transform transform bg-red-500 rounded-md shadow-lg hover:bg-red-600 hover:scale-105">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Student Form */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Add New Student</h3>
            <form className="mt-4 space-y-6" onSubmit={handleAddStudent}>
              <div>
                <label htmlFor="studentName" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="studentID" className="block text-gray-600">
                  Student ID
                </label>
                <input
                  type="text"
                  id="studentID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 text-white transition-transform transform bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none hover:scale-105"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Teachers Section */}
        <section id="teachers" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Teachers</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-xl">
            <table className="min-w-full">
              <thead className="sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                <tr>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Teacher ID
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Courses
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Schedule
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index} className="transition bg-white hover:bg-gray-50">
                    <td className="px-6 py-4">{teacher.name}</td>
                    <td className="px-6 py-4">{teacher.teacherId}</td>
                    <td className="px-6 py-4">{teacher.courses}</td>
                    <td className="px-6 py-4">{teacher.schedule}</td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105">
                        Edit
                      </button>
                      <button className="px-4 py-2 ml-2 text-white transition-transform transform bg-red-500 rounded-md shadow-lg hover:bg-red-600 hover:scale-105">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Teacher Form */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Add New Teacher</h3>
            <form className="mt-4 space-y-6" onSubmit={handleAddTeacher}>
              <div>
                <label htmlFor="teacherName" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="teacherName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="teacherID" className="block text-gray-600">
                  Teacher ID
                </label>
                <input
                  type="text"
                  id="teacherID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="courses" className="block text-gray-600">
                  Courses
                </label>
                <input
                  type="text"
                  id="courses"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="schedule" className="block text-gray-600">
                  Schedule
                </label>
                <input
                  type="text"
                  id="schedule"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 text-white transition-transform transform bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none hover:scale-105"
                >
                  Add Teacher
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Admins Section */}
        <section id="admins">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Admins</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-xl">
            <table className="min-w-full">
              <thead className="sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                <tr>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Username
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Role
                  </th>
                  <th className="px-6 py-3 font-medium text-left text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr key={index} className="transition bg-white hover:bg-gray-50">
                    <td className="px-6 py-4">{admin.username}</td>
                    <td className="px-6 py-4">{admin.role}</td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105">
                        Edit
                      </button>
                      <button className="px-4 py-2 ml-2 text-white transition-transform transform bg-red-500 rounded-md shadow-lg hover:bg-red-600 hover:scale-105">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Admin Form */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Add New Admin</h3>
            <form className="mt-4 space-y-6" onSubmit={handleAddAdmin}>
              <div>
                <label htmlFor="adminUsername" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  id="adminUsername"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="adminRole" className="block text-gray-600">
                  Role
                </label>
                <input
                  type="text"
                  id="adminRole"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 text-white transition-transform transform bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none hover:scale-105"
                >
                  Add Admin
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserManagementDashboard;
