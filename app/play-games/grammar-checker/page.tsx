"use client"
import React, { useState, useEffect } from 'react';

// Define the structure for sentence objects
interface Sentence {
  incorrect: string;
  correct: string;
}

// Define the type for difficulty levels
type Difficulty = 'easy' | 'medium' | 'hard';

// Define sentence sets for each difficulty level
const sentences: Record<Difficulty, Sentence[]> = {
  easy: [
    { incorrect: "He dont like apples.", correct: "He doesn't like apples." },
    { incorrect: "I is going to the park.", correct: "I am going to the park." },
    { incorrect: "She run very fast.", correct: "She runs very fast." }
  ],
  medium: [
    { incorrect: "We was playing soccer.", correct: "We were playing soccer." },
    { incorrect: "There are a lot of people here today.", correct: "There is a lot of people here today." },
    { incorrect: "The books on the table is old.", correct: "The books on the table are old." }
  ],
  hard: [
    { incorrect: "Neither of the boys are going to the game.", correct: "Neither of the boys is going to the game." },
    { incorrect: "If I was you, I would study harder.", correct: "If I were you, I would study harder." },
    { incorrect: "She had went to the store before the party started.", correct: "She had gone to the store before the party started." }
  ]
};

// Grammar Check Challenge Component
const GrammarCheckChallenge: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');

  // Load a new sentence when difficulty changes
  useEffect(() => {
    loadSentence();
  }, [difficulty]);

  // Start the game timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to load a sentence based on selected difficulty
  const loadSentence = () => {
    const sentenceSet = sentences[difficulty];
    const randomSentence = sentenceSet[Math.floor(Math.random() * sentenceSet.length)];
    setCurrentSentence(randomSentence);
    setUserAnswer('');
    setMessage('');
  };

  // Function to check user's answer
  const checkAnswer = () => {
    if (!currentSentence) return;

    if (userAnswer.trim() === currentSentence.correct) {
      setScore(score + 1);
      setMessage("Correct! Great job!");
      loadSentence();
    } else {
      setMessage("Incorrect. Try again!");
    }
  };

  // Function to show a hint
  const showHint = () => {
    if (!currentSentence) return;

    const hint = `Hint: The correct sentence starts with "${currentSentence.correct.split(' ')[0]}"`;
    setHint(hint);

    // Remove the hint after 3 seconds
    setTimeout(() => setHint(''), 3000);
  };

  // Function to end the game
  const endGame = () => {
    setMessage(`Game over! Your final score is ${score}.`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Grammar Check Challenge</h1>

      {/* Difficulty Selector */}
      <div className="mb-4">
        <label htmlFor="difficulty" className="font-bold text-gray-600">Select Difficulty:</label>
        <select
          id="difficulty"
          className="p-2 ml-2 border rounded"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)} // Cast to Difficulty
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Game Area */}
      <div className="w-full max-w-2xl p-6 text-center bg-white rounded shadow-lg">
        <p className="mb-4 text-xl">Correct the following sentence:</p>
        <p className={`mb-6 text-lg font-bold text-gray-800 transition-all duration-500 ${message && 'show'}`}>
          {currentSentence?.incorrect}
        </p>

        {/* User Input */}
        <input
          type="text"
          placeholder="Type your correction here..."
          className="w-full p-3 mb-4 transition duration-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />

        {/* Buttons */}
        <button
          onClick={checkAnswer}
          className="px-6 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Submit Answer
        </button>
        <button
          onClick={showHint}
          className="px-6 py-2 ml-4 font-bold text-white transition duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600"
        >
          Hint
        </button>
      </div>

      {/* Timer and Score */}
      <div className="flex mt-6 space-x-8 text-lg text-gray-600">
        <p><strong>Timer:</strong> <span>{timeLeft}</span>s</p>
        <p><strong>Score:</strong> <span>{score}</span></p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mt-4 progress-bar">
        <div
          style={{ width: `${((60 - timeLeft) / 60) * 100}%` }}
          className="progress-bar-fill bg-green-500 h-2 rounded"
        ></div>
      </div>

      {/* Message Area */}
      <p className={`mt-4 text-lg ${message ? 'show' : ''}`}>{message}</p>

      {/* Hint Area */}
      {hint && <p className="mt-4 text-lg hint-animation">{hint}</p>}
    </div>
  );
};

export default GrammarCheckChallenge;
