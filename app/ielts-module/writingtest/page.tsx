"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const IELTSWritingTest: React.FC = () => {
  const [task1Text, setTask1Text] = useState<string>("");
  const [task1File, setTask1File] = useState<File | null>(null);
  const [task2Text, setTask2Text] = useState<string>("");
  const [task2File, setTask2File] = useState<File | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(60 * 60); // 60 minutes in seconds
  const router = useRouter();

  // Timer Effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(countdown);
          alert("Time is up! Please submit your answers.");
          submitTest();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Format time for display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // Handle file input changes
  const handleTask1FileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTask1File(event.target.files[0]);
    }
  };

  const handleTask2FileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTask2File(event.target.files[0]);
    }
  };

  // Submit Test Function
  const submitTest = () => {
    if ((task1Text || task1File) && (task2Text || task2File)) {
      alert("Test submitted successfully!");
      // Add logic here to send the text or files to the server
      router.push("/success"); // Redirect to a success page after submission
    } else {
      alert("Please complete both tasks or upload your files.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Topbar with Logo */}
      <header className="bg-red-600 shadow-md">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <a href="#" className="text-xl font-bold text-white">
            <img src="/logo.png" alt="MIE LMS" className="inline-block w-12 h-12" />
          </a>
          <h1 className="text-lg font-semibold text-white">IELTS Writing Test</h1>
        </div>
      </header>

      {/* Main Content for IELTS Writing Test */}
      <main className="max-w-4xl px-6 py-10 mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-md">
          {/* Timer */}
          <div className="mb-6 text-lg font-bold text-center text-gray-700">
            <span>Time Remaining: </span>
            <span id="timer" className="text-red-500">{formatTime(timeRemaining)}</span>
          </div>

          {/* Task 1: Report Writing */}
          <h2 className="mb-4 text-2xl font-bold text-gray-700">Task 1: Writing Report</h2>
          <p className="mb-4 text-gray-600">You should spend about 20 minutes on this task.</p>
          <p className="mb-6 text-gray-600">
            The chart below shows the percentage of households in a country that own various consumer electronics over a decade.
          </p>

          {/* Graph Image Placeholder */}
          <div className="p-6 mb-6 text-center bg-gray-100 rounded-md">
            <p className="text-gray-600">[Graph of Consumer Electronics Ownership]</p>
          </div>

          <p className="mb-6 text-gray-600">
            Summarize the information by selecting and reporting the main features, and make comparisons where relevant.
          </p>

          <h3 className="mb-2 text-lg font-semibold text-gray-700">Type your answer below:</h3>
          <textarea
            id="task1WritingBox"
            rows={8}
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={task1Text}
            onChange={(e) => setTask1Text(e.target.value)}
          />

          <div className="mb-6 text-center text-gray-700">OR</div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold text-gray-700">Upload your answer (PDF/DOC):</label>
            <input
              type="file"
              id="task1FileUpload"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              onChange={handleTask1FileChange}
            />
          </div>

          <hr className="my-8" />

          {/* Task 2: Essay Writing */}
          <h2 className="mb-4 text-2xl font-bold text-gray-700">Task 2: Essay Writing</h2>
          <p className="mb-4 text-gray-600">You should spend about 40 minutes on this task.</p>
          <p className="mb-6 text-gray-600">Write about the following topic:</p>

          <div className="p-4 mb-6 text-gray-800 bg-gray-100 rounded-md">
            <p className="mb-2">
              <strong>Question:</strong> Some people believe that modern technology is increasing people's social isolation, while others think it encourages communication and social connections.
            </p>
            <p>Discuss both views and give your own opinion.</p>
          </div>

          <h3 className="mb-2 text-lg font-semibold text-gray-700">Type your answer below:</h3>
          <textarea
            id="task2WritingBox"
            rows={10}
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={task2Text}
            onChange={(e) => setTask2Text(e.target.value)}
          />

          <div className="mb-6 text-center text-gray-700">OR</div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold text-gray-700">Upload your answer (PDF/DOC):</label>
            <input
              type="file"
              id="task2FileUpload"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              onChange={handleTask2FileChange}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={submitTest}
              className="px-6 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Test
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IELTSWritingTest;
