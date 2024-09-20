// src/components/RightPanel.tsx
import React from "react";
import SignUpForm from "./SignUpForm";
import GoogleSignUpButton from "./GoogleSignUpButton";
import ToastMessage from "./ToastMessage";

const RightPanel: React.FC = () => {
  return (
    <div className="w-full p-8 ml-2 mr-2 bg-white rounded-lg shadow-md md:w-2/5">
      <SignUpForm />
      <GoogleSignUpButton />
      <ToastMessage />

      {/* Already have an account */}
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="font-semibold text-red-600">
          Sign In
        </a>
      </p>
    </div>
  );
};

export default RightPanel;
