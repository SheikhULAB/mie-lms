// src/components/auth/GoogleSignUpButton.tsx
"use client";

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { auth, db } from "@/firebase";

const GoogleSignUpButton: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;

      // Check if user data already exists in Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // If user data doesn't exist, create it
        await setDoc(userDocRef, {
          uid: user.uid,
          firstName: user.displayName?.split(" ")[0] || "",
          lastName: user.displayName?.split(" ")[1] || "",
          contactNumber: "", // You can prompt the user to add this information later
          countryCode: "", // Same as above
          email: user.email,
          role: "student", // Default role; adjust as needed
          createdAt: new Date(),
        });
      }

      toast.success("Signed up with Google!");
      console.log("User signed up with Google:", user);

      // Redirect to /login
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignUp}
      className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Sign In with Google
    </button>
  );
};

export default GoogleSignUpButton;
