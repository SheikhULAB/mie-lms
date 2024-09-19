import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Best IELTS MOCKs',
      description: 'Experience the best IELTS mock exams to prepare for your test.',
    },
    {
      title: 'Experienced Educators',
      description: 'Learn from the most experienced educators in the field.',
    },
    {
      title: 'Easy Access',
      description: 'Access our resources easily from anywhere, anytime.',
    },
    {
      title: 'Flexible Schedule',
      description: 'Enjoy a flexible schedule that fits your lifestyle.',
    },
    {
      title: 'Comprehensive Support',
      description: 'Get comprehensive support throughout your preparation.',
    },
    {
      title: 'Career Guidance',
      description: 'Receive expert career guidance tailored to your goals.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">Why Choose Us</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
