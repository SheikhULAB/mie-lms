"use client"
import { FC, useState } from "react";

const IELTSListeningTest: FC = () => {
  const [formData, setFormData] = useState({
    q1: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div className="bg-gray-100">
      {/* Topbar with Logo */}
      <header className="bg-red-600 shadow-md">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <a href="#" className="text-xl font-bold text-white">
            <img src="/logo.png" alt="MIE" className="inline-block w-12 h-12" />
          </a>
          <h1 className="text-lg font-semibold text-white">IELTS Listening Test</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl px-6 py-12 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">IELTS Listening Test</h2>
        <p className="mt-2 text-center text-gray-600">Time: 30 minutes | Number of questions: 40</p>

        {/* Audio Player */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">Listen to the following audio and answer the questions:</p>
          <audio controls className="w-full max-w-lg mx-auto mt-4">
            <source src="/your-audio-file.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Section 1 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 1: Conversation</h3>
          <p className="mt-4 text-gray-600">
            Listen to a conversation between two people and answer the questions (Questions 1-10):
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 1-5: Multiple Choice</h4>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What time does the event start?
                <br />
                <label className="block">
                  <input
                    type="radio"
                    name="q1"
                    value="A"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  A. 10:00 AM
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="q1"
                    value="B"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  B. 11:00 AM
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="q1"
                    value="C"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  C. 12:00 PM
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="q1"
                    value="D"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  D. 1:00 PM
                </label>
              </li>
              {/* Repeat for other questions */}
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 6-10: Form Completion</h4>
            <p className="text-gray-600">Complete the form below based on the audio.</p>
            <div className="p-4 mt-4 rounded-lg bg-gray-50">
              <p className="text-gray-700">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., John Doe"
                />
              </p>
              <p className="text-gray-700">
                Email:
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., john.doe@example.com"
                />
              </p>
              <p className="text-gray-700">
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., 123-456-7890"
                />
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 2: Monologue</h3>
          <p className="mt-4 text-gray-600">Listen to a monologue and answer the questions (Questions 11-20):</p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 11-15: Matching</h4>
            <p className="text-gray-600">Match the description to the correct option.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                Match the description with the correct option.
                <br />
                <label className="block">
                  <input type="radio" name="q11" value="A" className="mr-2" />
                  Option A:
                  <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., Description A" />
                </label>
                <label className="block">
                  <input type="radio" name="q11" value="B" className="mr-2" />
                  Option B:
                  <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., Description B" />
                </label>
              </li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 16-20: Sentence Completion</h4>
            <p className="text-gray-600">Complete the sentences based on the audio.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                He mentioned that the most important factor is
                <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., punctuality" />
              </li>
              <li>
                The event will take place in
                <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., London" />
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 3: Interview</h3>
          <p className="mt-4 text-gray-600">Listen to an interview and answer the questions (Questions 21-30):</p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 21-25: Multiple Choice</h4>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What is the main topic of the interview?
                <br />
                <label className="block">
                  <input type="radio" name="q21" value="A" className="mr-2" />
                  A. Technology
                </label>
                <label className="block">
                  <input type="radio" name="q21" value="B" className="mr-2" />
                  B. Travel
                </label>
                <label className="block">
                  <input type="radio" name="q21" value="C" className="mr-2" />
                  C. Education
                </label>
                <label className="block">
                  <input type="radio" name="q21" value="D" className="mr-2" />
                  D. Health
                </label>
              </li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 26-30: Short Answer Questions</h4>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What is the name of the person being interviewed?
                <br />
                <input type="text" className="w-full p-1 mt-1 border rounded" placeholder="e.g., Sarah Smith" />
              </li>
              <li>
                What is the primary purpose of the interview?
                <br />
                <input type="text" className="w-full p-1 mt-1 border rounded" placeholder="e.g., Discuss new trends" />
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 4: Lecture</h3>
          <p className="mt-4 text-gray-600">Listen to a lecture and answer the questions (Questions 31-40):</p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 31-35: Multiple Choice</h4>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What is the main focus of the lecture?
                <br />
                <label className="block">
                  <input type="radio" name="q31" value="A" className="mr-2" />
                  A. Environmental issues
                </label>
                <label className="block">
                  <input type="radio" name="q31" value="B" className="mr-2" />
                  B. Historical events
                </label>
                <label className="block">
                  <input type="radio" name="q31" value="C" className="mr-2" />
                  C. Scientific discoveries
                </label>
                <label className="block">
                  <input type="radio" name="q31" value="D" className="mr-2" />
                  D. Cultural practices
                </label>
              </li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 36-40: Note Completion</h4>
            <div className="p-4 mt-4 rounded-lg bg-gray-50">
              <p className="text-gray-700">
                Lecture Topic:
                <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., Climate Change" />
              </p>
              <p className="text-gray-700">
                Key Point 1:
                <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., Greenhouse gases" />
              </p>
              <p className="text-gray-700">
                Key Point 2:
                <input type="text" className="w-full p-1 ml-2 border rounded" placeholder="e.g., Rising sea levels" />
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IELTSListeningTest;
