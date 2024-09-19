// components/TestimonialSection.tsx
import React from 'react';

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    image: '/images/student.jpg', 
    review: 'The courses were comprehensive and the mock tests were incredibly helpful. I felt fully prepared for my IELTS exam.',
    rating: 5,
  },
  {
    name: 'Bob Smith',
    image: '/images/student.jpg', 
    review: 'The instructors were knowledgeable and supportive. I improved my speaking skills significantly with their help.',
    rating: 5,
  },
  {
    name: 'Charlie Davis',
    image: '/images/student.jpg', 
    review: 'The online resources were top-notch. I could study at my own pace and schedule, which was really convenient.',
    rating: 4,
  },
  {
    name: 'Dana Lee',
    image: '/images/student.jpg', 
    review: 'I was really impressed with the personalized feedback I received on my writing tasks. It helped me to improve significantly.',
    rating: 4,
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-3xl font-semibold mb-8">Hear from our Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 mb-4">{testimonial.review}</p>
            <div className="flex justify-center">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.9c.969 0 1.372 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.52 4.674c.3.921-.755 1.688-1.539 1.118l-3.971-2.884a1 1 0 00-1.175 0L4.97 19.91c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.364-1.118L.618 10.1c-.784-.57-.38-1.81.588-1.81h4.9a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
