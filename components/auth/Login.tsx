"use client"; // This marks the component as a Client Component

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // sign-in logic here
    console.log({ email, password, role, rememberMe });
  };

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
          <p className="mb-8">Start your journey with us and get ready to ace your IELTS Exam</p>
        </div>
      </div>

      {/* Right Panel - Sign In Form */}
      <div className="w-full p-8 ml-2 mr-2 bg-white rounded-lg shadow-md md:w-2/5">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Sign In to Your Account</h2>
        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Your Role</label>
            <select
              id="role"
              name="role"
              className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-sm text-center">
            <a href="#" className="text-red-600 hover:underline">Forgot your password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign In
          </button>
        </form>

        {/* Create Account Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <a href="/signup" className="font-semibold text-red-600">Create one now!</a>
        </p>

        {/* Google Sign-In */}
        <p className="mt-2 text-sm text-center text-gray-600">Or sign in with Google:</p>
        <button
          type="button"
          className="w-full px-4 py-2 mt-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
