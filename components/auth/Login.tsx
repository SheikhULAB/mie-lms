// src/components/auth/Login.tsx
"use client";

import React from "react";
import LoginForm from "./LoginForm";
import GoogleSignInButton from "./GoogleSignInButton";
import ToastMessage from "./ToastMessage";

const Login: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center flex-1 pt-8 mx-auto md:flex-row">
      {/* Left Panel - Image */}
      <div className="relative w-full md:w-2/5">
        <img
          src="/images/s.jpg"
          alt="Sign In Image"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white transition duration-300 bg-black bg-opacity-50 hover:bg-opacity-75">
          <h2 className="mb-4 text-3xl font-bold">Welcome to IELTS LMS</h2>
          <p className="mb-8">
            Start your journey with us and get ready to ace your IELTS Exam
          </p>
        </div>
      </div>

      {/* Right Panel - Sign In Form */}
      <div className="w-full p-8 ml-2 mr-2 bg-white rounded-lg shadow-md md:w-2/5">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Sign In to Your Account
        </h2>
        <LoginForm />

        {/* Google Sign-In */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Or sign in with Google:
        </p>
        <GoogleSignInButton />

        {/* Toast Notifications */}
        <ToastMessage />

        {/* Create Account Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="font-semibold text-red-600 hover:underline">
            Create one now!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
