"use client";
import { useState } from "react";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Handle Player Clicks
  const handlePlayerClick = (index: number) => {
    if (!board[index] && !isGameOver) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      if (!isGameOver) {
        setCurrentPlayer("O");
        setTimeout(() => computerMove(newBoard), 500);
      }
    }
  };

  // Computer's Move (Easy/Random and Hard/Minimax)
  const computerMove = (newBoard: string[]) => {
    let move: number | null;
    if (difficulty === "easy") {
      move = getRandomMove(newBoard);
    } else {
      const minimaxResult = minimax(newBoard, "O");
      move = minimaxResult.index !== undefined ? minimaxResult.index : null;
    }

    if (move !== null && !isGameOver) {
      const updatedBoard = [...newBoard];
      updatedBoard[move] = "O";
      setBoard(updatedBoard);
      checkWinner(updatedBoard);
      setCurrentPlayer("X");
    }
  };

  // Get random move for easy mode
  const getRandomMove = (newBoard: string[]) => {
    const availableMoves = newBoard
      .map((val, idx) => (val === "" ? idx : null))
      .filter((val) => val !== null) as number[];
    return availableMoves.length > 0
      ? availableMoves[Math.floor(Math.random() * availableMoves.length)]
      : null;
  };

  // Minimax Algorithm for Hard Mode
  const minimax = (
    newBoard: string[],
    player: string
  ): { index?: number; score: number } => {
    const availSpots = newBoard.map((val, idx) => (val === "" ? idx : null));

    if (checkForWinner(newBoard, "X")) return { score: -10 };
    if (checkForWinner(newBoard, "O")) return { score: 10 };
    if (availSpots.every((spot) => spot === null)) return { score: 0 };

    const moves: { index: number; score: number }[] = [];

    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === "") {
        const move: { index: number; score: number } = { index: i, score: 0 };
        newBoard[i] = player;

        if (player === "O") {
          const result = minimax(newBoard, "X");
          move.score = result.score;
        } else {
          const result = minimax(newBoard, "O");
          move.score = result.score;
        }

        newBoard[i] = "";
        moves.push(move);
      }
    }

    let bestMove: { index: number; score: number };
    if (player === "O") {
      let bestScore = -10000;
      moves.forEach((move) => {
        if (move.score > bestScore) {
          bestScore = move.score;
          bestMove = move;
        }
      });
    } else {
      let bestScore = 10000;
      moves.forEach((move) => {
        if (move.score < bestScore) {
          bestScore = move.score;
          bestMove = move;
        }
      });
    }

    return bestMove!;
  };

  // Check if there is a winner
  const checkForWinner = (boardToCheck: string[], player: string) => {
    return winConditions.some((condition) =>
      condition.every((index) => boardToCheck[index] === player)
    );
  };

  // Check if there's a winner or draw
  const checkWinner = (newBoard: string[]) => {
    if (checkForWinner(newBoard, currentPlayer)) {
      setIsGameOver(true);
      highlightWinningCombination(newBoard);
      setStatusMessage(
        currentPlayer === "X"
          ? "Congratulations! You Win!"
          : "Try Again! Computer Wins!"
      );
    } else if (newBoard.every((cell) => cell !== "")) {
      setIsGameOver(true);
      setStatusMessage("It's a draw!");
    }
  };

  // Highlight winning combination
  const highlightWinningCombination = (newBoard: string[]) => {
    winConditions.forEach((condition) => {
      if (condition.every((index) => newBoard[index] === currentPlayer)) {
        condition.forEach((index) => {
          document.querySelectorAll(".box")[index].classList.add("win");
        });
      }
    });
  };

  // Reset Game
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    document.querySelectorAll(".box").forEach((box) => {
      box.textContent = "";
      box.classList.remove("x", "o", "win");
    });
    setStatusMessage("");
    setCurrentPlayer("X");
    setIsGameOver(false);
  };

  return (
    <div className="flex items-center justify-center p-10 min-h-screen bg-gradient-to-br from-blue-900 to-purple-600">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold text-white">Tic-Tac-Toe</h1>

        <div className="mb-4">
          <label htmlFor="difficulty" className="font-bold text-white">
            Choose Difficulty:
          </label>
          <select
            id="difficulty"
            className="p-2 ml-2 rounded"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Tic-Tac-Toe Grid */}
        <div className="grid max-w-xs grid-cols-3 gap-4 mx-auto">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`box flex justify-center items-center w-24 h-24 text-2xl bg-gray-100 transition-all duration-300 cursor-pointer hover:bg-blue-400 transform hover:scale-110 ${
                cell === "X"
                  ? "x text-red-500"
                  : cell === "O"
                  ? "o text-green-500"
                  : ""
              }`}
              onClick={() => handlePlayerClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>

        {/* Status Message */}
        <p id="statusMessage" className="mt-6 text-2xl font-bold text-white">
          {statusMessage}
        </p>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="px-6 py-2 mt-4 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
