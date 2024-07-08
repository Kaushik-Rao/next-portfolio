"use client";

import { motion } from "framer-motion";

const PortfolioPage = () => {
  const projects = [
    {
      title: "FoodIt - Restaurant Web Application",
      sourceCode: "https://github.com/Kaushik-Rao/FoodIt",
      videoUrl: "/videos/FoodIt.mp4",
      description:
        "This is a brief description of Project 1. It showcases my skills in web development and user interface design.",
    },
    {
      title: "DETR - Object Detection on Custom Dataset",
      sourceCode: "https://github.com/Kaushik-Rao/DETR-Object-Detection-on-Custom-Dataset",
      videoUrl: "/videos/DETR Object Detection.mp4",
      description:
        "Project 2 is an innovative application that demonstrates my proficiency in backend development and database management.",
    },
    {
      title: "Movie Recommendation System with Sentiment Analysis",
      sourceCode: "https://github.com/Kaushik-Rao/Movie-Recommendation-System-with-Sentiment-Analysis",
      videoUrl: "/videos/Movie Recommendation System.mp4",
      description:
        "In Project 3, I explored machine learning algorithms to create a predictive model for data analysis.",
    },
    {
      title: "Pixel Adventures",
      sourceCode: "https://github.com/Kaushik-Rao/Pixel-Adventures",
      videoUrl: "/videos/Pixel Adventures.mp4",
      description:
        "In Project 3, I explored machine learning algorithms to create a predictive model for data analysis.",
    },
  ];

  return (
    <motion.div
      className="h-full overflow-scroll overflow-y-auto overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8">
        <div className="max-w-3xl mx-auto w-full space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md ring-1 ring-black/5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm italic text-blue-600 hover:underline mb-4 block"
              >
                Source Code
              </a>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <video controls className="w-full h-full object-cover rounded">
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
