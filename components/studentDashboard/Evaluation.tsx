"use client"; // Ensures this is a Client Component
import React from "react";
import Sidebar from "./Sidebar";

const Evaluation: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Sidebar with a fixed or responsive width */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-4 space-y-8 lg:p-6">
        {/* Evaluation Prompt Section */}
        <section className="p-4 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Take Evaluation
          </h2>
          <p className="mb-6 text-base text-gray-600 md:text-lg">
            Get your Writing or Speaking evaluated by our experts. Select the
            test and start your evaluation.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Writing Evaluation Prompt */}
            <div className="p-4 transition-all rounded-lg shadow-md bg-blue-50 hover:shadow-lg md:p-6">
              <h3 className="mb-2 text-lg font-semibold text-blue-700 md:text-xl">
                Writing Evaluation
              </h3>
              <p className="mb-4 text-sm text-gray-600 md:text-base">
                Complete the writing task and submit your response for
                evaluation.
              </p>
              <a
                href="writing_test_prompt.html"
                className="block px-4 py-2 text-center text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Start Writing Test
              </a>
            </div>

            {/* Speaking Evaluation Prompt */}
            <div className="p-4 transition-all rounded-lg shadow-md bg-green-50 hover:shadow-lg md:p-6">
              <h3 className="mb-2 text-lg font-semibold text-green-700 md:text-xl">
                Speaking Evaluation
              </h3>
              <p className="mb-4 text-sm text-gray-600 md:text-base">
                Record your speaking task and submit your response for
                evaluation.
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
        <section className="p-4 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Submit Your Evaluation
          </h2>
          <p className="mb-6 text-base text-gray-600 md:text-lg">
            After completing your test, submit your response for expert
            evaluation.
          </p>

          {/* Upload Form */}
          <form
            action="#"
            method="post"
            encType="multipart/form-data"
            className="space-y-4"
          >
            <label
              htmlFor="uploadFile"
              className="block text-base font-semibold text-gray-700 md:text-lg"
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
              className="w-full px-4 py-3 text-base text-white transition-all bg-blue-600 rounded-lg md:text-lg hover:bg-blue-700"
            >
              Submit Test
            </button>
          </form>
        </section>

        {/* Evaluation Results Section */}
        <section className="p-4 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Evaluation Results
          </h2>
          <p className="mb-6 text-base text-gray-600 md:text-lg">
            Download your evaluation results below once they're available.
          </p>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 md:px-6 md:text-lg">
                    Test Type
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 md:px-6 md:text-lg">
                    Score
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 md:px-6 md:text-lg">
                    Download Marks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 md:px-6">Writing Evaluation</td>
                  <td className="px-4 py-4 md:px-6">7.5</td>
                  <td className="px-4 py-4 md:px-6">
                    <a
                      href="writing_evaluation_results.pdf"
                      className="inline-block px-4 py-2 text-white transition-all bg-green-600 rounded-lg hover:bg-green-700"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 md:px-6">Speaking Evaluation</td>
                  <td className="px-4 py-4 md:px-6">8.0</td>
                  <td className="px-4 py-4 md:px-6">
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
