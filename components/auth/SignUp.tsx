"use client";
import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    countryCode: "+880",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //form submission logic here
    console.log(formData);
  };

  return (
    <div className="container flex flex-col items-center justify-center flex-1 pt-8 mx-auto md:flex-row">
      {/* Left Panel - Image */}
      <div className="relative w-full md:w-2/5">
        <img src="/images/s.jpg" alt="Sign In Image" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white transition duration-300 bg-black bg-opacity-50 hover:bg-opacity-75">
          <h2 className="mb-4 text-3xl font-bold">Welcome to IELTS LMS</h2>
          <p className="mb-8">Start your journey with us and get ready to Ace your IELTS Exam</p>
        </div>
      </div>

      {/* Right Panel - Sign Up Form */}
      <div className="w-full p-8 ml-2 mr-2 bg-white rounded-lg shadow-md md:w-2/5">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Sign Up for Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="col-span-1 mb-4">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="first_name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>

            {/* Last Name */}
            <div className="col-span-1 mb-4">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="col-span-1 mb-4">
              <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <div className="flex">
                <select
                  id="country_code"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="block w-1/3 px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option value="+880">+880</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  {/* Add more country code options as needed */}
                </select>
                <input
                  type="tel"
                  id="contact_number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="flex-1 block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-span-1 mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>

            {/* Password */}
            <div className="col-span-1 mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="col-span-1 mb-4">
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Retype Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>

            {/* Role */}
            <div className="col-span-2 mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Your Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Up
          </button>
        </form>

        {/* Sign in with Google */}
        <p className="mt-2 text-sm text-center text-gray-600">Or sign in with Google:</p>
        <button
          type="button"
          className="w-full px-4 py-2 mt-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign In with Google
        </button>

        {/* Already have an account */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-red-600">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
