import { useState, useEffect,useRef } from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import All from './components/All';
import Preloader from './components/Preloader';
import ProjectDetail from './components/showcaseComponents/ProjectDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { ProjectProvider } from './context/ProjectContext';

import './index.css'


function App() {
  const [shapeCount, setShapeCount] = useState(90);
  
  const [showContent, setShowContent] = useState(false);
   useEffect(() => {
  const timer = setTimeout(() => {
       setShowContent(true);
     setShapeCount(40);
    }, 4000);
     return () => clearTimeout(timer);
   }, []);



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: shapeCount,
          size: { min: 1, max: 20, pulse: 0 },
          speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.1 } },
          colors: {
            background: "#48488b",
            particles: ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"],
          },
          blending: "screen",
          opacity: { center: 0, edge: 0.4 },
          skew: -2,
          shapes: ["s"],
        });
      }
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [shapeCount]);


  if (!showContent) {
     return (
     <div className="flex justify-center items-center fixed inset-0 bg-[#48488b]">
       <Preloader/>
     </div>
    );
  }


  return (
   <div className="relative w-full min-h-screen overflow-auto">
      <div className="finisher-header fixed inset-0 -z-10"></div>
      <div className="fixed inset-0 -z-20 bg-[#48488b]"></div>

      <div className="relative z-10">
        <ProjectProvider>
          <Router>
            <NavBar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/project-details/:id" element={<ProjectDetail />} />
            </Routes>
          </Router>
        </ProjectProvider>
      </div>
    </div>
  );
}

export default App;
