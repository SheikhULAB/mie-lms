// components/HangmanGame.tsx
"use client";

import React, { useState, useEffect } from "react";

const HangmanGame: React.FC = () => {
  const words = ["TAILWIND", "JAVASCRIPT", "HANGMAN", "CSS", "RESPONSIVE", "ANIMATION"];
  const [chosenWord, setChosenWord] = useState("");
  const [displayWord, setDisplayWord] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [maxAttempts] = useState(6);

  useEffect(() => {
    initGame();
  }, []);

  // Initialize the game
  const initGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setChosenWord(randomWord);
    setDisplayWord(Array(randomWord.length).fill("_"));
    setIncorrectGuesses([]);
  };

  // Handle letter guess
  const guessLetter = (letter: string) => {
    if (chosenWord.includes(letter)) {
      // Correct guess
      const updatedDisplayWord = displayWord.map((char, index) => (chosenWord[index] === letter ? letter : char));
      setDisplayWord(updatedDisplayWord);
    } else {
      // Incorrect guess
      setIncorrectGuesses((prev) => [...prev, letter]);
    }
  };

  // Reset the game
  const resetGame = () => {
    initGame();
  };

  // Check if the game is over
  const isGameOver = incorrectGuesses.length >= maxAttempts || displayWord.join("") === chosenWord;

  // Hangman drawing stages
  const drawingStages = [
    `______
|     |
|
|
|
|`,
    `______
|     |
|     O
|
|
|`,
    `______
|     |
|     O
|     |
|
|`,
    `______
|     |
|     O
|    /|
|
|`,
    `______
|     |
|     O
|    /|\\
|
|`,
    `______
|     |
|     O
|    /|\\
|    /
|`,
    `______
|     |
|     O
|    /|\\
|    / \\
|`
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center">
        {/* Title */}
        <h1 className="mb-10 text-5xl font-bold text-white">Hangman Game</h1>

        {/* Word Display */}
        <div id="wordDisplay" className="mb-6 text-4xl font-bold tracking-widest text-white">
          {displayWord.join(" ")}
        </div>

        {/* Incorrect Guess Display */}
        <p id="incorrectGuesses" className="mb-4 text-2xl text-red-500">
          Incorrect guesses: {incorrectGuesses.join(", ")}
        </p>

        {/* Hangman Drawing */}
        <div id="hangmanDrawing" className="mb-6 text-lg font-bold text-white hanged-man">
          <pre>{drawingStages[incorrectGuesses.length]}</pre>
        </div>

        {/* Letter Buttons */}
        <div id="letterButtons" className="grid grid-cols-7 gap-4 mb-8">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
            <button
              key={letter}
              className={`px-4 py-2 font-bold bg-gray-200 rounded text-lg hover:bg-blue-400 focus:outline-none ${
                incorrectGuesses.includes(letter) || displayWord.includes(letter)
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : ""
              }`}
              onClick={() => guessLetter(letter)}
              disabled={incorrectGuesses.includes(letter) || displayWord.includes(letter) || isGameOver}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Reset Button */}
        <button
          id="resetButton"
          className={`px-6 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none ${
            isGameOver ? "block" : "hidden"
          }`}
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default HangmanGame;
