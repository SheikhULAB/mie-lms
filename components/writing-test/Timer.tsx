import React from "react";

interface TimerProps {
  timeRemaining: number;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="mb-6 text-lg font-bold text-center text-gray-700">
      <span>Time Remaining: </span>
      <span id="timer" className="text-red-500">{formatTime(timeRemaining)}</span>
    </div>
  );
};

export default Timer;
