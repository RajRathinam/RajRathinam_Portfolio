import { useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa6";
import { FiUser, FiGithub } from "react-icons/fi";
import React from "react";
import { BarLoader } from "react-spinners";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function Preloader() {
    const icons = [FaCode, FiUser, FiGithub];
    const loaderBox = useRef(null);
  
    useGSAP(() => {
      const items = loaderBox.current.querySelectorAll(".left-animate");
  
      gsap.from(items, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, []);
    return (
        <div
            className="header flex justify-center items-center finisher-header"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            }}
        >
            <div  ref={loaderBox} className="text-center flex flex-col gap-3">

                <div className="flex justify-around gap-4">
                    {icons.map((Icon, index) => (
                        <div key={index} className="bg-white/20 2xl:p-5 p-3  left-animate rounded-2xl">
                            <Icon className="2xl:text-4xl md:text-2xl text-xl text-white" />
                        </div>
                    ))}
                </div>


                <h1 className="text-white font-extrabold 2xl:text-5xl md:text-3xl text-2xl tracking-wider font-poppins left-animate">
                    Welcome To My
                </h1>
                <h1 className="bg-gradient-to-r left-animate 2xl:text-5xl from-[#b0e0f3] to-[#acaaff] bg-clip-text text-transparent font-extrabold tracking-wide text-2xl md:text-3xl">
                    Portfolio Website
                </h1>
                <BarLoader className="m-auto md:mt-2" color="#acaaff" height={4} width={100} />
            </div>
        </div>
    );
}
