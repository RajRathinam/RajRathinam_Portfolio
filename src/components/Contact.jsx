import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiSend, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { TbNorthStar } from "react-icons/tb";
import { toast, Toaster } from 'react-hot-toast';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useGSAP(() => {
    gsap.from('.info-item', {
      scrollTrigger: { trigger: infoRef.current, start: 'top 80%' },
      x: -100, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
    });
    gsap.from('.form-item', {
      scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
      x: 100, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
    });
  }, []);

const contactList = [
  {
    icon: <IoMdMail className="text-white text-2xl" />,
    label: "Email",
    value: "rajrathinam2005@gmail.com",
    link: "mailto:rajrathinam2005@gmail.com"
  },
  {
    icon: <FaPhoneAlt className="text-white text-sm" />,
    label: "Phone",
    value: "+91 6380698618",
    link: "tel:+916380698618"
  },
  {
    icon: <FiMapPin className="text-white text-lg" />,
    label: "Location",
    value: "Nagapattinam, TamilNadu."
  },
  {
    icon: <FiGithub className="text-white text-lg" />,
    label: "GitHub",
    value: "github.com/RajRathinamS",
    link: "https://github.com/RajRathinam"
  },
  {
    icon: <FiLinkedin className="text-white text-lg" />,
    label: "LinkedIn",
    value: "linkedin.com/in/RajRathinamS",
    link: "https://linkedin.com/in/raj-rathinam-s-55b09530a"
  },
];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data or send it via fetch/axios
    console.log('Form Data:', formData);

    toast.success('Message sent successfully!');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mt-16 md:mt-20 2xl:px-32 md:px-24 px-4 pb-16 text-white relative z-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-[#b0e0f3] to-[#acaaff] bg-clip-text text-transparent">Get in Touch</h1>
        <p className="flex justify-center items-center text-white/60 text-xs md:text-sm 2xl:text-xl mt-2 gap-2">
          <TbNorthStar className="text-[#acaaff]" />
          Have Something to discuss?<br className='md:hidden flex' />Send me a message and let's talk.
          <TbNorthStar className="text-[#acaaff]" />
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Left - Contact Info */}
        <div ref={infoRef} className="w-full md:w-[25%] bg-black/20 border border-white/20 rounded-lg p-6 space-y-4">
          <h2 className="text-xl 2xl:text-2xl text-center font-semibold info-item">Contact Info</h2>
          <div className="space-y-6 text-sm 2xl:text-base text-white/80">
            {contactList.map((item, i) => (
              <div key={i} className="flex items-center gap-3 info-item">
                <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className='text-white/60'>{item.label}</span>
               {item.link ? (
  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-white text-md">{item.value}</a>
) : (
  <span className='text-white text-md'>{item.value}</span>
)}

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSubmit} ref={formRef} className="w-full md:w-[75%] bg-black/20 border border-white/20 rounded-lg md:p-6 p-3 py-4 space-y-4">
          <h2 className="text-xl 2xl:text-2xl text-center font-semibold form-item">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none form-item"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none form-item"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none form-item"
          />

          <button
            type="submit"
            className="flex w-full transition-all duration-500 ease-in-out 
              text-black hover:scale-102 
              hover:shadow-lg cursor-pointer items-center justify-center gap-2 px-5 py-2 text-sm 2xl:text-lg font-semibold rounded bg-gradient-to-r from-[#b0e0f3] to-[#acaaff]"
          >
            Send <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
