// components/IeltsCourses.tsx
import React from 'react';
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const IeltsCourses: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* Banner */}
      <div className="relative bg-blue-500 h-60">
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">IELTS Courses</h1>
        </div>
      </div>

      {/* Main Section */}
      <main className="container p-5 mx-auto mt-10">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex flex-wrap">
            {/* Left Section */}
            <div className="w-full p-4 mb-6 text-white bg-blue-800 rounded-lg md:w-1/2 md:mb-0">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <h2 className="mb-2 text-6xl font-bold">50%</h2>
                  <div className="ml-2 text-lg">
                    <p className="uppercase">Special Offer</p>
                    <p>Guaranteed Scholarships for the 1st 300 registrants</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-xl font-bold">IELTS Platinum (AC/GT)</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>IELTS Free Books provided</li>
                    <li>Duration - 5 Weeks</li>
                    <li>Total class - 25</li>
                    <li>
                      Reading - 08, Writing - 08, Listening - 04, Speaking - 04, Problem Solving - 01 (Module wise Classes)
                    </li>
                    <li>4 Mock Including</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-xl font-bold">IELTS Executive/Regular (AC/GT)</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>IELTS Free Books provided</li>
                    <li>Duration - 3 Months</li>
                    <li>Total class - 25</li>
                    <li>
                      Reading - 08, Writing - 08, Listening - 04, Speaking - 04, Problem Solving - 01 (Module wise Classes)
                    </li>
                    <li>4 Mock Including</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-xl font-bold">IELTS GOLD (AC/GT)</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>IELTS Free Books provided</li>
                    <li>Duration - 3 Months</li>
                    <li>IELTS essential Class Spoken & Grammar (30)</li>
                    <li>Weekly Teachers Consultation Hour</li>
                    <li>IELTS class - 25</li>
                    <li>6 Mock Including</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-xl font-bold">IELTS Extensive Care (AC/GT)</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>IELTS Free Books provided</li>
                    <li>Duration - 5 Months</li>
                    <li>IELTS essential Class Spoken (20), Grammar (20), Vocabulary (10)</li>
                    <li>Daily Teachers Consultation Hour</li>
                    <li>IELTS class - 100</li>
                    <li>Mock Unlimited</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full p-4 bg-white rounded-lg md:w-1/2">
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">IELTS UKVI</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>IELTS Free Books provided</li>
                  <li>Duration - 3 Months</li>
                  <li>Total class - 25</li>
                  <li>
                    Reading - 08, Writing - 08, Listening - 04, Speaking - 04, Problem Solving - 01 (Module wise Classes)
                  </li>
                  <li>4 Mock Including</li>
                </ul>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">IELTS Online (AC/GT)</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>IELTS Free Books provided</li>
                  <li>Duration - 2 Months</li>
                  <li>Total class - 25</li>
                  <li>
                    Reading - 08, Writing - 08, Listening - 04, Speaking - 04, Problem Solving - 01 (Module wise Classes)
                  </li>
                  <li>4 Mock Including</li>
                </ul>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">Spoken & Writing</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Spoken Free Books provided</li>
                  <li>Duration - 3 Months</li>
                  <li>Spoken class - 15 & Writing Class - 15</li>
                </ul>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">Describe for the course Benefits</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Activity Based Public Spoken English</li>
                  <li>Standard Grammar & Writing</li>
                  <li>Phonetics (BBC/CNN Accent)</li>
                  <li>Smart Presentation and Public Speaking</li>
                  <li>Debate</li>
                  <li>5000+ Important Vocabulary</li>
                  <li>Common Mistakes Solution</li>
                  <li>News Presentation</li>
                  <li>Email, Cover letter and more.</li>
                </ul>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">Package-wise IELTS Mock Test Plan</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>01 Mock - 600 BDT</li>
                  <li>03 Mock - 1500 BDT</li>
                  <li>05 Mock - 2000 BDT</li>
                  <li>10 Mock - 3000 BDT</li>
                  <li>15 Mock - 4000 BDT</li>
                </ul>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
                <p>House No. 40, Lake Drive Road, Sector 07, Uttara, Dhaka 1230</p>
                <p>Phone: +880 1329-668459</p>
                <p>Email: gulshan@mieenglishacademy.com</p>
                <p>Website: mieenglishacademy.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IeltsCourses;
