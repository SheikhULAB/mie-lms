"use client";
import { FC, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const IELTSListeningTest: FC = () => {
  const [formData, setFormData] = useState({
    q1: "",
    q11: "",
    q21: "",
    q31: "",
    name: "",
    email: "",
    phone: "",
  });

  const contentRef = useRef<HTMLDivElement>(null); // Reference to the content to be converted to PDF
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePDFGeneration = () => {
    const input = contentRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size (210mm x 297mm)
        pdf.save("IELTSListeningTest.pdf");
        router.push("/ielts-module/listeningtest/success");
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePDFGeneration();
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
      <div
        ref={contentRef} // Referencing the content to be converted to PDF
        className="max-w-5xl px-6 py-12 mx-auto mt-8 bg-white rounded-lg shadow-md"
      >
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
                  <input
                    type="radio"
                    name="q11"
                    value="A"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Option A:
                  <input
                    type="text"
                    className="w-full p-1 ml-2 border rounded"
                    placeholder="e.g., Description A"
                  />
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="q11"
                    value="B"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Option B:
                  <input
                    type="text"
                    className="w-full p-1 ml-2 border rounded"
                    placeholder="e.g., Description B"
                  />
                </label>
              </li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-800">Questions 16-20: Sentence Completion</h4>
            <p className="text-gray-600">Complete the sentences based on the audio.</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                He mentioned that the most important factor is
                <input
                  type="text"
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., punctuality"
                />
              </li>
              <li>
                The event will take place in
                <input
                  type="text"
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., London"
                />
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 3: Interview</h3>
          <p className="mt-4 text-gray-600">Listen to an interview and answer the questions (Questions 21-30):</p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 21-25: Short Answer</h4>
            <p className="text-gray-600">Answer the following questions:</p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                What is the main focus of the interview?
                <input
                  type="text"
                  name="q21"
                  value={formData.q21}
                  onChange={handleChange}
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., Project management"
                />
              </li>
            </ul>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Section 4: Lecture</h3>
          <p className="mt-4 text-gray-600">
            Listen to the lecture and answer the questions (Questions 31-40):
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions 31-35: Summary Completion</h4>
            <p className="text-gray-600">
              Complete the summary using words from the audio:
            </p>
            <ul className="mt-4 space-y-2 list-decimal list-inside">
              <li>
                The main topic discussed was
                <input
                  type="text"
                  name="q31"
                  value={formData.q31}
                  onChange={handleChange}
                  className="w-full p-1 ml-2 border rounded"
                  placeholder="e.g., Climate change"
                />
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Test and Generate PDF
        </button>
      </div>
    </div>
  );
};

export default IELTSListeningTest;
