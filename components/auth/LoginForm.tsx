// src/components/auth/LoginForm.tsx
"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Fetch user role from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        // Redirect based on role
        switch (role) {
          case "student":
            router.push("/studentdashboard");
            break;
          case "teacher":
            router.push("/teacherdashboard");
            break;
          case "admin":
            router.push("/admindashboard");
            break;
          default:
            toast.error("Invalid user role.");
            break;
        }
      } else {
        toast.error("User data not found.");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in.");
      console.error("Error signing in:", error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      {/* Email Input */}
      <div className="relative mb-4">
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
          className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password Input */}
      <div className="relative mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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
        <label
          htmlFor="remember_me"
          className="block ml-2 text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
