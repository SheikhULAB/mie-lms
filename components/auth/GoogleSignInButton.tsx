// src/components/auth/GoogleSignInButton.tsx
"use client";

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase";

const GoogleSignInButton: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

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
      toast.error(error.message || "Failed to sign in with Google.");
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Sign In with Google
    </button>
  );
};

export default GoogleSignInButton;
