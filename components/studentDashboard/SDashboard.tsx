import React from 'react';
import Sidebar from './Sidebar'; // Ensure the Sidebar component is correctly imported

const SDashboard: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar positioned on the left */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
                {/* Overview Section */}
                <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Overview</h2>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { title: 'Enrolled Courses', count: 5, color: 'red' },
                            { title: 'Completed Mocks', count: 12, color: 'green' },
                            { title: 'Resources', count: 3, color: 'blue' },
                            { title: 'Pending Reviews', count: 2, color: 'yellow' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
                                <div className={`p-3 bg-${item.color}-600 rounded-full`}>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 4h16v16H4V4z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-gray-600">{item.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mock Test and Evaluation Section */}
                <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Mock Tests & Evaluation</h2>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Academic Mock Test', href: '#', color: 'red', label: 'Take Test' },
                            { title: 'General Mock Test', href: 'student_dashboard_General Mock.html', color: 'green', label: 'Take Test' },
                            { title: 'Module Based Mock Test', href: '#', color: 'blue', label: 'Take Test' },
                            { title: 'Writing Evaluation', href: '#', color: 'red', label: 'Submit Writing' },
                            { title: 'Speaking Evaluation', href: '#', color: 'green', label: 'Submit Speaking' },
                        ].map((test, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">{test.title}</h3>
                                <a href={test.href} className={`block px-4 py-2 mt-4 text-center text-white bg-${test.color}-600 rounded-lg hover:bg-${test.color}-700`}>
                                    {test.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Test Results Section */}
                <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Previous Test Results</h2>
                    <div className="mt-4 overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-600">Test Type</th>
                                    <th className="px-4 py-2 text-left text-gray-600">Score</th>
                                    <th className="px-4 py-2 text-left text-gray-600">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: 'Academic Mock', score: '7.5', date: '2024-09-10' },
                                    { type: 'Writing Evaluation', score: '8.0', date: '2024-08-22' },
                                ].map((result, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2">{result.type}</td>
                                        <td className="px-4 py-2">{result.score}</td>
                                        <td className="px-4 py-2">{result.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Subscription Plans Section */}
                <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Subscription Plans</h2>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Free Plan', description: 'Access limited resources and mock tests for free.', color: 'red' },
                            { title: 'Premium Plan', description: 'Unlock more mock tests and resources for a fee.', color: 'green' },
                            { title: 'Supreme Plan', description: 'Full access to all resources and expert evaluations.', color: 'blue' },
                        ].map((plan, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>
                                <p className="mt-2 text-gray-600">{plan.description}</p>
                                <button className={`px-4 py-2 mt-4 text-white bg-${plan.color}-600 rounded-lg`}>Subscribe</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Available Courses Section */}
                <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Available Courses</h2>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'IELTS Preparation Course', description: 'Prepare for the IELTS exam with comprehensive materials.' },
                            { title: 'Advanced English Grammar', description: 'Improve your grammar skills for better writing and speaking.' },
                            { title: 'Public Speaking Skills', description: 'Enhance your speaking skills for better performance in IELTS.' },
                        ].map((course, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                                <p className="mt-2 text-gray-600">{course.description}</p>
                                <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">Enroll Now</button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <a href="#" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Learn More Details</a>
                    </div>
                </section>

                {/* Daily Quiz Section */}
                <section className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Daily Quiz</h2>
                    <p className="mt-2 text-gray-600">Test your grammar knowledge with today's quiz. Select the correct answers and submit.</p>

                    <div className="mt-4 space-y-4">
                        {[
                            {
                                question: 'Which sentence is correct?',
                                options: ['She don\'t like coffee.', 'She doesn\'t like coffee.', 'She doesn\'t likes coffee.', 'She don\'t likes coffee.'],
                                name: 'q1',
                            },
                            {
                                question: 'Choose the correct form of the verb:',
                                options: ['He have a car.', 'He has a car.', 'He is having a car.', 'He will has a car.'],
                                name: 'q2',
                            },
                            {
                                question: 'Which word completes the sentence: "They _____ to the store."',
                                options: ['go', 'goes', 'going', 'gone'],
                                name: 'q3',
                            },
                        ].map((quiz, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">{`${index + 1}. ${quiz.question}`}</h3>
                                <div className="mt-2">
                                    {quiz.options.map((option, optIndex) => (
                                        <label key={optIndex} className="block">
                                            <input type="radio" name={quiz.name} value={String.fromCharCode(65 + optIndex)} className="mr-2" /> {String.fromCharCode(65 + optIndex)}) {option}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Submit Answers</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SDashboard;
