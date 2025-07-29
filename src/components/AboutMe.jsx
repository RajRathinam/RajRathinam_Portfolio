import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbNorthStar } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import { RiCodeSSlashLine } from "react-icons/ri";
import '../index.css'
import { IoMdCode } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { FaCode } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
const icons = [
  {
    icon: <FaCode />,
    title: "Total Projects",
    count: "04",
    description: "Developed full-stack applications using React, Node.js, and MongoDB.",
  },
  {
    icon: <TbCertificate />,
    title: "Certificates",
    count: "22",
    description: "Earned certifications in web development, programming, and tools like Git and Postman.",
  },
  {
    icon: <IoMdCode />,
    title: "Problem Solved",
    count: "1000+",
    description: "Solved coding problems on platforms like Skillrack, LeetCode, and HackerRank to improve logical thinking.",
  },
];

  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useGSAP(() => {

    const items = boxRef1.current.querySelectorAll(".left-animate");
    gsap.from(items, {
      scrollTrigger: {
        trigger: boxRef1.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      y: 150,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });


    gsap.from(boxRef2.current, {
      scrollTrigger: {
        trigger: boxRef2.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  const boxRef3 = useRef(null);

  useGSAP(() => {

    const items = boxRef3.current.querySelectorAll(".card-animate");
    gsap.from(items, {
      scrollTrigger: {
        trigger: boxRef3.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      y: 150,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  const name = "Raj Rathinam";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (index < name.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + name[index]);
        setIndex((i) => i + 1);
      }, 200);
    } else {

      typingTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, name]);
  return (
    <main
      id="aboutme"
      className="min-h-screen mt-4 md:px-5 md:py-7 px-3 py-2 flex flex-col gap-5 md:gap-6 bg-transparent"
    >

      <div className="flex flex-col items-center text-center">
        <h1 className="md:text-3xl text-2xl bg-gradient-to-r from-[#b0e0f3] to-[#acaaff] bg-clip-text text-transparent font-bold mb-1">
          About Me
        </h1>
        <p className="flex items-center text-white font-extralight text-[12px] gap-2">
          <TbNorthStar className="text-[#acaaff]" />
          Transforming ideas into digital experiences
          <TbNorthStar className="text-[#acaaff]" />
        </p>
      </div>


      <div className="flex flex-col-reverse md:flex-row md:px-28 gap-3 justify-between items-center">

        <div ref={boxRef1} className="max-w-lg text-center md:text-left space-y-2">
          <h2 className="left-animate poppins md:text-3xl text-2xl bg-gradient-to-r from-[#b0e0f3] via-[#acaaff] to-[#6464c4] bg-clip-text text-transparent font-bold">
            Hello, I'm
          </h2>
          <h3 className="text-white left-animate flex md:justify-start justify-center items-center poppins font-bold md:text-3xl text-xl">
            {displayedText}
            <span className="blinking-cursor text-md font-extralight">|</span>
          </h3>
          <p className="left-animate text-white md:text-md text-[13px] font-extralight text-justify leading-relaxed">
            I love transforming ideas into reality through clean, scalable code
            and thoughtful design. Whether it’s developing interactive UIs,
            optimizing performance, or bringing creative animations to life, my
            goal is to deliver impactful solutions that truly stand out.
          </p>

          <div className="left-animate flex gap-3 mt-5 md:mt-5 md:justify-start">
            <a
              href="/Raj_Rathinam_Resume.pdf"
              download
              className="md:py-2 md:px-4 px-4 py-2 text-sm border border-white/10 rounded-md flex gap-2 items-center 
              bg-gradient-to-r from-[#b0e0f3] to-[#acaaff] text-black 
              transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <GrDocumentText /> Download CV
            </a>

            <a
              href="#showcase"
              className="md:py-2 md:px-4 px-4 py-2 text-sm text-white border border-white 
              rounded-md flex gap-2 items-center 
              transition-all duration-500 ease-in-out 
              hover:bg-gradient-to-r from-[#b0e0f3] to-[#acaaff] hover:text-black 
              hover:shadow-lg hover:scale-105"
            >
              <RiCodeSSlashLine /> View Projects
            </a>
          </div>
        </div>


        <div
          ref={boxRef2}
          className="flex justify-center items-center p-6 rounded-lg bg-gradient-to-br from-[#5c5ca3] to-[#3a3a70]"
        >
          <img
            src="/raj.png"
            alt="Raj"
            className="md:w-64 md:h-64 w-52 h-52 object-cover rounded-lg 
            shadow-[0_4px_20px_rgba(0,0,0,0.4)] 
            hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] 
            transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
      <div ref={boxRef3} className="flex md:flex-row flex-col md:px-28 gap-3">
        {
          icons.map((i,index)=> (
            <div key={index} className="bg-black/20 card-animate border-1 md:px-6 md:py-4 px-3 py-2 border-white/20 text-white md:space-y-1 md:w-1/3">
                <div className="flex justify-between items-center mb-1.5 md:mb-3">
              <div className="p-2 bg-white/20 rounded-full text-md md:text-lg">{i.icon}</div>
              <div className="p-2 bg-white/20 rounded-lg text-sm md:text-sm">{i.count}</div>
            </div>
              <p className="text-sm md:text-md font-light tracking-wider">{i.title}</p>
              <p className="text-[10px] font-extralight tracking-widest text-white/70">{i.description}</p>
            </div>
          ))
        }
      </div>
    </main> 
  );
};

export default AboutMe;