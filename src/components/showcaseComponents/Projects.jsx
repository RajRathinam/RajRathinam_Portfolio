import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { LuExternalLink } from "react-icons/lu";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useProjectContext } from '../../context/ProjectContext'; // Adjust the path as needed

gsap.registerPlugin(useGSAP);

const Projects = () => {
  const { projects } = useProjectContext(); // Get project data from context
  const container = useRef(null);
  const cards = useRef([]);

  useGSAP(() => {
    gsap.from(cards.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, { scope: container });

  return (
    <section ref={container} className="flex flex-wrap justify-between gap-4 md:py-8 py-2">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (cards.current[index] = el)}
          className="w-full sm:w-[48%] md:w-[32%] bg-gradient-to-t from-white/10 to-transparent text-white border border-white/10 p-4 rounded-md flex flex-col justify-between"
        >
          <img
            src={project.homePage}
            className="rounded-md mb-3"
            alt={project.name}
          />
          <h1 className="font-bold 2xl:text-2xl text-md mb-2.5">{project.name}</h1>
          <p className="font-light 2xl:text-xl 2xl:text-white/70 text-[11px] mb-3">{project.simpleIntro}</p>
          <div className="flex justify-between items-center">
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-2xl text-sm flex items-center gap-1 hover:text-[#9694f0] text-[#c0bfffc7]"
            >
              Live Demo <LuExternalLink />
            </a>
            <Link
              to={`/project-details/${index}`}
              className="2xl:text-2xl 2xl:px-5 2xl:py-2 text-sm cursor-pointer flex items-center gap-1 bg-white/10 rounded-sm py-1 px-3 text-white/80 hover:text-white"
            >
              Details <IoMdArrowForward />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
