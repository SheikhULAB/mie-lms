import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Left side: About Us Content */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
          MIE LMS is a premier learning management system designed to cater to students and professionals aiming to excel in their IELTS examinations. Our platform offers a comprehensive range of courses, expert evaluations, and personalized learning experiences to ensure success in your IELTS journey.
        </p>
        <p className="text-gray-600 mb-6">
          Our team of experienced educators and language experts is dedicated to providing the highest quality education and support to help you achieve your goals. Join us and take the first step towards mastering the English language and achieving your dreams!
        </p>
        
        {/* Image */}
        <Image 
          src="/images/team.jpg" 
          alt="Team Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right side: Contact Info */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <ul className="text-gray-700 mb-6">
          <li><strong>Email:</strong> info@mielms.com</li>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>Address:</strong> 123 Main Street, Anytown, AT 12345</li>
        </ul>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Social Media</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-blue-500 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-blue-400 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-pink-600 hover:underline">Instagram</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
