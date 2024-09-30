"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

interface Teacher {
  name: string;
  teacherId: string;
}

const TeacherList = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  const fetchTeachers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const teacherData: Teacher[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().role === "teacher") {
        teacherData.push({
          name: doc.data().firstName + " " + doc.data().lastName,
          teacherId: doc.id,
        });
      }
    });
    setTeachers(teacherData);
  };

  const handleAddTeacher = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.teacherName.value;

    if (!name) {
      alert("Please fill in the name field.");
      return;
    }

    const [firstName, ...lastNameArr] = name.split(" ");
    const lastName = lastNameArr.join(" ");

    const docRef = await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      role: "teacher",
    });

    const newTeacher: Teacher = {
      name,
      teacherId: docRef.id,
    };

    setTeachers([...teachers, newTeacher]);
    form.reset();
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setEditingTeacher(teacher);
  };

  const handleUpdateTeacher = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("teacherName")?.toString() || "";

    if (!name || !editingTeacher) {
      alert("Please fill in the name field.");
      return;
    }

    const [firstName, ...lastNameArr] = name.split(" ");
    const lastName = lastNameArr.join(" ");

    const userDoc = doc(db, "users", editingTeacher.teacherId);
    await updateDoc(userDoc, {
      firstName,
      lastName,
    });

    setTeachers(
      teachers.map((teacher) =>
        teacher.teacherId === editingTeacher.teacherId
          ? { ...teacher, name }
          : teacher
      )
    );
    setEditingTeacher(null);
  };

  const handleDeleteTeacher = async (uid: string) => {
    const userDoc = doc(db, "users", uid);
    await deleteDoc(userDoc);
    setTeachers(teachers.filter((teacher) => teacher.teacherId !== uid));
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <section id="teachers" className="mb-12">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Teachers</h2>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-xl">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
            <tr>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Name</th>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Teacher ID</th>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index} className="transition bg-white hover:bg-gray-50">
                <td className="px-6 py-4">{teacher.name}</td>
                <td className="px-6 py-4">{teacher.teacherId}</td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105"
                    onClick={() => handleEditTeacher(teacher)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md shadow-lg hover:bg-red-600 hover:scale-105"
                    onClick={() => handleDeleteTeacher(teacher.teacherId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Teacher Form */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">
          {editingTeacher ? "Edit Teacher" : "Add New Teacher"}
        </h3>
        <form
          className="mt-4 space-y-6"
          onSubmit={editingTeacher ? handleUpdateTeacher : handleAddTeacher}
        >
          <div>
            <label htmlFor="teacherName" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="teacherName"
              name="teacherName"
              defaultValue={editingTeacher ? editingTeacher.name : ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
          >
            {editingTeacher ? "Update Teacher" : "Add Teacher"}
          </button>
          {editingTeacher && (
            <button
              type="button"
              className="px-6 py-2 ml-2 text-white bg-gray-500 rounded-md shadow hover:bg-gray-600"
              onClick={() => setEditingTeacher(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default TeacherList;
