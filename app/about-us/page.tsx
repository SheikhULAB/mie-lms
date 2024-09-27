import AboutUs from '@/components/about-us/AboutUs';
import Banner from '@/components/about-us/Banner';
import MissionVisionValues from '@/components/about-us/MissionVisionValues';
import Testimonials from '@/components/about-us/Testimonials';
import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Navbar from '@/components/home/Navbar';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Banner />
            <AboutUs />
            <MissionVisionValues />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default AboutUsPage;