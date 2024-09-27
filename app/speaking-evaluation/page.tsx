"use client"
import { useState } from "react";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const IELTSSpeakingEvaluation: React.FC = () => {
  const [showFreeEvaluation, setShowFreeEvaluation] = useState(false);

  const toggleFreeEvaluation = () => {
    setShowFreeEvaluation(!showFreeEvaluation);
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className="container py-12 mx-auto">
      {/* Hero Section */}
      <div className="py-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800">IELTS Speaking Evaluation</h1>
        <p className="mt-4 text-lg text-gray-600">
          Improve your speaking skills with personalized feedback from experts.
        </p>
        <div className="mt-8">
          <button
            id="freeTestBtn"
            onClick={toggleFreeEvaluation}
            className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Take Free Test
          </button>
          <button
            id="loginBtn"
            className="px-4 py-2 ml-4 font-bold text-white bg-green-600 rounded hover:bg-green-700"
          >
            Login/Register
          </button>
        </div>
      </div>

      {/* Free Evaluation Section */}
      {showFreeEvaluation && (
        <div id="freeEvaluationSection" className="p-8 mt-12 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Free Speaking Evaluation</h2>
          <p className="mt-4 text-gray-600">Record your speaking task and submit it for expert feedback.</p>

          {/* Task Document Viewer or Sample Video */}
          <video className="w-full h-64 mt-6 border border-gray-300" controls>
            <source src="/path/to/sample-speaking-task.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Answer Submission Form */}
          <form id="freeTestForm" className="mt-6" method="POST" encType="multipart/form-data">
            <label className="block text-lg font-medium text-gray-700">Upload Your Recording</label>
            <input
              type="file"
              name="answerAudio"
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 mt-4 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit for Evaluation
            </button>
          </form>
        </div>
      )}

      {/* Paid Evaluation Section */}
      <div id="paidEvaluationSection" className="p-8 mt-12 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Paid Speaking Evaluations</h2>
        <p className="mt-4 text-gray-600">
          Access professional evaluations and track your speaking progress.
        </p>

        {/* Paid Evaluation Process */}
        <div className="mt-6">
          <h3 className="text-xl font-medium text-gray-700">How It Works:</h3>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>Choose a speaking task from the options provided.</li>
            <li>Record your response and upload the audio file.</li>
            <li>Receive a detailed evaluation from an IELTS examiner.</li>
          </ul>

          {/* Paid Evaluation Options */}
          <div className="mt-8">
            <button className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700">
              Buy 1 Evaluation - $15
            </button>
            <button className="px-4 py-2 ml-4 font-bold text-white bg-green-600 rounded hover:bg-green-700">
              Buy 5 Evaluations - $60
            </button>
            <button className="px-4 py-2 ml-4 font-bold text-white bg-green-600 rounded hover:bg-green-700">
              Buy 10 Evaluations - $100
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default IELTSSpeakingEvaluation;
