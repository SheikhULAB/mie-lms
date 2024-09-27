import SignUp from '@/components/auth/SignUp';
import React from 'react';
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const SignupPage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SignUp />
            <Footer />
        </div>
    );
};

export default SignupPage;