// src/components/GoogleSignUpButton.tsx
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/firebase";

const GoogleSignUpButton: React.FC = () => {
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;

      // Optionally, save the user info to your database here

      toast.success("Signed up with Google!");
      console.log("User signed up with Google:", user);
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
