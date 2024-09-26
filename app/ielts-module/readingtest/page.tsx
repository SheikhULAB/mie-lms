// components/IeltsReadingTest.tsx
"use client"
import { useState } from 'react';

const IeltsReadingTest: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    // Logic to handle form submission, such as sending the answers to a server
    console.log(answers);
    alert('Test submitted successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Topbar with Logo */}
      <header className="bg-red-600 shadow-md">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <a href="#" className="text-xl font-bold text-white">
            <img src="/logo.png" alt="MIE" className="inline-block w-12 h-12" />
          </a>
          <h1 className="text-lg font-semibold text-white">IELTS Reading Test</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl px-6 py-12 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">IELTS Reading Test</h2>
        <p className="mt-2 text-center text-gray-600">Time: 60 minutes | Number of questions: 40</p>

        {/* Section 1 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 1: Passage 1</h3>
          <div className="p-4 mt-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">Read the passage below and answer the questions (Questions 1-13):</p>
            <p className="mt-2 text-gray-600">
              <strong>Passage Title:</strong> The History of Climate Change.<br />
              Text: Climate change refers to the long-term shifts and alterations in temperature patterns...
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 1-5: True/False/Not Given</h4>
            <p className="text-gray-600">Do the following statements agree with the information in the passage?</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                <label className="text-gray-600 mr-2">
                  <input
                    type="radio"
                    name="q1"
                    value="True"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Climate change is a recent phenomenon caused solely by human activities.
                </label>
                <label className="text-gray-600 ml-4">
                  <input
                    type="radio"
                    name="q1"
                    value="False"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  False
                </label>
                <label className="text-gray-600 ml-4">
                  <input
                    type="radio"
                    name="q1"
                    value="Not Given"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Not Given
                </label>
              </li>
              {/* Repeat for other questions */}
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 6-13: Fill in the Blanks</h4>
            <p className="text-gray-600">Complete the sentences below with words from the passage.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                One major cause of climate change is the burning of
                <input
                  type="text"
                  name="q6"
                  className="w-32 p-1 ml-2 border rounded"
                  placeholder="e.g., fossil fuels"
                  onChange={handleInputChange}
                />
              </li>
              <li>
                The increase in atmospheric
                <input
                  type="text"
                  name="q7"
                  className="w-32 p-1 ml-2 border rounded"
                  placeholder="e.g., CO2"
                  onChange={handleInputChange}
                />
                has been linked to rising temperatures.
              </li>
              {/* Repeat for other questions */}
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 2: Passage 2</h3>
          <div className="p-4 mt-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">Read the passage below and answer the questions (Questions 14-26):</p>
            <p className="mt-2 text-gray-600">
              <strong>Passage Title:</strong> The Impact of Digital Technology.<br />
              Text: Over the past few decades, digital technology has revolutionized the way we live, work, and communicate...
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 14-19: Multiple Choice</h4>
            <p className="text-gray-600">Choose the correct option (A, B, C, or D) for each question.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What has been the greatest impact of digital technology in the workplace?<br />
                <label className="block">
                  <input type="radio" name="q14" value="A" onChange={handleInputChange} className="mr-2" />
                  A. Increased productivity
                </label>
                <label className="block">
                  <input type="radio" name="q14" value="B" onChange={handleInputChange} className="mr-2" />
                  B. Decreased face-to-face communication
                </label>
                <label className="block">
                  <input type="radio" name="q14" value="C" onChange={handleInputChange} className="mr-2" />
                  C. Greater job satisfaction
                </label>
                <label className="block">
                  <input type="radio" name="q14" value="D" onChange={handleInputChange} className="mr-2" />
                  D. Reduced working hours
                </label>
              </li>
              {/* Repeat for other questions */}
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 20-26: Matching Headings</h4>
            <p className="text-gray-600">Match the following headings to the paragraphs in the passage.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                <label className="block">
                  <input type="radio" name="q20" value="A" onChange={handleInputChange} className="mr-2" />
                  The role of digital technology in education.
                </label>
                <label className="block">
                  <input type="radio" name="q20" value="B" onChange={handleInputChange} className="mr-2" />
                  How digital innovation has transformed healthcare.
                </label>
                {/* Add more options here */}
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 3: Passage 3</h3>
          <div className="p-4 mt-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">Read the passage below and answer the questions (Questions 27-40):</p>
            <p className="mt-2 text-gray-600">
              <strong>Passage Title:</strong> The Future of Transportation.<br />
              Text: Transportation systems worldwide are on the verge of a revolution with the advent of autonomous vehicles...
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 27-33: Short Answer Questions</h4>
            <p className="text-gray-600">Answer the following questions using words from the passage.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What technology is expected to dominate the future of transportation?<br />
                <input
                  type="text"
                  name="q27"
                  className="w-full p-1 mt-1 border rounded"
                  placeholder="e.g., autonomous vehicles"
                  onChange={handleInputChange}
                />
              </li>
              <li>
                Which country has been leading the development of electric vehicles?<br />
                <input
                  type="text"
                  name="q28"
                  className="w-full p-1 mt-1 border rounded"
                  placeholder="e.g., USA"
                  onChange={handleInputChange}
                />
              </li>
              {/* Repeat for other questions */}
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 34-40: Matching Information</h4>
            <p className="text-gray-600">Match the statements to the correct information in the passage.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                <label className="block">
                  <input type="radio" name="q34" value="A" onChange={handleInputChange} className="mr-2" />
                  Autonomous vehicles will reduce traffic accidents.
                </label>
                <label className="block">
                  <input type="radio" name="q34" value="B" onChange={handleInputChange} className="mr-2" />
                  Electric vehicles are already being widely used in some countries.
                </label>
                {/* Add more options here */}
              </li>
            </ul>
          </div>
        </section>

        {/* Submission Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Submit Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default IeltsReadingTest;
