"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

interface Admin {
  name: string;
  adminId: string;
}

const AdminList = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);

  const fetchAdmins = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const adminData: Admin[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().role === "admin") {
        adminData.push({
          name: doc.data().firstName + " " + doc.data().lastName,
          adminId: doc.data().uid,
        });
      }
    });
    setAdmins(adminData);
  };

  const handleAddAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newAdmin: Admin = {
      name: form.adminName.value,
      adminId: form.adminID.value,
    };

    await addDoc(collection(db, "users"), {
      firstName: form.adminName.value.split(" ")[0],
      lastName: form.adminName.value.split(" ")[1],
      uid: form.adminID.value,
      role: "admin",
    });
    setAdmins([...admins, newAdmin]);
    form.reset();
  };

  const handleDeleteAdmin = async (uid: string) => {
    const userDoc = doc(db, "users", uid);
    await deleteDoc(userDoc);
    setAdmins(admins.filter((admin) => admin.adminId !== uid));
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <section id="admins" className="mb-12">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Admins</h2>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-xl">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
            <tr>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Name</th>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Admin ID</th>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index} className="transition bg-white hover:bg-gray-50">
                <td className="px-6 py-4">{admin.name}</td>
                <td className="px-6 py-4">{admin.adminId}</td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105"
                    onClick={() => console.log("Edit")}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md shadow-lg hover:bg-red-600 hover:scale-105"
                    onClick={() => handleDeleteAdmin(admin.adminId)}
                  >
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
            <label htmlFor="adminName" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="adminName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="adminID" className="block text-gray-600">Admin ID</label>
            <input
              type="text"
              id="adminID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
          >
            Add Admin
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminList;
