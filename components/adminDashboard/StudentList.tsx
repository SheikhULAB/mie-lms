"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

interface Student {
  name: string;
  studentId: string;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const studentData: Student[] = [];
    querySnapshot.forEach((doc) => {
      studentData.push({
        name: doc.data().firstName + " " + doc.data().lastName,
        studentId: doc.data().uid,
      });
    });
    setStudents(studentData);
  };

  const handleAddStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newStudent: Student = {
      name: form.studentName.value,
      studentId: form.studentID.value,
    };

    await addDoc(collection(db, "users"), {
      firstName: form.studentName.value.split(" ")[0],
      lastName: form.studentName.value.split(" ")[1],
      uid: form.studentID.value,
      role: "student",
    });
    setStudents([...students, newStudent]);
    form.reset();
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
            {students.map((student, index) => (
              <tr key={index} className="transition bg-white hover:bg-gray-50">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.studentId}</td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105"
                    onClick={() => console.log("Edit")}
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

      {/* Add Student Form */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Add New Student</h3>
        <form className="mt-4 space-y-6" onSubmit={handleAddStudent}>
          <div>
            <label htmlFor="studentName" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="studentName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="studentID" className="block text-gray-600">Student ID</label>
            <input
              type="text"
              id="studentID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
          >
            Add Student
          </button>
        </form>
      </div>
    </section>
  );
};

export default StudentList;
