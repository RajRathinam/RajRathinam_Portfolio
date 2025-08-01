import React, { useState } from 'react';
import Projects from './showcaseComponents/Projects';
import Certifications from './showcaseComponents/Certifications';
import TechStack from './showcaseComponents/TechStack';
import { IoMdCode } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { PiStackBold } from "react-icons/pi";
import { TbNorthStar } from "react-icons/tb";


const Showcase = () => {
  const [sections, setSections] = useState("projects");

  return (
    <main id="showcase" className="relative  z-10 mt-8 flex flex-col md:gap-10 gap-5 min-h-screen md:px-24 md:py-7 md:mb-10 px-3 py-2 bg-transparent">
      <div className="flex flex-col 2xl:mb-5  items-center text-center">
        <h1 className="md:text-3xl 2xl:text-4xl text-2xl bg-gradient-to-r from-[#b0e0f3] to-[#acaaff] bg-clip-text text-transparent font-bold md:mb-1">
          Portfolio Showcase
        </h1>
        <p className="flex 2xl:text-white/40 2xl:text-xl 2xl:tracking-widest 2xl:mt-3 text-white font-extralight text-[12px] gap-2">
            <TbNorthStar className="text-[#acaaff]" />
                   Explore my journey through projects, certifications, and technical expertise.<span className='hidden'>Each section represents a milestone in my continuous learning path.</span>
             <TbNorthStar className="text-[#acaaff]" />
        
       </p>
      </div>

      <div className='flex gap-2 md:gap-5 bg-black/20 border-1 border-white/20 md:p-2 rounded-md'>
        <button
          onClick={() => setSections("projects")}
          className={`w-1/3  2xl:text-xl 2xl:font-light flex md:gap-2 gap-0.5 justify-center items-center 2xl:py-4 py-3 text-white text-sm md:text-md font-light rounded-md hover:bg-white/10 cursor-pointer`}
        >
          <IoMdCode className="text-[#acaaff] 2xl:text-4xl md:text-xl"/> Projects
        </button>

        <button
          onClick={() => setSections("certificates")}
          className={`w-1/3 2xl:text-xl 2xl:font-light  flex md:gap-2 gap-0.5  justify-center items-center 2xl:py-4 py-3 text-white text-sm md:text-md font-light rounded-md hover:bg-white/10 cursor-pointer`}
        >
          <TbCertificate className="text-[#acaaff] 2xl:text-4xl md:text-xl"/> Certifications
        </button>

        <button
          onClick={() => setSections("techstack")}
          className={`w-1/3 2xl:text-xl 2xl:font-light  flex md:gap-2 gap-0.5  justify-center items-center 2xl:py-4 py-3 text-white text-sm md:text-md font-light rounded-md hover:bg-white/10 cursor-pointer`}
        >
          <PiStackBold className="text-[#acaaff] 2xl:text-4xl md:text-xl"/> Tech Stack
        </button>
      </div>

      <section>
        {sections === "projects" && <Projects />}
        {sections === "certificates" && <Certifications />}
        {sections === "techstack" && <TechStack />}
      </section>
    </main>
  );
};

export default Showcase;
