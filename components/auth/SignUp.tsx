// src/components/SignUp.tsx
"use client";

import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const SignUp: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center flex-1 pt-8 mx-auto md:flex-row">
      {/* Left Panel - Image */}
      <LeftPanel />

      {/* Right Panel - Sign Up Form and Google Sign Up */}
      <RightPanel />
    </div>
  );
};

export default SignUp;


