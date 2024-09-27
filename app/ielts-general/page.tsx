import React from "react";
import Link from "next/link";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const IeltsGeneral: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
      {/* Banner */}
      <div className="relative bg-blue-500 h-60">
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">General IELTS MOCK</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container flex flex-col px-4 mx-auto my-8">
        {/* Mock Buttons */}
        <div className="flex justify-center mb-2 space-x-4">
          <Link
            href="/ielts-general"
            className="px-6 py-3 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Free
          </Link>
          <Link
            href="/ielts-general/g-mock-10"
            className="px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            10 Mock
          </Link>
          <Link
            href="/ielts-general/g-mock-20"
            className="px-6 py-3 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            20 Mock
          </Link>
          <Link
            href="/ielts-general/g-mock-30"
            className="px-6 py-3 text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            30 Mock
          </Link>
        </div>

        {/* Banner */}
        <div className="p-6 mb-8 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            General IELTS MOCK
          </h1>
          <p className="mt-2 text-center text-gray-700">
            Choose your mock test set and prepare effectively for your IELTS
            exam.
          </p>
        </div>

        {/* Mock Test Sets */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Mock Test Set 1 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-0">
              {/* Writing Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-red-200 to-red-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-edit"></i>
                    <span className="ml-2">Start Writing Test</span>
                  </Link>
                </div>
              </div>
              {/* Reading Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-book-open"></i>
                    <span className="ml-2">Start Reading Test</span>
                  </Link>
                </div>
              </div>
              {/* Listening Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-green-200 to-green-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-volume-up"></i>
                    <span className="ml-2">Start Listening Test</span>
                  </Link>
                </div>
              </div>
              {/* Speaking Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-microphone-alt"></i>
                    <span className="ml-2">Start Speaking Test</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                Mock Test Set 1
              </h2>
              <p className="mb-4 text-gray-700">
                Prepare for the IELTS exam with our comprehensive mock tests
                covering Writing, Reading, Listening, and Speaking.
              </p>
              <Link
                href="#"
                className="block w-full px-4 py-2 text-center text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Start Tests
              </Link>
            </div>
          </div>

          {/* Mock Test Set 2 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-0">
              {/* Writing Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-red-200 to-red-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-edit"></i>
                    <span className="ml-2">Start Writing Test</span>
                  </Link>
                </div>
              </div>
              {/* Reading Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-book-open"></i>
                    <span className="ml-2">Start Reading Test</span>
                  </Link>
                </div>
              </div>
              {/* Listening Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-green-200 to-green-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-volume-up"></i>
                    <span className="ml-2">Start Listening Test</span>
                  </Link>
                </div>
              </div>
              {/* Speaking Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-microphone-alt"></i>
                    <span className="ml-2">Start Speaking Test</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                Mock Test Set 2
              </h2>
              <p className="mb-4 text-gray-700">
                Practice your IELTS skills with our comprehensive mock tests
                covering Writing, Reading, Listening, and Speaking.
              </p>
              <Link
                href="#"
                className="block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Start Tests
              </Link>
            </div>
          </div>

          {/* Mock Test Set 3 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-0">
              {/* Writing Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-red-200 to-red-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-edit"></i>
                    <span className="ml-2">Start Writing Test</span>
                  </Link>
                </div>
              </div>
              {/* Reading Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-book-open"></i>
                    <span className="ml-2">Start Reading Test</span>
                  </Link>
                </div>
              </div>
              {/* Listening Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-green-200 to-green-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-volume-up"></i>
                    <span className="ml-2">Start Listening Test</span>
                  </Link>
                </div>
              </div>
              {/* Speaking Test */}
              <div className="relative flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-300">
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:underline"
                  >
                    <i className="text-4xl fas fa-microphone-alt"></i>
                    <span className="ml-2">Start Speaking Test</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                Mock Test Set 3
              </h2>
              <p className="mb-4 text-gray-700">
                Prepare for the IELTS exam with our comprehensive mock tests.
              </p>
              <Link
                href="#"
                className="block w-full px-4 py-2 text-center text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Start Tests
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IeltsGeneral;
