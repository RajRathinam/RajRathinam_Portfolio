import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const Certifications = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

 
  useGSAP(() => {
    gsap.from(cardsRef.current, {
      x:-100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, { scope: containerRef });

  const certificates = [
    "/certificate/c1.jpg", "/certificate/c2.jpg", "/certificate/c3.jpg",
    "/certificate/d1.jpg", "/certificate/d2.jpg", "/certificate/d3.jpg", "/certificate/d4.jpg", "/certificate/d5.jpg", "/certificate/d6.jpg",
    "/certificate/cc1.jpg", "/certificate/cc2.jpg", "/certificate/cc3.jpg", "/certificate/cc4.jpg", "/certificate/cc5.jpg", "/certificate/cc6.jpg", "/certificate/cc7.jpg", "/certificate/cc8.jpg", "/certificate/cc9.jpg",
    "/certificate/vir1.jpg", "/certificate/vir2.jpg", "/certificate/vir3.jpg",
  ];

  return (
    <section ref={containerRef} className="flex flex-wrap justify-between gap-4">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="w-full flex items-center sm:w-[48%] md:w-[32%] border border-white/10 p-4 rounded-md bg-gradient-to-t from-white/10 to-transparent text-white"
        >
          <img
            src={certificate}
            className="rounded-md max-h-60 mx-auto transition-all duration-200 hover:scale-105"
            alt={`Certificate ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default Certifications;
