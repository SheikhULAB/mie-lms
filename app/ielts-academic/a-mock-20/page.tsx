"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const AMockTest20: React.FC = () => {
  const router = useRouter();

  // Function to handle button clicks for navigating to the different mock tests
  const handleMockClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <Header />
      <Navbar />
      {/* Banner */}
      <div className="relative bg-blue-500 h-60">
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Academic IELTS MOCK</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container flex flex-col px-4 mx-auto my-8">
        {/* Mock Buttons */}
        <div className="flex justify-center mb-2 space-x-4">
          <button
            id="free-mock"
            onClick={() => handleMockClick("/ielts-academic")}
            className="px-6 py-3 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Free
          </button>
          <button
            id="mock-10"
            onClick={() => handleMockClick("/ielts-academic/a-mock-10")}
            className="px-6 py-3 text-white bg-black rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            10 Mock
          </button>
          <button
            id="mock-20"
            onClick={() => handleMockClick("/ielts-academic/a-mock-20")}
            className="px-6 py-3 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            20 Mock
          </button>
          <button
            id="mock-30"
            onClick={() => handleMockClick("/ielts-academic/a-mock-30")}
            className="px-6 py-3 text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            30 Mock
          </button>
        </div>

        {/* Price Information */}
        <div className="mb-8 text-center">
          <p className="text-lg font-semibold text-gray-800">Sign In to Unlock All Mocks</p>
          <p className="text-gray-600">$9.99 per set</p>
        </div>

        {/* Mock Test Sets */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 20 }, (_, index) => index + 1).map((setNumber) => (
            <div key={setNumber} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-0">
                {/* Writing Test */}
                <div className="relative flex items-center justify-center bg-gradient-to-r from-red-200 to-red-300">
                  <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                    <button
                      onClick={() => handleMockClick(`/ielts-academic/a-mock-${setNumber}/writing`)}
                      className="text-lg font-semibold text-white hover:underline"
                    >
                      <i className="text-4xl fas fa-edit"></i>
                      <span className="ml-2">Start Writing Test</span>
                    </button>
                  </div>
                </div>
                {/* Reading Test */}
                <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300">
                  <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                    <button
                      onClick={() => handleMockClick(`/ielts-academic/a-mock-${setNumber}/reading`)}
                      className="text-lg font-semibold text-white hover:underline"
                    >
                      <i className="text-4xl fas fa-book-open"></i>
                      <span className="ml-2">Start Reading Test</span>
                    </button>
                  </div>
                </div>
                {/* Listening Test */}
                <div className="relative flex items-center justify-center bg-gradient-to-r from-green-200 to-green-300">
                  <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                    <button
                      onClick={() => handleMockClick(`/ielts-academic/a-mock-${setNumber}/listening`)}
                      className="text-lg font-semibold text-white hover:underline"
                    >
                      <i className="text-4xl fas fa-volume-up"></i>
                      <span className="ml-2">Start Listening Test</span>
                    </button>
                  </div>
                </div>
                {/* Speaking Test */}
                <div className="relative flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-300">
                  <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                    <button
                      onClick={() => handleMockClick(`/ielts-academic/a-mock-${setNumber}/speaking`)}
                      className="text-lg font-semibold text-white hover:underline"
                    >
                      <i className="text-4xl fas fa-microphone-alt"></i>
                      <span className="ml-2">Start Speaking Test</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">Mock Test Set {setNumber}</h2>
                <p className="mb-4 text-gray-700">Prepare for the IELTS exam with our comprehensive mock tests covering Writing, Reading, Listening, and Speaking.</p>
                <div className="flex items-center justify-center space-x-2">
                  <i className="text-2xl text-gray-600 fas fa-lock"></i>
                  <span className="text-lg font-semibold text-gray-600">Sign In to Unlock</span>
                </div>
                <button
                  onClick={() => handleMockClick(`/ielts-academic/a-mock-${setNumber}/sign-in`)}
                  className="block w-full px-4 py-2 mt-4 text-center text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign In
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AMockTest20;
