import React from "react";
import Link from "next/link"; // Import the Link component

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left Section: Image and Text */}
        <div className="bg-black md:w-1/2 p-10 flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Welcome to IELTS LMS
            </h1>
            <p className="text-white text-lg">
              Start your journey with us and get ready to Ace your IELTS Exam
            </p>
          </div>
        </div>

        {/* Right Section: Sign-Up Form */}
        <div className="p-10 md:w-1/2 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sign Up for Your Account
          </h2>
          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 border rounded-md"
              />
            </div>

            {/* Contact Number and Email Address */}
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-1/2 p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-1/2 p-3 border rounded-md"
              />
            </div>

            {/* Password and Retype Password */}
            <div className="flex space-x-4">
              <input
                type="password"
                placeholder="Create New Password"
                className="w-1/2 p-3 border rounded-md"
              />
              <input
                type="password"
                placeholder="Retype Password"
                className="w-1/2 p-3 border rounded-md"
              />
            </div>

            {/* Select Role */}
            <div>
              <select
                className="w-full p-3 border rounded-md"
                defaultValue="Student"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            {/* Sign Up Button */}
            <div>
              <button className="w-full bg-red-500 text-white py-3 rounded-md font-semibold">
                Sign Up
              </button>
            </div>

            {/* Sign In with Google */}
            <div className="text-center">
              <p className="text-gray-500 mb-2">Or sign in with Google:</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold">
                Sign In with Google
              </button>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-red-500 font-semibold">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
