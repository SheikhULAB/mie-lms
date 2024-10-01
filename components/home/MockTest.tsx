"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const MockTest: React.FC = () => {
  const router = useRouter();

  const handleTakeTest = (route: string) => {
    router.push(route);
  };

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-4xl font-bold mb-8">Free Mock Test</h2>
      <p className="text-center mb-12 text-gray-600 text-lg max-w-2xl mx-auto px-4">
        Mock tests are essential for preparing for the IELTS exam. Take advantage of our free mock tests to assess your skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-20">
        {mockTestData.map((test, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-center text-6xl mb-6">{test.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-4">{test.title}</h3>
            <p className="text-gray-600 text-center mb-8">{test.description}</p>
            <div className="mt-auto">
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:from-green-500 hover:to-blue-600 transition-all"
                onClick={() => handleTakeTest(test.route)}
              >
                Take Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mockTestData = [
  {
    title: 'Writing Test',
    description: 'Improve your writing skills with our comprehensive writing mock tests.',
    icon: '✍️',
    route: '/ielts-module/writingtest',
  },
  {
    title: 'Reading Test',
    description: 'Enhance your reading comprehension with our simulated reading tests.',
    icon: '📖',
    route: '/ielts-module/readingtest',
  },
  {
    title: 'Speaking Test',
    description: 'Practice your speaking skills with our interactive speaking mock tests.',
    icon: '🎤',
    route: '/ielts-module/speakingtest',
  },
  {
    title: 'Listening Test',
    description: 'Develop your listening skills with our simulated listening mock tests.',
    icon: '🎧',
    route: '/ielts-module/listeningtest',
  },
];

export default MockTest;
