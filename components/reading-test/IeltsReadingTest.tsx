"use client";

import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRouter } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import Header from './Header';
import ReadingSection from './ReadingSection';
import { db } from '@/firebase';

const IeltsReadingTest: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'ieltsReadingTests'), {
        answers,
        submittedAt: new Date(),
      });
      console.log(answers);
      alert('Reading Test submitted successfully!');
      generatePDF();
    } catch (error) {
      console.error('Error submitting test data to Firestore:', error);
      alert('Failed to submit the test. Please try again.');
    }
  };

  const generatePDF = () => {
    const input = document.getElementById('reading-test');
    if (!input) {
      alert('Element not found for PDF generation.');
      return;
    }

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save('IELTS_Reading_Test.pdf');
        router.push('/ielts-module/readingtest/success');
      })
      .catch((error) => {
        console.error('PDF generation failed:', error);
        alert('Failed to generate PDF. Please try again.');
      });
  };

  return (
    <div id="reading-test" className="bg-gray-100 min-h-screen">
      <Header title="IELTS Reading Test" />
      <div className="max-w-5xl px-6 py-12 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <ReadingSection sectionNumber="1" passageTitle="The History of Climate Change" handleInputChange={handleInputChange} />
        <ReadingSection sectionNumber="2" passageTitle="The Impact of Digital Technology" handleInputChange={handleInputChange} />
        <ReadingSection sectionNumber="3" passageTitle="Advances in Renewable Energy" handleInputChange={handleInputChange} />
        <div className="flex justify-center mt-8">
          <button onClick={handleSubmit} className="px-4 py-2 font-semibold text-white bg-red-600 rounded shadow hover:bg-red-700">
            Submit Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default IeltsReadingTest;
