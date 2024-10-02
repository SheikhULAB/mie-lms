"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  const handlePlayGamesClick = () => {
    router.push('/play-games'); // Navigate to '/play-games' route
  };

  return (
    <div className="relative h-screen bg-cover bg-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/welcome.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-white mb-4">Welcome</h1>
        <p className="text-lg font-medium text-white mb-6">Guiding You To Your Best IELTS Preparation</p>
        <div className="flex space-x-4">
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
            // No navigation for "Join Now" button, you can add any other functionality here
          >
            Join Now
          </button>
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
            onClick={handlePlayGamesClick} // Attach onClick handler for Play Games button
          >
            Play Games
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
