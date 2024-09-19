import React from 'react';

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-[70vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Banner1.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-red-700 bg-opacity-70 flex flex-col justify-center items-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-2">
          IELTS BAND 8
        </h1>

        {/* Sub-heading */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center mt-2">
          Welcome to MIE LMS
        </p>
      </div>
    </div>
  );
};

export default Banner;
