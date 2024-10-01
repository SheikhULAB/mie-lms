import React from 'react';
import QuestionList from './QuestionList';

interface ReadingSectionProps {
  sectionNumber: string;
  passageTitle: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ sectionNumber, passageTitle, handleInputChange }) => (
  <section className="mt-8">
    <h3 className="text-xl font-semibold text-gray-700">Section {sectionNumber}: Passage {sectionNumber}</h3>
    <div className="p-4 mt-4 rounded-lg bg-gray-50">
      <p className="text-gray-700">Read the passage below and answer the questions:</p>
      <p className="mt-2 text-gray-600">
        <strong>Passage Title:</strong> {passageTitle}
      </p>
    </div>
    <QuestionList sectionNumber={sectionNumber} handleInputChange={handleInputChange} />
  </section>
);

export default ReadingSection;
