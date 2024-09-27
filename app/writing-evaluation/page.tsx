"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const WritingEvaluation: React.FC = () => {
  const [showFreeEvaluation, setShowFreeEvaluation] = useState(false);

  // Toggle Free Evaluation Section
  const handleFreeTestClick = () => {
    setShowFreeEvaluation(!showFreeEvaluation);
  };

  return (
    <>
     <Header />
     <Navbar />
      {/* Include meta tags and external resources in the Head */}
      <Head>
        <title>Writing Evaluation</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Head>

      <div className="container py-12 mx-auto">
        {/* Hero Section */}
        <div className="py-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800">IELTS Writing Evaluation</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get expert feedback and improve your writing skills with personalized evaluations.
          </p>
          <div className="mt-8">
            <button
              id="freeTestBtn"
              onClick={handleFreeTestClick}
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
            <h2 className="text-3xl font-semibold text-gray-800">Free Writing Evaluation</h2>
            <p className="mt-4 text-gray-600">
              View the writing task below and submit your answer to receive free feedback.
            </p>

            {/* Task Document Viewer */}
            <iframe
              className="w-full h-64 mt-6 border border-gray-300"
              src="/path/to/free-writing-task.pdf"
              title="Free Writing Task"
            ></iframe>

            {/* Answer Submission Form */}
            <form id="freeTestForm" className="mt-6" method="POST" encType="multipart/form-data">
              <label className="block text-lg font-medium text-gray-700">Upload Your Answer</label>
              <input
                type="file"
                name="answerDoc"
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
          <h2 className="text-3xl font-semibold text-gray-800">Paid Writing Evaluations</h2>
          <p className="mt-4 text-gray-600">
            Unlock full access to expert evaluations and track your progress over time.
          </p>

          {/* Paid Evaluation Process */}
          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-700">How It Works:</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Select a writing task provided by the examiner.</li>
              <li>Complete the task and upload your response.</li>
              <li>Receive a detailed evaluation report from a certified IELTS examiner.</li>
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

export default WritingEvaluation;
