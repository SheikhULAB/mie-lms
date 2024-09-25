// components/Help.tsx
"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login page, click on 'Forgot Password?', and follow the instructions sent to your email.",
  },
  {
    id: 2,
    question: "Where can I find my account settings?",
    answer:
      "You can find your account settings in the dropdown menu in the top right corner after you log in.",
  },
  {
    id: 3,
    question: "How can I contact support?",
    answer:
      "You can contact support by emailing support@example.com or using the contact form on our website.",
  },
  {
    id: 4,
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
  {
    id: 5,
    question: "How do I update my profile information?",
    answer:
      "To update your profile information, navigate to your account settings and edit the fields as necessary.",
  },
];

const SHelp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with fixed width */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Help & Support</h1>
        <input
          type="text"
          placeholder="Search for a question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <p className="text-gray-600">No results found.</p>
          ) : (
            filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex justify-between w-full p-4 text-left text-gray-800 rounded-t-lg hover:bg-gray-100 focus:outline-none"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="ml-2">{expandedFAQ === faq.id ? "-" : "+"}</span>
                </button>
                {expandedFAQ === faq.id && (
                  <div className="p-4 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SHelp;
