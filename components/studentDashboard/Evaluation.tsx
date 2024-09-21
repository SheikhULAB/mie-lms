"use client"; // Ensures this is a Client Component
import React from "react";
import Sidebar from "./Sidebar";

const Evaluation: React.FC = () => {
  return (
    <div className="flex h-full"> {/* Flex container to hold sidebar and main content */}
      <Sidebar /> {/* Sidebar with a fixed or responsive width */}
      
      <div className="flex-1 p-6 space-y-8"> {/* Main content takes up remaining space */}
        {/* Evaluation Prompt Section */}
        <section className="p-6 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Take Evaluation</h2>
          <p className="mb-6 text-lg text-gray-600">
            Get your Writing or Speaking evaluated by our experts. Select the test
            and start your evaluation.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Writing Evaluation Prompt */}
            <div className="p-6 transition-all rounded-lg shadow-md bg-blue-50 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-blue-700">Writing Evaluation</h3>
              <p className="mb-4 text-gray-600">
                Complete the writing task and submit your response for evaluation.
              </p>
              <a
                href="writing_test_prompt.html"
                className="block px-4 py-2 text-center text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Start Writing Test
              </a>
            </div>

            {/* Speaking Evaluation Prompt */}
            <div className="p-6 transition-all rounded-lg shadow-md bg-green-50 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-green-700">Speaking Evaluation</h3>
              <p className="mb-4 text-gray-600">
                Record your speaking task and submit your response for evaluation.
              </p>
              <a
                href="speaking_test_prompt.html"
                className="block px-4 py-2 text-center text-white transition-all bg-green-600 rounded-lg hover:bg-green-700"
              >
                Start Speaking Test
              </a>
            </div>
          </div>
        </section>

        {/* Submission Section */}
        <section className="p-6 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Submit Your Evaluation</h2>
          <p className="mb-6 text-lg text-gray-600">
            After completing your test, submit your response for expert evaluation.
          </p>

          {/* Upload Form */}
          <form action="#" method="post" encType="multipart/form-data" className="space-y-4">
            <label
              htmlFor="uploadFile"
              className="block text-lg font-semibold text-gray-700"
            >
              Upload Your Test File:
            </label>
            <input
              type="file"
              id="uploadFile"
              name="uploadFile"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Submit Test
            </button>
          </form>
        </section>

        {/* Evaluation Results Section */}
        <section className="p-6 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Evaluation Results</h2>
          <p className="mb-6 text-lg text-gray-600">
            Download your evaluation results below once they're available.
          </p>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-lg text-left text-gray-600">
                    Test Type
                  </th>
                  <th className="px-6 py-3 text-lg text-left text-gray-600">Score</th>
                  <th className="px-6 py-3 text-lg text-left text-gray-600">
                    Download Marks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Writing Evaluation</td>
                  <td className="px-6 py-4">7.5</td>
                  <td className="px-6 py-4">
                    <a
                      href="writing_evaluation_results.pdf"
                      className="inline-block px-4 py-2 text-white transition-all bg-green-600 rounded-lg hover:bg-green-700"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Speaking Evaluation</td>
                  <td className="px-6 py-4">8.0</td>
                  <td className="px-6 py-4">
                    <a
                      href="speaking_evaluation_results.pdf"
                      className="inline-block px-4 py-2 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Evaluation;
