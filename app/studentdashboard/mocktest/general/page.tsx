// components/GeneralMockTests.tsx
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/studentDashboard/Sidebar'; // Import the Sidebar component

const GeneralMockTests: React.FC = () => {
    const router = useRouter();

    // Function to handle navigation for tests
    const navigateTo = (path: string) => {
        router.push(path); // Navigate to the given path
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar /> {/* Sidebar on the left side */}
            <div className="flex-1 p-6">
                {/* Header Section with Tabs */}
                <div className="flex flex-col md:flex-row items-center justify-between p-4 text-white rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500">
                    <h2 className="text-3xl font-bold mb-4 md:mb-0">Mock Test Results</h2>
                    <div className="space-x-0 space-y-2 md:space-y-0 md:space-x-4">
                        <button
                            onClick={() => navigateTo('/studentdashboard/mocktest/academic')}
                            className="w-full md:w-auto px-4 py-2 font-semibold text-purple-700 transition bg-white rounded-lg shadow hover:bg-purple-200"
                        >
                            Academic
                        </button>
                        <button
                            onClick={() => navigateTo('/studentdashboard/mocktest/general')}
                            className="w-full md:w-auto px-4 py-2 font-semibold text-purple-700 transition bg-white rounded-lg shadow hover:bg-purple-200"
                        >
                            General
                        </button>
                        <button
                            onClick={() => navigateTo('/ielts-module')}
                            className="w-full md:w-auto px-4 py-2 font-semibold text-purple-700 transition bg-white rounded-lg shadow hover:bg-purple-200"
                        >
                            Module-Based
                        </button>
                    </div>
                </div>

                <h2 className="mt-6 text-3xl font-bold text-gray-800">General Mock Tests</h2>
                <p className="mt-2 text-gray-600">Enroll now and start practicing for the IELTS General Test with 30 full mock tests!</p>
                
                <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Mock Test 1 */}
                    <div className="p-6 transition-all duration-300 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 hover:shadow-2xl hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-800">General Mock Test 1</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li className="flex justify-between">
                                <span>Listening</span>
                                <a href="/ielts-module/listeningtest" className="text-blue-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Reading</span>
                                <a href="/ielts-module/readingtest" className="text-blue-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Writing</span>
                                <a href="/ielts-module/writingtest" className="text-blue-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Speaking</span>
                                <a href="/ielts-module/speakingtest" className="text-blue-600 hover:underline">Take Test</a>
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <a href="#" className="px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700">Start Full Test</a>
                        </div>
                    </div>

                    {/* Mock Test 2 */}
                    <div className="p-6 transition-all duration-300 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-red-100 to-red-200 hover:shadow-2xl hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-800">General Mock Test 2</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li className="flex justify-between">
                                <span>Listening</span>
                                <a href="/ielts-module/listeningtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Reading</span>
                                <a href="/ielts-module/readingtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Writing</span>
                                <a href="/ielts-module/writingtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Speaking</span>
                                <a href="/ielts-module/speakingtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">Start Full Test</a>
                        </div>
                    </div>

                    {/* Mock Test 3 */}
                    <div className="p-6 transition-all duration-300 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-red-100 to-red-200 hover:shadow-2xl hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-800">General Mock Test 3</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li className="flex justify-between">
                                <span>Listening</span>
                                <a href="/ielts-module/listeningtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Reading</span>
                                <a href="/ielts-module/readingtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Writing</span>
                                <a href="/ielts-module/writingtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                            <li className="flex justify-between">
                                <span>Speaking</span>
                                <a href="/ielts-module/speakingtest" className="text-red-600 hover:underline">Take Test</a>
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">Start Full Test</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralMockTests;
