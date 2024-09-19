// components/EvaluationSection.tsx
"use client"
import React, { useState } from 'react';

const EvaluationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'writing' | 'speaking'>('writing');

  return (
    <div className="bg-red-600 py-10 px-6 rounded-lg">
      <div className="text-center mb-8">
        <button
          onClick={() => setActiveTab('writing')}
          className={`px-4 py-2 mx-2 text-white rounded-md ${
            activeTab === 'writing' ? 'bg-red-900' : 'bg-red-500'
          }`}
        >
          Writing Evaluation
        </button>
        <button
          onClick={() => setActiveTab('speaking')}
          className={`px-4 py-2 mx-2 text-white rounded-md ${
            activeTab === 'speaking' ? 'bg-red-900' : 'bg-red-500'
          }`}
        >
          Speaking Evaluation
        </button>
      </div>

      {activeTab === 'writing' ? (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-red-500 p-6 rounded-md">
          <img
            src="/images/teacher1.png"
            alt="Expert"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover mb-4 lg:mb-0"
          />
          <div className="lg:ml-6 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              Expert Writing Evaluation
            </h3>
            <p className="text-white mb-4">
              Get your writing evaluated by our expert teachers. Receive detailed feedback and tips to improve your writing skills.
            </p>
            <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition-all">
              Take Evaluation Test
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-red-500 p-6 rounded-md">
          <img
            src="/images/teacher1.png"
            alt="Expert"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover mb-4 lg:mb-0"
          />
          <div className="lg:ml-6 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              Expert Speaking Evaluation
            </h3>
            <p className="text-white mb-4">
              Get your speaking skills evaluated by our expert teachers. Receive feedback on pronunciation, fluency, and structure.
            </p>
            <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition-all">
              Take Evaluation Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationSection;
