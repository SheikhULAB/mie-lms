import React from 'react';

interface QuestionListProps {
  sectionNumber: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ sectionNumber, handleInputChange }) => (
  <div className="mt-6">
    <h4 className="font-semibold text-gray-800">Questions {sectionNumber}1-{sectionNumber}5: True/False/Not Given</h4>
    <p className="text-gray-600">Do the following statements agree with the information in the passage?</p>
    <ul className="mt-4 space-y-2 list-decimal list-inside">
      <li>
        <label className="text-gray-600 mr-2">
          <input type="radio" name={`q${sectionNumber}1`} value="True" onChange={handleInputChange} className="mr-2" />
          True
        </label>
        <label className="text-gray-600 ml-4">
          <input type="radio" name={`q${sectionNumber}1`} value="False" onChange={handleInputChange} className="mr-2" />
          False
        </label>
        <label className="text-gray-600 ml-4">
          <input type="radio" name={`q${sectionNumber}1`} value="Not Given" onChange={handleInputChange} className="mr-2" />
          Not Given
        </label>
      </li>
      {/* Repeat for other questions */}
    </ul>
  </div>
);

export default QuestionList;
