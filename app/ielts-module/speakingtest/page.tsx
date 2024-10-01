// components/IeltsSpeakingTest.tsx
"use client"
import { useState } from 'react';

const IeltsSpeakingTest: React.FC = () => {
  const [recordings, setRecordings] = useState<{ [key: string]: File | null }>({});
  const [formData, setFormData] = useState({ name: '', email: '', dateTime: '' });

  // Handle file input changes for audio uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setRecordings({ ...recordings, [name]: files[0] });
    }
  };

  // Handle form data change
  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for recordings
  const handleRecordingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the uploaded files (e.g., sending them to a server)
    console.log(recordings);
    alert('Recordings submitted successfully!');
  };

  // Handle form submission for booking a test
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the booking form submission (e.g., sending it to a server)
    console.log(formData);
    alert('Test booked successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Topbar with Logo */}
      <header className="bg-red-600 shadow-md">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <a href="/" className="text-xl font-bold text-white">
          <img src="/images/logo.png" alt="MIE LMS" className="inline-block w-16 h-16" />
          </a>
          <h1 className="text-lg font-semibold text-white">IELTS Speaking Test</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl px-6 py-12 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">IELTS Speaking Test</h2>
        <p className="mt-2 text-center text-gray-600">Choose one of the following options to complete your speaking test:</p>

        {/* Option 1: Upload Voice Recording */}
        <section className="p-6 mt-8 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700">Option 1: Upload Your Voice Recording</h3>
          <p className="mt-4 text-gray-600">
            Record your answers to each of the following questions individually and upload the files below. Each question is designed to assess
            different aspects of your speaking ability, similar to the format used in international IELTS Speaking tests.
          </p>

          <form onSubmit={handleRecordingSubmit} className="mt-6">
            <h4 className="font-semibold text-gray-800">Questions:</h4>
            <ul className="mt-4 space-y-6 list-disc list-inside">
              {/* Question 1 */}
              <li>
                <strong>Question 1:</strong> Describe a memorable event in your life. Include details about what happened, where it took place, and why it was significant to you.<br />
                <label className="block mt-2 text-gray-700">
                  Upload your voice recording for Question 1:
                  <input type="file" accept="audio/*" name="q1" onChange={handleFileChange} className="w-full p-2 mt-2 border rounded" />
                </label>
              </li>

              {/* Question 2 */}
              <li>
                <strong>Question 2:</strong> Talk about a person who has influenced you significantly. Explain who this person is, how you know them, and in what ways they have had an impact on your life.<br />
                <label className="block mt-2 text-gray-700">
                  Upload your voice recording for Question 2:
                  <input type="file" accept="audio/*" name="q2" onChange={handleFileChange} className="w-full p-2 mt-2 border rounded" />
                </label>
              </li>

              {/* Question 3 */}
              <li>
                <strong>Question 3:</strong> Explain a recent experience you had with technology. Describe what the technology was, how you used it, and how it affected your daily life.<br />
                <label className="block mt-2 text-gray-700">
                  Upload your voice recording for Question 3:
                  <input type="file" accept="audio/*" name="q3" onChange={handleFileChange} className="w-full p-2 mt-2 border rounded" />
                </label>
              </li>
            </ul>

            <button type="submit" className="px-4 py-2 mt-6 text-white bg-red-600 rounded">
              Submit All Recordings
            </button>
          </form>
        </section>

        {/* Option 2: Book One-to-One Speaking Test */}
        <section className="p-6 mt-8 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700">Option 2: Book a One-to-One Speaking Test</h3>
          <p className="mt-4 text-gray-600">Schedule a personal speaking test with one of our experts:</p>

          <form onSubmit={handleBookingSubmit} className="mt-6">
            <label className="block text-gray-700">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormDataChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="e.g., John Doe"
              />
            </label>
            <label className="block mt-4 text-gray-700">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormDataChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="e.g., john.doe@example.com"
              />
            </label>
            <label className="block mt-4 text-gray-700">
              Preferred Date & Time:
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleFormDataChange}
                className="w-full p-2 mt-2 border rounded"
              />
            </label>
            <button type="submit" className="px-4 py-2 mt-4 text-white bg-red-600 rounded">
              Book Test
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default IeltsSpeakingTest;
