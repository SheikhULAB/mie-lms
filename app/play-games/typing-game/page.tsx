// components/TypingSpeedRace.tsx
"use client"; // To enable client-side rendering in Next.js 13+ using the "app" directory

import React, { useState, useEffect } from "react";

// Define the text samples used in the typing test
const textSamples = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a skill that improves with practice and patience.",
  "Coding challenges can improve both your logic and typing speed.",
  "JavaScript is a powerful language for web development.",
  "Web development consists of HTML, CSS, and JavaScript.",
  "Student life is a journey of learning, growth, and exploration.",
  "Studying abroad offers opportunities for both education and cultural exchange.",
  "The IELTS exam is an essential test for students seeking to study overseas.",
  "Bangladesh is a country known for its rich culture and history.",
  "Cox's Bazar is famous for having the longest natural sea beach in the world.",
  "Time management is a key skill for students balancing studies and personal life.",
  "Studying abroad can broaden a student's perspective on life and education.",
  "IELTS writing tasks require you to structure your essays effectively.",
  "Bangladesh has a growing economy, with a focus on the textile and garment industry.",
  "The scenic beauty of Cox's Bazar attracts tourists from around the world.",
  "A good study plan is crucial for success in exams like the IELTS.",
  "Learning English is essential for students aiming to study in English-speaking countries.",
  "Cultural diversity is one of the main reasons students choose to study abroad.",
  "Bangladesh is home to the Sundarbans, the largest mangrove forest in the world.",
  "Cox's Bazar is not only a beach destination but also a hub for fishing and tourism."
];

const TypingSpeedRace: React.FC = () => {
  // State variables to manage the typing test
  const [textToType, setTextToType] = useState("");
  const [typedText, setTypedText] = useState("");
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [totalCharactersTyped, setTotalCharactersTyped] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    if (isTestRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endTest();
    }
  }, [isTestRunning, timeLeft]);

  // Initialize the test with a random text sample
  const startTest = () => {
    setTextToType(textSamples[Math.floor(Math.random() * textSamples.length)]);
    setTypedText("");
    setCorrectCharacters(0);
    setTotalCharactersTyped(0);
    setTimeLeft(60);
    setWpm(0);
    setAccuracy(100);
    setIsTestRunning(true);
  };

  // Handle typing input and update the state variables
  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setTypedText(inputText);
    setTotalCharactersTyped((prevTotal) => prevTotal + 1);

    // Calculate correct characters
    let correctChars = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === textToType[i]) {
        correctChars++;
      }
    }
    setCorrectCharacters(correctChars);

    // Update WPM and accuracy
    updateWPM(inputText.split(" ").length);
    updateAccuracy(correctChars);
  };

  // Calculate and update WPM
  const updateWPM = (wordsTyped: number) => {
    const minutes = (60 - timeLeft) / 60;
    setWpm(Math.round(wordsTyped / minutes) || 0);
  };

  // Calculate and update accuracy
  const updateAccuracy = (correctChars: number) => {
    const calculatedAccuracy = Math.round((correctChars / totalCharactersTyped) * 100);
    setAccuracy(isNaN(calculatedAccuracy) ? 100 : calculatedAccuracy);
  };

  // End the test and reset the variables
  const endTest = () => {
    setIsTestRunning(false);
    setTypedText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Typing Speed Race</h1>

      {/* Timer and Stats */}
      <div className="flex mb-6 space-x-8 text-lg text-gray-600">
        <p>
          <strong>Timer:</strong> <span id="timer">{timeLeft}</span>s
        </p>
        <p>
          <strong>WPM:</strong> <span id="wpm">{wpm}</span>
        </p>
        <p>
          <strong>Accuracy:</strong> <span id="accuracy">{accuracy}</span>%
        </p>
      </div>

      {/* Text Sample to Type */}
      <div className="max-w-2xl p-6 bg-white rounded shadow-lg">
        <p id="textSample" className="text-xl leading-relaxed text-gray-800">
          {textToType}
        </p>
      </div>

      {/* Typing Input */}
      <textarea
        id="typingArea"
        className="w-full p-4 mt-6 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        rows={4}
        placeholder="Start typing here..."
        value={typedText}
        onChange={handleTyping}
        disabled={!isTestRunning}
      ></textarea>

      {/* Start Button */}
      <button
        id="startButton"
        className="px-6 py-3 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={isTestRunning ? endTest : startTest}
      >
        {isTestRunning ? "End Test" : "Start Typing Test"}
      </button>
    </div>
  );
};

export default TypingSpeedRace;
