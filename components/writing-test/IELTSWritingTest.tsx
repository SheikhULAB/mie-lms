"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import { doc, setDoc } from "firebase/firestore";
import Header from "./Header";
import Timer from "./Timer";
import TaskComponent from "./TaskComponent";
import { db } from "@/firebase";

const IELTSWritingTest: React.FC = () => {
  const [task1Text, setTask1Text] = useState<string>("");
  const [task1File, setTask1File] = useState<File | null>(null);
  const [task2Text, setTask2Text] = useState<string>("");
  const [task2File, setTask2File] = useState<File | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(60 * 60); // 60 minutes in seconds
  const router = useRouter();

  // Timer Effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(countdown);
          alert("Time is up! Please submit your answers.");
          submitTest();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("IELTS Writing Test Submission", 10, 10);
    doc.text("Task 1 Response:", 10, 20);
    doc.text(task1Text || "No response provided.", 10, 30);
    doc.text("Task 2 Response:", 10, 60);
    doc.text(task2Text || "No response provided.", 10, 70);

    doc.save("IELTS_Writing_Test_Submission.pdf");
  };

  // Submit Test Function
  const submitTest = async () => {
    if ((task1Text || task1File) && (task2Text || task2File)) {
      alert("Test submitted successfully!");
      generatePDF(); // Call generate PDF function on submission

      try {
        // Create a unique document ID for each test submission (using timestamp as an example)
        const docId = `writingTest_${new Date().getTime()}`;

        // Set the data in Firestore
        await setDoc(doc(db, "writingTests", docId), {
          task1Text,
          task2Text,
          timestamp: new Date().toISOString(),
        });

        alert("Writing Test submitted successfully!");
      } catch (error) {
        console.error("Error saving to Firestore:", error);
        alert("An error occurred while saving data to Firestore.");
      }

      // Redirect to a success page after submission
      router.push("/ielts-module/writingtest/success");
    } else {
      alert("Please complete both tasks or upload your files.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-4xl px-6 py-10 mx-auto">
        <Timer timeRemaining={timeRemaining} />

        {/* Task 1 Component */}
        <TaskComponent
          taskTitle="Task 1: Writing Report"
          taskText={task1Text}
          taskFile={task1File}
          onTextChange={setTask1Text}
          onFileChange={setTask1File}
        />

        <hr className="my-8" />

        {/* Task 2 Component */}
        <TaskComponent
          taskTitle="Task 2: Essay Writing"
          taskText={task2Text}
          taskFile={task2File}
          onTextChange={setTask2Text}
          onFileChange={setTask2File}
        />

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={submitTest}
            className="px-6 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Test
          </button>
        </div>
      </main>
    </div>
  );
};

export default IELTSWritingTest;
