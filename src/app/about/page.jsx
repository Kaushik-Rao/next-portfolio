"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });
  
    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg: flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-54 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">
                            BIOGRAPHY
                        </h1>
                        <p className="text-lg">
                            I am a full stack developer with a passion for learning new technologies. I have experience in building web applications using React, NodeJs, and Nextjs. I am currently pursuing my B. Tech in Information Technology at Vellore Institute of Technology, Vellore.
                        </p>
                        <span className="italic"></span>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
                        {/* SKILL LIST */}
                        <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} className="flex gap-4 flex-wrap">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">C++</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">C#</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScipt</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">ReactJs</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NodeJs</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextJs</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">ExpressJs</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Django</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Flask</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MySQL</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Prisma</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Docker</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PostgreSQL</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaFX</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">GitHub</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">VSCode</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">IntelliJ</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Jupyter Notebook</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Google Colaboratory</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Unity</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Jira</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Linux</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Canva</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MS Excel</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Power BI</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tableau</div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        </motion.svg>
                    </div>
                    {/* EDUCATION CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 bg-white rounded-b-lg rounded-s-lg">
                  {/* COLLEGE TITLE */}
                  <div className=" p-3 font-semibold ">
                    Vellore Institute of Technology
                  </div>
                  {/* COLLEGE DESC */}
                  <div className="p-3 text-sm italic">
                    Vellore, Tamil Nadu{" "}
                  </div>
                  <div className="p-3 text-sm italic">
                    Information Technology, B. Tech{" "}
                  </div>
                  {/* COLLEGE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 bg-white rounded-b-lg rounded-s-lg">
                  {/* COLLEGE TITLE */}
                  <div className=" p-3 font-semibold ">
                    FIITJEE Junior College
                  </div>
                  {/* COLLEGE DESC */}
                  <div className="p-3 text-sm">
                    Visakhapatnam, Andhra Pradesh{" "}
                  </div>
                  <div className="p-3 text-sm italic">
                    MPC, Andhra Intermediate Board{" "}
                  </div>
                  {/* COLLEGE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2020{" "}
                  </div>
                </div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 bg-white rounded-b-lg rounded-s-lg">
                  {/* COLLEGE TITLE */}
                  <div className=" p-3 font-semibold ">
                    Sri Chaitanya Vidya Niketan{" "}
                  </div>
                  {/* COLLEGE DESC */}
                  <div className="p-3 text-sm">
                    Visakhapatnam, Andhra Pradesh {" "}
                  </div>
                  <div className="p-3 text-sm italic">
                    10th Board, CBSE {" "}
                  </div>
                  {/* COLLEGE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2015 - 2018{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage