"use client";

import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import Sidebar from "./Sidebar";

// Loading Spinner Component
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
  </div>
);

// Error Message Component
const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-red-500 text-center py-4">{message}</div>
);

// Test List Component for Displaying Test Data
const TestList: React.FC<{
  title: string;
  tests: any[];
  handleDelete: (id: string, testType: string) => void;
  testType: string;
}> = ({ title, tests, handleDelete, testType }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {tests.length === 0 ? (
        <p className="text-gray-500">No tests available.</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Test Details</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id} className="border-b">
                <td className="px-4 py-2">{test.name || "N/A"}</td>
                <td className="px-4 py-2">{test.email || "N/A"}</td>
                <td className="px-4 py-2">{test.phone || "N/A"}</td>
                <td className="px-4 py-2">
                  <details>
                    <summary className="cursor-pointer text-blue-500 hover:underline">
                      View Test Data
                    </summary>
                    <div className="p-4">
                      {testType === "ieltsListeningTests" && (
                        <ul>
                          <li><strong>Question 1:</strong> {test.q1}</li>
                          <li><strong>Question 11:</strong> {test.q11}</li>
                          <li><strong>Question 21:</strong> {test.q21}</li>
                          <li><strong>Question 31:</strong> {test.q31}</li>
                        </ul>
                      )}
                      {testType === "ieltsReadingTests" && (
                        <ul>
                          {Object.keys(test.answers || {}).map((key) => (
                            <li key={key}>
                              <strong>{key}:</strong> {test.answers[key] || "N/A"}
                            </li>
                          ))}
                        </ul>
                      )}
                      {testType === "writingTests" && (
                        <ul>
                          <li><strong>Task 1 Text:</strong> {test.task1Text || "N/A"}</li>
                          <li><strong>Task 2 Text:</strong> {test.task2Text || "N/A"}</li>
                        </ul>
                      )}
                    </div>
                  </details>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(test.id, testType)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const TEvaluation: React.FC = () => {
  const [listeningTests, setListeningTests] = useState<any[]>([]);
  const [readingTests, setReadingTests] = useState<any[]>([]);
  const [writingTests, setWritingTests] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tests from Firestore
  useEffect(() => {
    const fetchTests = async () => {
      setLoading(true);
      setError(null);

      try {
        const listeningSnapshot = await getDocs(collection(db, "ieltsListeningTests"));
        const readingSnapshot = await getDocs(collection(db, "ieltsReadingTests"));
        const writingSnapshot = await getDocs(collection(db, "writingTests"));

        setListeningTests(listeningSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setReadingTests(readingSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setWritingTests(writingSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to load tests. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  // Handle deletion of test data
  const handleDelete = async (id: string, testType: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this test?");
    if (!confirmDelete) return;

    try {
      // Delete document from Firestore
      await deleteDoc(doc(db, testType, id));

      // Update the local state to remove the deleted test from the UI
      if (testType === "ieltsListeningTests") {
        setListeningTests((prev) => prev.filter((test) => test.id !== id));
      } else if (testType === "ieltsReadingTests") {
        setReadingTests((prev) => prev.filter((test) => test.id !== id));
      } else if (testType === "writingTests") {
        setWritingTests((prev) => prev.filter((test) => test.id !== id));
      }

      alert("Test deleted successfully!");
    } catch (error) {
      console.error("Error deleting test: ", error);
      alert("Failed to delete the test. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 px-6">
          <h1 className="text-3xl font-bold text-center mb-8">IELTS Test Evaluation</h1>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <div>
              {/* Listening Tests */}
              <TestList
                title="Listening Tests"
                tests={listeningTests}
                handleDelete={handleDelete}
                testType="ieltsListeningTests"
              />

              {/* Reading Tests */}
              <TestList
                title="Reading Tests"
                tests={readingTests}
                handleDelete={handleDelete}
                testType="ieltsReadingTests"
              />

              {/* Writing Tests */}
              <TestList
                title="Writing Tests"
                tests={writingTests}
                handleDelete={handleDelete}
                testType="writingTests"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TEvaluation;
