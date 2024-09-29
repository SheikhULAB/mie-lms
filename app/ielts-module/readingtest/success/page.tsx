"use client";
import { useRouter } from "next/navigation";
import { BsCheckCircle } from "react-icons/bs"; // Importing an icon for success

const SuccessReadingTest: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
        {/* Success Icon */}
        <div className="flex items-center justify-center mb-6 text-green-500">
          <BsCheckCircle size={80} />
        </div>
        
        {/* Success Message */}
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">Success!</h1>
        <p className="mb-6 text-lg text-center text-gray-600">
          Your IELTS Reading Test has been submitted successfully. Thank you for your participation.
        </p>

        {/* Navigation Options */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go to Home
          </button>
          <button
            onClick={() => router.push("/ielts-module/readingtest")}
            className="px-6 py-2 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Take Another Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessReadingTest;
