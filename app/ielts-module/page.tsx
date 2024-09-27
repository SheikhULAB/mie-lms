"use client"
import { useState } from "react";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const MockTestLanding: React.FC = () => {
  // State to track which test card is expanded
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Function to toggle the expanded card
  const toggleCard = (testId: string) => {
    setExpandedCard((prev) => (prev === testId ? null : testId));
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="mb-8 text-5xl font-extrabold text-gray-900">IELTS Mock Tests</h1>
        <p className="mb-12 text-lg text-gray-700">
          Select a module to start practicing – Writing, Reading, Speaking, or Listening.
        </p>

        {/* Cards Section */}
        <div className="max-w-lg mx-auto space-y-8">
          {/* Writing Test Card */}
          <div
            className="p-8 transition-transform duration-300 transform shadow-lg cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl hover:scale-105"
            onClick={() => toggleCard("writing")}
          >
            <h2 className="text-3xl font-bold text-white">Writing Test</h2>
            <p className="mt-2 text-lg text-blue-100">Test your IELTS Writing skills with a mock test.</p>
            
            {/* Expanded Content for Writing Test */}
            {expandedCard === "writing" && (
              <div className="mt-6">
                <a
                  href="/ielts-module/writingtest"
                  className="px-6 py-2 font-bold text-blue-700 transition-colors bg-white rounded-lg shadow hover:bg-gray-200"
                >
                  Take Test
                </a>
              </div>
            )}
          </div>

          {/* Reading Test Card */}
          <div
            className="p-8 transition-transform duration-300 transform shadow-lg cursor-pointer bg-gradient-to-r from-green-500 to-green-700 rounded-xl hover:scale-105"
            onClick={() => toggleCard("reading")}
          >
            <h2 className="text-3xl font-bold text-white">Reading Test</h2>
            <p className="mt-2 text-lg text-green-100">Prepare for the IELTS Reading module with a mock test.</p>

            {/* Expanded Content for Reading Test */}
            {expandedCard === "reading" && (
              <div className="mt-6">
                <a
                  href="/ielts-module/readingtest"
                  className="px-6 py-2 font-bold text-green-700 transition-colors bg-white rounded-lg shadow hover:bg-gray-200"
                >
                  Take Test
                </a>
              </div>
            )}
          </div>

          {/* Speaking Test Card */}
          <div
            className="p-8 transition-transform duration-300 transform shadow-lg cursor-pointer bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl hover:scale-105"
            onClick={() => toggleCard("speaking")}
          >
            <h2 className="text-3xl font-bold text-white">Speaking Test</h2>
            <p className="mt-2 text-lg text-purple-100">Practice the IELTS Speaking test with a real-time mock exam.</p>

            {/* Expanded Content for Speaking Test */}
            {expandedCard === "speaking" && (
              <div className="mt-6">
                <a
                  href="/ielts-module/speakingtest"
                  className="px-6 py-2 font-bold text-purple-700 transition-colors bg-white rounded-lg shadow hover:bg-gray-200"
                >
                  Take Test
                </a>
              </div>
            )}
          </div>

          {/* Listening Test Card */}
          <div
            className="p-8 transition-transform duration-300 transform shadow-lg cursor-pointer bg-gradient-to-r from-red-500 to-red-700 rounded-xl hover:scale-105"
            onClick={() => toggleCard("listening")}
          >
            <h2 className="text-3xl font-bold text-white">Listening Test</h2>
            <p className="mt-2 text-lg text-red-100">Prepare for the IELTS Listening section with our mock test.</p>

            {/* Expanded Content for Listening Test */}
            {expandedCard === "listening" && (
              <div className="mt-6">
                <a
                  href="/ielts-module/listeningtest"
                  className="px-6 py-2 font-bold text-red-700 transition-colors bg-white rounded-lg shadow hover:bg-gray-200"
                >
                  Take Test
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MockTestLanding;
