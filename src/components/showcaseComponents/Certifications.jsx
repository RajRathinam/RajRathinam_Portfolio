import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const containerRef = useRef(null);

  const certificates = [
    "/certificates/c1.webp", "/certificates/c2.webp", "/certificates/c3.webp",
    "/certificates/d1.webp", "/certificates/d2.webp", "/certificates/d3.webp", "/certificates/d4.webp", "/certificates/d5.webp", "/certificates/d6.webp",
    "/certificates/cc1.webp", "/certificates/cc2.webp", "/certificates/cc3.webp", "/certificates/cc4.webp", "/certificates/cc5.webp", "/certificates/cc6.webp", "/certificates/cc7.webp", "/certificates/cc8.webp", "/certificates/cc9.webp",
    "/certificates/vir1.webp", "/certificates/vir2.webp", "/certificates/vir3.webp",
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certificate-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
     x:-100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="flex flex-wrap justify-between gap-4 py-2">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="certificate-card w-full flex items-center sm:w-[48%] md:w-[32%] 2xl:w-[24%] border border-white/10 p-4 rounded-md bg-gradient-to-t from-white/10 to-transparent text-white"
        >
          <img
            src={certificate}
            className="rounded-md max-h-60 2xl:max-h-80 w-full mx-auto transition-all duration-200 hover:scale-105"
            alt={`Certificate ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default Certifications;
