import React from 'react';
import Image from 'next/image';

const MissionVisionValues: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-8 bg-gray-50">
      {/* Our Mission */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At MIE LMS, our mission is to empower students and professionals with the skills and knowledge necessary to achieve their highest potential in the IELTS exam. We are committed to providing innovative and effective learning solutions that cater to the diverse needs of our learners.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image 
            src="/images/mission.png"
            alt="Our Mission"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            Our vision is to be a global leader in IELTS preparation, renowned for our innovative teaching methods, comprehensive resources, and exceptional student support. We strive to create a learning environment that is inclusive, engaging, and conducive to success.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image 
            src="/images/vision.png"
            alt="Our Vision"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Excellence:</strong> We strive for excellence in everything we do, from our courses to our customer service.</li>
            <li><strong>Innovation:</strong> We embrace innovation and continuously seek new ways to enhance our learning solutions.</li>
            <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards and transparency.</li>
            <li><strong>Inclusivity:</strong> We believe in providing equal learning opportunities for all individuals, regardless of their background.</li>
            <li><strong>Support:</strong> We are dedicated to supporting our students throughout their learning journey, offering personalized guidance and assistance.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image 
            src="/images/values.png" 
            alt="Our Values"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
