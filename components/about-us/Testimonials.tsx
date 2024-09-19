import React from 'react';

interface Testimonial {
  name: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    feedback: 'IELTS LMS helped me achieve my desired band score! The courses and evaluations were top-notch.',
  },
  {
    name: 'Jane Smith',
    feedback: 'The expert feedback on my writing and speaking tasks was incredibly valuable. Highly recommend!',
  },
  {
    name: 'Alex Johnson',
    feedback: 'The variety of practice tests and resources available made my preparation much more effective.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3 flex flex-col"
          >
            <p className="text-gray-700 mb-4">&quot;{testimonial.feedback}&quot;</p>
            <p className="font-semibold text-gray-900">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
