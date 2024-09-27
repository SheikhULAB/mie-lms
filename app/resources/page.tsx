import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import React from "react";

type Resource = {
  title: string;
  description: string;
  link: string;
  type: "article" | "video" | "download";
};

const resources: Resource[] = [
  {
    title: "IELTS Writing Guide",
    description: "A comprehensive guide on how to improve your IELTS Writing score.",
    link: "/resources/ielts-writing-guide.pdf",
    type: "download",
  },
  {
    title: "IELTS Listening Tips",
    description: "Learn the best tips and strategies for acing the IELTS Listening section.",
    link: "/resources/ielts-listening-tips",
    type: "article",
  },
  {
    title: "Speaking Test Walkthrough",
    description: "Watch this video to understand what happens during the IELTS Speaking test.",
    link: "https://www.youtube.com/watch?v=samplevideo",
    type: "video",
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className="container mx-auto py-12 px-4 lg:px-0">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">IELTS Resources</h1>

      {/* Articles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Articles</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {resources
            .filter((resource) => resource.type === "article")
            .map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{resource.title}</h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
              </a>
            ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Videos</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {resources
            .filter((resource) => resource.type === "video")
            .map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{resource.title}</h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
              </a>
            ))}
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Downloadable Resources</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {resources
            .filter((resource) => resource.type === "download")
            .map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                download
                className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{resource.title}</h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
              </a>
            ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ResourcesPage;
