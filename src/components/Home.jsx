import React, { useRef } from 'react';
import { AiOutlineRise } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { RiLinkedinLine, RiCodeSSlashLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const socialLinks = [
  { icon: <RiLinkedinLine />, url: "https://www.linkedin.com/in/raj-rathinam-s-55b09530a" },
  { icon: <FiGithub />, url: "https://github.com/RajRathinam" },
  { icon: <RiCodeSSlashLine />, url: "http://www.skillrack.com/profile/444487/2029e1789e9a57287acea1d68b4b8e43be7cdf44" },
];

const Home = () => {
  const leftBoxRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const items = leftBoxRef.current.querySelectorAll(".left-animate");

    gsap.from(items, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <main id="home" className="relative z-10 flex justify-around items-center h-screen mt-4 md:px-24 px-5 py-2 bg-transparent">

      <div ref={leftBoxRef} className='flex flex-col md:gap-2 gap-2'>

        <span className='left-animate w-fit flex gap-2 text-white font-extralight shadow-xl bg-white/10 py-2 px-5 rounded-3xl mb-1 md:mb-2'>
          <AiOutlineRise className="md:text-2xl text-xl text-white" /> Innovating Everyday
        </span>

        <span className='left-animate md:text-5xl text-4xl text-white tracking-wide font-extrabold'>Full-Stack</span>
        <span className='left-animate md:text-5xl text-4xl bg-gradient-to-r from-[#b0e0f3] to-[#acaaff] bg-clip-text text-transparent font-extrabold md:mb-1'>Developer</span>
        <span className='left-animate text-slate-200 md:text-sm text-[15px]'>Computer Science & Engineering Student</span>
        <p className="left-animate text-slate-300 mb-2 md:text-sm text-[13px] leading-relaxed">
  Passionate about building seamless user experiences and<br className='hidden md:block'></br> solving real-world problems through code.
</p>
        <div className='left-animate flex gap-3 mb-2 md:mb-1'>
          {["React", "Tailwind CSS", "GSAP"].map(skill => (
            <span key={skill} className='text-white bg-white/20 px-4 md:text-sm text-[12px] py-1 rounded-2xl'>{skill}</span>
          ))}
        </div>

        <div className='left-animate flex gap-4 mb-2 md:mb-1'>
          <a href='#showcase' className='bg-[#1b1b2f8e] hover:shadow-[0_0_8px_#ffffffaa] md:text-sm text-[12px]  hover:bg-[#1b1b2fd8] cursor-pointer flex gap-2 items-center text-white px-4 py-2'>
            View Projects <FaCode />
          </a>
          <a href='#' className='bg-[#1b1b2f8e] hover:shadow-[0_0_8px_#ffffffaa] md:text-sm text-[12px] hover:bg-[#1b1b2fd8] flex cursor-pointer gap-2 items-center text-white px-4 py-2'>
            Contact Me <MdOutlineContactMail />
          </a>
        </div>

        <div className='left-animate flex gap-4 text-2xl text-white md:mb-1'>
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-2xl hover:shadow-[0_0_8px_#ffffffaa] md:text-2xl text-xl text-white hover:bg-[#1b1b2f8e]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className='hidden md:block' ref={imageRef}>
        <img src="/Programming.gif" className='w-96 h-96' />
      </div>
    </main>
  );
};

export default Home;
