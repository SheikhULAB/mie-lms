import AboutUs from '@/components/about-us/AboutUs';
import Banner from '@/components/about-us/Banner';
import MissionVisionValues from '@/components/about-us/MissionVisionValues';
import Testimonials from '@/components/about-us/Testimonials';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <MissionVisionValues />
            <Testimonials />
        </div>
    );
};

export default AboutUsPage;