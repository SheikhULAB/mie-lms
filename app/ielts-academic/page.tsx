import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Navbar from '@/components/home/Navbar';
import React from 'react';

const MockTest: React.FC = () => {
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
          <a
            href="#"
            id="free-mock"
            className="px-6 py-3 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Free
          </a>
          <a
            href="/ielts-academic/a-mock-10"
            id="mock-10"
            className="px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            10 Mock
          </a>
          <a
            href="/ielts-academic/a-mock-20"
            id="mock-20"
            className="px-6 py-3 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            20 Mock
          </a>
          <a
            href="/ielts-academic/a-mock-30"
            id="mock-30"
            className="px-6 py-3 text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            30 Mock
          </a>
        </div>

        {/* Banner */}
        <div className="p-6 mb-8 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            Academic IELTS MOCK
          </h1>
          <p className="mt-2 text-center text-gray-700">
            Choose your mock test set and prepare effectively for your IELTS exam.
          </p>
        </div>

        {/* Mock Test Sets */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test) => (
            <div key={test.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-0">
                {test.sections.map((section, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-center ${section.bgGradient}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                      <a href="#" className="text-lg font-semibold text-white hover:underline">
                        <i className={`text-4xl fas ${section.icon}`}></i>
                        <span className="ml-2">{section.label}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">{test.title}</h2>
                <p className="mb-4 text-gray-700">{test.description}</p>
                <a
                  href="#"
                  className={`block w-full px-4 py-2 text-center text-white ${test.buttonColor} rounded-md shadow-md hover:${test.hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${test.ringColor}`}
                >
                  Start Tests
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mockTests = [
  {
    id: 1,
    title: "Mock Test Set 1",
    description:
      "Prepare for the IELTS exam with our comprehensive mock tests covering Writing, Reading, Listening, and Speaking.",
    buttonColor: "bg-red-600",
    hoverColor: "bg-red-700",
    ringColor: "red-500",
    sections: [
      {
        label: "Start Writing Test",
        icon: "fa-edit",
        bgGradient: "bg-gradient-to-r from-red-200 to-red-300",
      },
      {
        label: "Start Reading Test",
        icon: "fa-book-open",
        bgGradient: "bg-gradient-to-r from-blue-200 to-blue-300",
      },
      {
        label: "Start Listening Test",
        icon: "fa-volume-up",
        bgGradient: "bg-gradient-to-r from-green-200 to-green-300",
      },
      {
        label: "Start Speaking Test",
        icon: "fa-microphone-alt",
        bgGradient: "bg-gradient-to-r from-purple-200 to-purple-300",
      },
    ],
  },
  {
    id: 2,
    title: "Mock Test Set 2",
    description:
      "Practice your IELTS skills with our comprehensive mock tests covering Writing, Reading, Listening, and Speaking.",
    buttonColor: "bg-blue-600",
    hoverColor: "bg-blue-700",
    ringColor: "blue-500",
    sections: [
      {
        label: "Start Writing Test",
        icon: "fa-edit",
        bgGradient: "bg-gradient-to-r from-red-200 to-red-300",
      },
      {
        label: "Start Reading Test",
        icon: "fa-book-open",
        bgGradient: "bg-gradient-to-r from-blue-200 to-blue-300",
      },
      {
        label: "Start Listening Test",
        icon: "fa-volume-up",
        bgGradient: "bg-gradient-to-r from-green-200 to-green-300",
      },
      {
        label: "Start Speaking Test",
        icon: "fa-microphone-alt",
        bgGradient: "bg-gradient-to-r from-purple-200 to-purple-300",
      },
    ],
  },
  {
    id: 3,
    title: "Mock Test Set 3",
    description:
      "Boost your IELTS preparation with our comprehensive mock tests covering Writing, Reading, Listening, and Speaking.",
    buttonColor: "bg-green-600",
    hoverColor: "bg-green-700",
    ringColor: "green-500",
    sections: [
      {
        label: "Start Writing Test",
        icon: "fa-edit",
        bgGradient: "bg-gradient-to-r from-red-200 to-red-300",
      },
      {
        label: "Start Reading Test",
        icon: "fa-book-open",
        bgGradient: "bg-gradient-to-r from-blue-200 to-blue-300",
      },
      {
        label: "Start Listening Test",
        icon: "fa-volume-up",
        bgGradient: "bg-gradient-to-r from-green-200 to-green-300",
      },
      {
        label: "Start Speaking Test",
        icon: "fa-microphone-alt",
        bgGradient: "bg-gradient-to-r from-purple-200 to-purple-300",
      },
    ],
  },
];

export default MockTest;
