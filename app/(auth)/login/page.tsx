import Login from '@/components/auth/Login';
import React from 'react';
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const LoginPage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Login />
            <Footer />
        </div>
    );
};

export default LoginPage;