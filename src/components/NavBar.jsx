import React, { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css';

const NavBar = ({ setLoading }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(-100);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth;
      if (width < 768) setScrollOffset(-70);
      else if (width >= 1366 && width < 1920) setScrollOffset(-50);
      else setScrollOffset(-110);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About Me", to: "aboutme" },
    { label: "Showcase", to: "showcase" },
    { label: "Contact", to: "contact" },
  ];

  const handleNavClick = (id) => {
    setShowMenu(false);
    setLoading?.(true);

    if (location.pathname === "/") {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY + scrollOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
        setLoading?.(false);
      }, 300);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY + scrollOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
        setLoading?.(false);
      }, 300);
    }
  }, [location, scrollOffset, setLoading]);

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-20 flex justify-between 
        2xl:px-32 2xl:py-4 md:px-24 md:py-4 px-5 py-4 items-center
        transition-shadow duration-300
        ${isScrolled ? 'backdrop-blur-md shadow-[0_4px_8px_rgba(255,255,255,0.4)]' : 'bg-transparent shadow-none'}`}
    >
      <h1 className='text-white poppins text-xl 2xl:text-4xl font-bold tracking-wider'>
        &lt;Raj Rathinam/&gt;
      </h1>

      <ul className="md:flex hidden md:gap-6 text-white poppins font-light tracking-wide">
        {navItems.map((item, i) => (
          <li key={i} className="relative group cursor-pointer md:p-2 md:px-4 rounded-xl">
            <button
              onClick={() => handleNavClick(item.to)}
              className="relative text-white 2xl:text-xl 2xl:font-extralight group-hover:text-[#acaaffcc] 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-[#acaaff] after:transition-all 
              after:duration-300 group-hover:after:w-full cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      
      <div className='md:hidden text-white text-3xl cursor-pointer' onClick={toggleMenu}>
        {showMenu ? <RiCloseLine /> : <RiMenu4Line />}
      </div>

      {showMenu && (
        <ul className='absolute top-full left-0 w-full bg-[#48488b]/70 backdrop-blur-md shadow-md
          flex flex-col items-center text-white poppins font-bold tracking-wide md:hidden transition-all duration-300'>
          {navItems.map((item, i) => (
            <li
              key={i}
              className='cursor-pointer border-b border-white/20 hover:bg-white/20 w-full text-center p-4'
            >
              <button
                onClick={() => handleNavClick(item.to)}
                className="block w-full"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
