"use client";
import { FC, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { collection, addDoc } from "firebase/firestore";
import Topbar from "./Topbar";
import ListeningSection from "./ListeningSection";
import SubmitButton from "./SubmitButton";
import { db } from "@/firebase";

const IELTSListeningTest: FC = () => {
  const [formData, setFormData] = useState({
    q1: "",
    q11: "",
    q21: "",
    q31: "",
    name: "",
    email: "",
    phone: "",
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePDFGeneration = () => {
    const input = contentRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save("IELTSListeningTest.pdf");
        router.push("/ielts-module/listeningtest/success");
      });
    }
  };

  const handleFirestoreSubmit = async () => {
    try {
      await addDoc(collection(db, "ieltsListeningTests"), formData);
      alert('Listening Test submitted successfully!');
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleFirestoreSubmit(); // Save data to Firestore
    handlePDFGeneration(); // Generate PDF and redirect
  };

  return (
    <div className="bg-gray-100">
      <Topbar />
      <div ref={contentRef} className="max-w-5xl px-6 py-12 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <ListeningSection sectionTitle="Section 1: Conversation" handleChange={handleChange} formData={formData} />
        <ListeningSection sectionTitle="Section 2: Monologue" handleChange={handleChange} formData={formData} />
        <ListeningSection sectionTitle="Section 3: Interview" handleChange={handleChange} formData={formData} />
        <ListeningSection sectionTitle="Section 4: Lecture" handleChange={handleChange} formData={formData} />
      </div>
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default IELTSListeningTest;
