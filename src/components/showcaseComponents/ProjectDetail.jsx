import React, { useRef } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { PiGreaterThan } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import '../../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useProjectContext } from '../../context/ProjectContext';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const { projects } = useProjectContext();
  const project = projects[parseInt(id)];

  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  useGSAP(() => {
    const leftItems = leftBoxRef.current.querySelectorAll(".left-animate");
    gsap.from(leftItems, {
      scrollTrigger: {
        trigger: leftBoxRef.current,
        start: "top 85%",
      },
      x: -120,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });

    const rightItems = rightBoxRef.current.querySelectorAll(".right-animate");
    gsap.from(rightItems, {
      scrollTrigger: {
        trigger: rightBoxRef.current,
        start: "top 85%",
      },
      x: 120,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, []);

  if (!project) {
    return (
      <div className="text-white text-center mt-20">
        <h1>Project not found.</h1>
        <Link to="/" className="underline text-blue-400">Go back</Link>
      </div>
    );
  }

  return (
    <section className="md:mt-20 mt-15 md:px-24 px-3 py-2 text-white z-10 relative">
      {/* Breadcrumbs */}
      <div className='flex flex-wrap md:text-md text-sm gap-5 mb-5 items-center'>
        <Link to='/' className='flex gap-1 cursor-pointer items-center bg-white/10 border border-white/20 rounded-lg px-2 py-1 hover:bg-white/20 transition'>
          <IoMdArrowBack /> Back
        </Link>
        <span className='flex gap-3 items-center text-white/50'>
          Projects <PiGreaterThan className='text-[10px]' />
        </span>
        <span className='flex gap-1 items-center'>{project.name}</span>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-x-10 gap-y-8'>
        {/* Left Side */}
        <div className='w-full md:w-1/2 flex flex-col gap-2' ref={leftBoxRef}>
          <div className="text-center md:text-left left-animate">
            <span className="text-white flex md:justify-start justify-start items-center poppins font-bold md:text-4xl text-2xl">
              {project.name}
            </span>
            <div className="h-[3px] bg-white w-1/5 mt-1 mb-1.5 md:ml-0" />
            <p className='text-sm text-start font-light text-white/60'>{project.projectName}</p>
          </div>

          <p className='text-sm leading-relaxed text-justify text-white/80 left-animate'>
            {project.description}
          </p>

          <div className='flex gap-4 left-animate'>
            <a href={project.liveDemoLink} className='flex gap-1 bg-[#1b1b2f8e] hover:shadow-[0_0_8px_#ffffffaa] text-sm hover:bg-[#1b1b2fd8] cursor-pointer items-center text-white px-4 py-2 rounded-md'>
              <LuExternalLink /> Live Demo
            </a>
            <a href={project.githubLink} className='flex gap-1 bg-[#1b1b2f8e] hover:shadow-[0_0_8px_#ffffffaa] text-sm hover:bg-[#1b1b2fd8] cursor-pointer items-center text-white px-4 py-2 rounded-md'>
              <FiGithub /> GitHub
            </a>
          </div>

          <div className='left-animate'>
            <h2 className="flex items-center gap-2 text-lg font-semibold my-4">
              <RiCodeSSlashLine /> Technologies Used
            </h2>
            <div className='flex flex-wrap md:w-3/4 gap-2'>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className='text-white bg-white/20 md:px-4 md:py-1 px-2 py-1 rounded-2xl text-sm'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Swiper and Features */}
        <div className='w-full md:w-1/2 flex flex-col gap-4' ref={rightBoxRef}>
          <div className='right-animate'>
            <Swiper
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: false }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-md w-full max-h-[300px] custom-swiper"
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="w-full md:h-[250px] h-[180px] object-fit rounded-sm"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='bg-black/20 rounded-md border-1 md:px-6 md:py-2 px-3 py-2 border-white/20 text-white md:space-y-1 right-animate'>
            <h2 className='flex items-center gap-2 text-lg font-semibold my-2'>
              <FaRegStar className='text-amber-200' /> Key Features
            </h2>
            <ul className='list-disc list-outside pl-5 mt-2 text-sm leading-loose text-white/80'>
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
