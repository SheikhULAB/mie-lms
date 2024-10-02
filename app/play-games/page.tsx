// components/GameLandingPage.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const GameLandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar with Logo */}
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="MIE LMS Logo" className="w-16 h-14 logo-animation" />
            <span className="sr-only">MIE LMS</span> {/* Hidden text for accessibility */}
          </Link>
        </div>
      </header>

      {/* Tailwind CSS Custom Animation */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .logo-animation {
            animation: zoomInOut 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Main Content */}
      <main className="flex items-center justify-center flex-grow animated-gradient bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        {/* Game Section */}
        <section className="container px-10 py-16 mx-auto">
          {/* Title */}
          <h1 className="mb-10 text-4xl font-bold text-center text-black">Try Some Cool Games</h1>

          {/* Game Cards (2x2 layout) */}
          <div className="grid grid-cols-1 gap-10 p-20 md:grid-cols-2">
            {/* Card 1: Hangman */}
            <div className="p-10 text-center bg-white shadow-lg card-hover rounded-[20px] transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <img src="https://img.icons8.com/ios-filled/50/000000/hangman.png" alt="Hangman Icon" className="w-12 h-12" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">Hangman</h2>
              <p className="mb-4 text-gray-600">Find and make the correct word or get hanged.</p>
              <div className="flex justify-center mb-4">
                {/* Star Rating */}
                {Array(5).fill("").map((_, index) => (
                  <img key={index} src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="Star" className="w-6 h-6" />
                ))}
              </div>
              <Link href="/play-games/hangman" className="inline-block">
                <button className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 play-button">
                  Play Now
                </button>
              </Link>
            </div>

            {/* Card 2: Typing Speed Race */}
            <div className="p-10 text-center bg-white shadow-lg card-hover rounded-[20px] transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <img src="https://img.icons8.com/ios-filled/50/000000/keyboard.png" alt="Typing Speed Race Icon" className="w-12 h-12" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">Typing Speed Race</h2>
              <p className="mb-4 text-gray-600">Test your typing speed. Do you think you're fast enough?</p>
              <div className="flex justify-center mb-4">
                {/* Star Rating */}
                {Array(5).fill("").map((_, index) => (
                  <img key={index} src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="Star" className="w-6 h-6" />
                ))}
              </div>
              <Link href="/play-games/typing-game" className="inline-block">
                <button className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 play-button">
                  Play Now
                </button>
              </Link>
            </div>

            {/* Card 3: Grammar Checker */}
            <div className="p-10 text-center bg-white shadow-lg card-hover rounded-[20px] transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <img src="https://img.icons8.com/ios-filled/50/000000/abc.png" alt="Grammar Checker Icon" className="w-12 h-12" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">Grammar Checker</h2>
              <p className="mb-4 text-gray-600">Test your grammar skills. Correct the sentences.</p>
              <div className="flex justify-center mb-4">
                {/* Star Rating */}
                {Array(5).fill("").map((_, index) => (
                  <img key={index} src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="Star" className="w-6 h-6" />
                ))}
              </div>
              <Link href="/play-games/grammar-checker" className="inline-block">
                <button className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 play-button">
                  Play Now
                </button>
              </Link>
            </div>

            {/* Card 4: Tic-Tac-Toe */}
            <div className="p-10 text-center bg-white shadow-lg card-hover rounded-[20px] transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <img src="https://img.icons8.com/ios-filled/50/000000/close-window.png" alt="Tic Tac Toe Icon" className="w-12 h-12" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">Tic-Tac-Toe</h2>
              <p className="mb-4 text-gray-600">Play Tic-Tac-Toe game.</p>
              <div className="flex justify-center mb-4">
                {/* Star Rating */}
                {Array(5).fill("").map((_, index) => (
                  <img key={index} src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="Star" className="w-6 h-6" />
                ))}
              </div>
              <Link href="/play-games/tic" className="inline-block">
                <button className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 play-button">
                  Play Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GameLandingPage;
