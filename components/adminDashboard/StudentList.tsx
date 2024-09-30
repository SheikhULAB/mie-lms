"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

interface Student {
  name: string;
  studentId: string;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const studentData: Student[] = [];
    querySnapshot.forEach((doc) => {
      studentData.push({
        name: doc.data().firstName + " " + doc.data().lastName,
        studentId: doc.id, // Use doc.id for unique identifier
      });
    });
    setStudents(studentData);
  };

  const handleAddStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("studentName")?.toString() || "";

    if (!name) {
      alert("Please fill in the name field.");
      return;
    }

    const [firstName, ...lastNameArr] = name.split(" ");
    const lastName = lastNameArr.join(" ");

    const newStudent: Student = {
      name,
      studentId: "", // Placeholder; this will be updated after adding to Firestore
    };

    const docRef = await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      role: "student",
    });

    setStudents([...students, { ...newStudent, studentId: docRef.id }]);
    form.reset(); // Ensure the form is still accessible before calling reset
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
  };

  const handleUpdateStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("studentName")?.toString() || "";

    if (!name || !editingStudent) {
      alert("Please fill in the name field.");
      return;
    }

    const [firstName, ...lastNameArr] = name.split(" ");
    const lastName = lastNameArr.join(" ");

    const userDoc = doc(db, "users", editingStudent.studentId);
    await updateDoc(userDoc, {
      firstName,
      lastName,
    });

    setStudents(
      students.map((student) =>
        student.studentId === editingStudent.studentId
          ? { ...student, name }
          : student
      )
    );
    setEditingStudent(null);
  };

  const handleDeleteStudent = async (uid: string) => {
    const userDoc = doc(db, "users", uid);
    await deleteDoc(userDoc);
    setStudents(students.filter((student) => student.studentId !== uid));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <section id="students" className="mb-12">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Students</h2>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-xl">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
            <tr>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Name</th>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Student ID</th>
              <th className="px-6 py-3 font-medium text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.studentId} className="transition bg-white hover:bg-gray-50">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.studentId}</td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105"
                    onClick={() => handleEditStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md shadow-lg hover:bg-red-600 hover:scale-105"
                    onClick={() => handleDeleteStudent(student.studentId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Student Form */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">
          {editingStudent ? "Edit Student" : "Add New Student"}
        </h3>
        <form
          className="mt-4 space-y-6"
          onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}
        >
          <div>
            <label htmlFor="studentName" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              defaultValue={editingStudent ? editingStudent.name : ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
          >
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
          {editingStudent && (
            <button
              type="button"
              className="px-6 py-2 ml-2 text-white bg-gray-500 rounded-md shadow hover:bg-gray-600"
              onClick={() => setEditingStudent(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default StudentList;
