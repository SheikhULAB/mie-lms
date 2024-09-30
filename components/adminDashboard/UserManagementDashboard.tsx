import React from "react";
import Sidebar from "./Sidebar";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import AdminList from "./AdminList";

const UserManagementDashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">User Management Dashboard</h1>
        
        <div className="space-y-6">
          {/* Student List Section */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Students</h2>
            <StudentList />
          </section>

          {/* Teacher List Section */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Teachers</h2>
            <TeacherList />
          </section>

          {/* Admin List Section */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Admins</h2>
            <AdminList />
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserManagementDashboard;
