import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Navbar from '@/components/home/Navbar';
import React from 'react';

const SubscriptionPlans: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className="py-12 bg-gray-200">
    
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Choose Your Subscription Plan</h1>
        <p className="mt-4 text-lg text-gray-600">Get started with the best plan that suits your needs!</p>
      </div>

      {/* Subscription Plans */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Free Plan */}
          <div className="p-8 bg-white border-2 border-blue-600 rounded-lg shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Free Plan</h2>
            <p className="text-lg font-semibold text-gray-600">BDT 0 / Month</p>
            <ul className="mt-4 mb-8 space-y-2 text-left">
              <li>✔ 1 Free Academic Mock Test</li>
              <li>✔ 1 Free General Mock Test</li>
              <li>✔ 1 Free Module-Based Test (Writing, Reading, Speaking, Listening)</li>
              <li>✔ Daily Quizzes</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="p-8 bg-white border-2 border-green-600 rounded-lg shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Premium Plan</h2>
            <p className="text-lg font-semibold text-gray-600">BDT 3500 / 6 Months</p>
            <ul className="mt-4 mb-8 space-y-2 text-left">
              <li>✔ 10 Free Academic Mock Tests</li>
              <li>✔ 10 Free General Mock Tests</li>
              <li>✔ 10 Free Module-Based Tests (Writing, Reading, Speaking, Listening)</li>
              <li>✔ Extra Resources</li>
              <li>✔ 2 Free Evaluation Tests</li>
              <li>✔ 50% Discount on Physical Courses</li>
              <li>✔ Daily Quizzes</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Supreme Plan */}
          <div className="p-8 bg-white border-2 border-yellow-600 rounded-lg shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Supreme Plan</h2>
            <p className="text-lg font-semibold text-gray-600">BDT 6000 / 12 Months</p>
            <ul className="mt-4 mb-8 space-y-2 text-left">
              <li>✔ 30 Free Academic Mock Tests</li>
              <li>✔ 30 Free General Mock Tests</li>
              <li>✔ 30 Free Module-Based Tests (Writing, Reading, Speaking, Listening)</li>
              <li>✔ Extra Resources</li>
              <li>✔ 6 Free Evaluation Tests</li>
              <li>✔ 50% Discount on Physical Courses</li>
              <li>✔ Daily Quizzes</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-700">
                Go Supreme
              </button>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
     <Footer />
     </>
  );
};

export default SubscriptionPlans;
