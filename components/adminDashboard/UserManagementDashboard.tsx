import React from "react";
import Sidebar from "./Sidebar";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import AdminList from "./AdminList";

const UserManagementDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <StudentList />
        <TeacherList />
        <AdminList />
      </div>
    </div>
  );
};

export default UserManagementDashboard;
