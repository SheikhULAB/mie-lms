// src/components/auth/SignUpForm.tsx
"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { auth, db } from "@/firebase";

interface FormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  countryCode: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    contactNumber: "",
    countryCode: "+880",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const router = useRouter(); // Now correctly imported from 'next/navigation'

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Update user profile with display name
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });

      // Save additional user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: `${formData.countryCode} ${formData.contactNumber}`,
        email: formData.email,
        role: formData.role,
        createdAt: new Date(),
      });

      toast.success("Signup successful!");
      console.log("User signed up and data saved to Firestore:", user);

      // Redirect to /login
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.error("Error signing up:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div className="col-span-1 mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          />
        </div>

        {/* Last Name */}
        <div className="col-span-1 mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="col-span-1 mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number
          </label>
          <div className="flex">
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="block w-1/3 px-3 py-2 mt-1 border-gray-300 rounded-l-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="+880">+880</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              {/* Add more country code options as needed */}
            </select>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 py-2 mt-1 border-gray-300 rounded-r-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-span-1 mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
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
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Create New Password
          </label>
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
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Retype Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          />
        </div>

        {/* Role */}
        <div className="col-span-2 mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Select Your Role
          </label>
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
  );
};

export default SignUpForm;
