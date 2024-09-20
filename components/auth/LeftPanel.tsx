// src/components/LeftPanel.tsx
import React from "react";

const LeftPanel: React.FC = () => {
  return (
    <div className="relative w-full md:w-2/5">
      <img src="/images/s.jpg" alt="Sign In Image" className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white transition duration-300 bg-black bg-opacity-50 hover:bg-opacity-75">
        <h2 className="mb-4 text-3xl font-bold">Welcome to IELTS LMS</h2>
        <p className="mb-8">
          Start your journey with us and get ready to Ace your IELTS Exam
        </p>
      </div>
    </div>
  );
};

export default LeftPanel;
