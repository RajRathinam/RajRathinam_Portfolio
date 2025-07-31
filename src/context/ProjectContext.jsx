// context/ProjectContext.jsx
import { createContext, useContext, useState } from 'react';
import React from 'react';
const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      homePage: "/project/project1.webp",
      name: "Permiso",
      projectName: "Student Request Management System",
      simpleIntro: "An institutional system for managing student on-duty and leave requests.",
      description:
        "Permiso is a student on-duty and leave request management system tailored for institutions. It simplifies the multi-step approval process involving class in-charges and HODs. Students can raise complaints, generate QR-verified letters, and manage profiles with ease.",
      keyFeatures: [
        "Student login using register number",
        "Single and group on-duty/leave requests",
        "Staff dashboard for approval workflow",
        "Auto-generated approval letters with QR code verification",
        "Cloudinary-based image storage",
        "Complaint management module"
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary"
      ],
      liveDemoLink: "https://permiso-vanilla-1.onrender.com/",
      githubLink: "https://github.com/RajRathinam/permiso_vanilla/tree/master",
      images: [
        "/project/permiso/scr1.webp",
        "/project/permiso/scr2.webp", 
        "/project/permiso/scr3.webp", 
        "/project/permiso/scr4.webp",
        "/project/permiso/scr6.webp", 
        "/project/permiso/scr7.webp",
        "/project/permiso/scr8.webp",
      ]
    },
    {
      homePage: "/project/project2.webp",
      name: "ChatsApp",
      projectName: "MERN Realtime Chat App",
      simpleIntro: "A secure real-time chat app with user auth and live messaging features.",
      description:
        "ChatsApp is a real-time chat application built using the MERN stack and Socket.IO. It enables one-on-one messaging with instant delivery, message status, and typing indicators. The sleek UI supports user authentication, active user lists, and clean chat history. It's optimized for responsiveness and provides a secure, seamless chatting experience."
      , keyFeatures: [
        "Real-time two-person messaging using Socket.IO",
        "User login & registration",
        "Online/offline presence indicator",
        "Typing indicators",
        "Secure communication with JWT-based auth"
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT"
      ],
      liveDemoLink: "https://mern-chatsapp.onrender.com/",
      githubLink: "https://github.com/RajRathinam/mern_chatsapp/tree/master",
      images: [
        "/project/chatsapp/scr1.webp",
        "/project/chatsapp/scr2.webp", 
        "/project/chatsapp/scr3.webp", 
        "/project/chatsapp/scr4.webp",
        "/project/chatsapp/scr5.webp", 
        "/project/chatsapp/scr6.webp", 
        "/project/chatsapp/scr7.webp",
      ]
    },
    {
      homePage: "/project/project3.webp",
      name: "Vedha Clothing",
      projectName: "Admin & Showcase Platform",
      simpleIntro: "A product showcase platform with admin features for a clothing brand.",
      description:
        "VedhaClothing is a modern e-commerce clothing website designed to offer a smooth shopping experience. Built with React and Tailwind CSS, it features product browsing, category filters, cart management, and order placement. Admins can add or remove products. Styled with responsiveness in mind, it provides a clean, aesthetic interface for both desktop and mobile users."
      , keyFeatures: [
        "Static customer view for browsing products",
        "Admin dashboard with authentication",
        "Manage clothes, collections, and offers",
        "Display customer opinions on the site",
        "Easy content updates without needing developer support"
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "bcrypt"
      ],
      liveDemoLink: "https://vedhaclothing.in/",
      githubLink: "https://github.com/RajRathinam/VedhaClothing",
      images: [
         "/project/vedha/scr1.webp",
        "/project/vedha/scr2.webp", 
        "/project/vedha/scr3.webp", 
        "/project/vedha/scr4.webp",
      ]
    },
    {
      homePage: "/project/project4.webp",
      name: "Book Worm Haven",
      projectName: "Digital Book Recommender",
      simpleIntro: "A personal book management and discovery platform for readers.",
      description:
        "Book Worm Haven is an online book library where users can browse, search, and manage books. Built with React and Node.js, it supports user authentication, genre-wise exploration, and personalized book collections. The system enables easy book borrowing and returning, promoting reading habits. It's intuitive, scalable, and ideal for educational institutions or personal libraries."
      , keyFeatures: [
        "Add and manage books with cover and details",
        "Categories and genre filtering",
        "Responsive book card layout",
        "Favorite/bookmarked section",
        "Modern UI/UX design for clean reading experience"
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      liveDemoLink: "https://book-worm-haven.netlify.app/",
      githubLink: "https://github.com/RajRathinam/Book-Worm-Haven",
      images: [
         "/project/book/scr1.webp",
        "/project/book/scr2.webp", 
        "/project/book/scr3.webp", 
      ]
    }
  ]); // You can prefill or set dynamically

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
