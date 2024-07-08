"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-black overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">
            <Image
              src="/kaushik.png"
              alt="Kaushik's profile picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, my name is Kaushik
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome to my page, where I'll update all the technologies that I've
            learnt throughout my life. Come explore with me some of my works and
            let's connect.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;