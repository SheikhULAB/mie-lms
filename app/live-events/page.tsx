"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const LiveEvents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <Navbar />
      {/* Banner */}
      <div className="relative live-event-banner">
        <img
          src="/images/Banner1.jpg"
          alt="Live Event Banner"
          className="object-cover w-full h-64"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Upcoming Live Events</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-6 py-12 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Upcoming Live Events</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Event 1 */}
          <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-teal-500">
            <h3 className="mb-4 text-2xl font-bold text-white">IELTS Preparation Workshop</h3>
            <p className="mb-2 text-white">Date: August 15, 2024</p>
            <p className="mb-4 text-white">Time: 10:00 AM - 1:00 PM</p>
            <p className="text-white">
              Join us for an intensive workshop to improve your IELTS preparation skills. This event will cover all four modules of the IELTS exam.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-white transition-colors bg-teal-700 rounded-lg shadow hover:bg-teal-800"
            >
              Register Now
            </a>
          </div>

          {/* Event 2 */}
          <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500">
            <h3 className="mb-4 text-2xl font-bold text-white">Live IELTS Q&A Session</h3>
            <p className="mb-2 text-white">Date: August 22, 2024</p>
            <p className="mb-4 text-white">Time: 2:00 PM - 3:30 PM</p>
            <p className="text-white">
              Get answers to all your IELTS-related questions in this live Q&A session with our expert instructors.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-white transition-colors bg-purple-700 rounded-lg shadow hover:bg-purple-800"
            >
              Join Now
            </a>
          </div>

          {/* Event 3 */}
          <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-yellow-500">
            <h3 className="mb-4 text-2xl font-bold text-white">IELTS Practice Test</h3>
            <p className="mb-2 text-white">Date: August 29, 2024</p>
            <p className="mb-4 text-white">Time: 9:00 AM - 12:00 PM</p>
            <p className="text-white">
              Experience a simulated IELTS test to evaluate your readiness and receive feedback on your performance.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-white transition-colors bg-green-700 rounded-lg shadow hover:bg-green-800"
            >
              Book Your Spot
            </a>
          </div>

          {/* Event 4 */}
          <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-red-500">
            <h3 className="mb-4 text-2xl font-bold text-white">IELTS Speaking Tips Live</h3>
            <p className="mb-2 text-white">Date: September 5, 2024</p>
            <p className="mb-4 text-white">Time: 11:00 AM - 12:00 PM</p>
            <p className="text-white">
              Discover tips and techniques to excel in the speaking module of the IELTS exam during this live session.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-white transition-colors bg-indigo-700 rounded-lg shadow hover:bg-indigo-800"
            >
              Join Now
            </a>
          </div>

          {/* Video Section */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-white">Watch Our Latest Webinar</h3>
            <p className="text-white">
              Click the button below to watch our latest recorded webinar on IELTS strategies.
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handlePlayVideo}
                className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg shadow hover:bg-blue-700"
              >
                Play Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LiveEvents;
