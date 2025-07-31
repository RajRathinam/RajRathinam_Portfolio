import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const stackRef = useRef();
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    gsap.from(".tech-box", {
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15
    });
  }, []);

  const techStack = [
    { icon: "/techstacks/Java.webp", name: "Java", percentage: 80 },
    { icon: "/techstacks/JavaScript.webp", name: "JavaScript", percentage: 50 },
    { icon: "/techstacks/Python.webp", name: "Python", percentage: 50 },
    { icon: "/techstacks/React.webp", name: "React", percentage: 60 },
    { icon: "/techstacks/Express.webp", name: "Express", percentage: 60 },
    { icon: "/techstacks/Mongoose.js.webp", name: "Mongoose", percentage: 50 },
    { icon: "/techstacks/Tailwind CSS.webp", name: "Tailwind CSS", percentage: 65 },
    { icon: "/techstacks/Bootstrap.webp", name: "Bootstrap", percentage: 60 },
    { icon: "/techstacks/Vite.js.webp", name: "Vite", percentage: 65 },
    { icon: "/techstacks/MongoDB.webp", name: "MongoDB", percentage: 65 },
    { icon: "/techstacks/Node.js.webp", name: "Node.js", percentage: 70 },
    { icon: "/techstacks/Git.webp", name: "Git", percentage: 50 },
    { icon: "/techstacks/GitHub.webp", name: "GitHub", percentage: 70 },
    { icon: "/techstacks/Postman.webp", name: "Postman", percentage: 65 },
    { icon: "/techstacks/Visual Studio Code (VS Code).webp", name: "VS Code", percentage: 75 }
  ];

  return (
    <section ref={stackRef} className="flex flex-col md:py-8 py-2 items-center">
      <div className="flex flex-wrap justify-center gap-6 2xl:max-w-7xl max-w-6xl w-full">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="tech-box relative w-[26%] md:w-[10%] 2xl:w-[15%] flex flex-col items-center justify-center px-3 py-4 2xl:py-7 border border-white/10 rounded-lg bg-gradient-to-t from-white/10 to-transparent text-white"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Tooltip */}
            <span
              className={`absolute tracking-wider -top-6 md:text-[10px] text-[9px] text-white p-1 bg-black/50 bg-opacity-80 rounded whitespace-normal 
                transition duration-300 z-10 text-center 
                ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            >
              {tech.percentage}% - Proficient
            </span>

            <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 2xl:w-20 2xl:h-20 object-contain mb-2" />
            <p className="text-xs md:text-sm 2xl:text-2xl font-light text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
