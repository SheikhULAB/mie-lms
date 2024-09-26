"use client"
import { useEffect, useRef } from 'react';

const Achievements: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  const animateNumber = (id: string, finalNumber: number, duration: number) => {
    const element = document.getElementById(id);
    if (!element) return;

    let start = 0;
    const end = finalNumber;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let currentNumber = start;
    const timer = setInterval(() => {
      currentNumber += increment;
      element.innerText = currentNumber + (id === 'success-rate' ? '%' : '');
      if (currentNumber === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumber('admission-number', 400, 2000); // 400 admissions
            animateNumber('batch-number', 15, 2000);      // 15 batches
            animateNumber('success-rate', 98, 2000);      // 98% success rate
            observer.disconnect(); // Stop observing once the animation starts
          }
        });
      },
      { threshold: 0.5 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-gray-200">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">Our Achievements</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3" ref={gridRef}>
          <div className="p-6 bg-white bg-opacity-25 border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Number of Admissions</h3>
            <p className="text-5xl font-bold text-red-600" id="admission-number">0</p>
          </div>
          <div className="p-6 bg-white bg-opacity-25 border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Batches</h3>
            <p className="text-5xl font-bold text-red-600" id="batch-number">0</p>
          </div>
          <div className="p-6 bg-white bg-opacity-25 border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">IELTS Success Rate</h3>
            <p className="text-5xl font-bold text-red-600" id="success-rate">0%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
