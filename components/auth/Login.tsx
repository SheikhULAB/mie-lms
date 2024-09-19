import Link from "next/link";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Welcome Message */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center">
        <div className="text-center text-white px-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to IELTS LMS</h2>
          <p className="text-lg">
            Start your journey with us and get ready to Ace your IELTS Exam
          </p>
        </div>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In to Your Account</h2>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="role">
                Select Your Role
              </label>
              <select
                id="role"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option>Student</option>
                <option>Teacher</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-500 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Sign In
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="text-red-500 font-semibold hover:underline">
                  Create one now!
                </Link>
              </p>
            </div>
          </form>

          {/* Google Sign-In */}
          <div className="mt-6 text-center">
            <p className="text-sm mb-3">Or sign in with Google:</p>
            <button
              type="button"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
