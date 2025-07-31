import React, { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { Link as ScrollLink } from 'react-scroll';
import '../index.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(-100);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    // Scroll effect for header shadow
    const scrollContainer = document.querySelector('.scroll-container') || window;
    const onScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 4 || window.scrollY > 4);
    };
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });

    return () => scrollContainer.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Responsive scroll offset based on screen width
    const updateOffset = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScrollOffset(-70); // mobile
      } else if (width >= 1366 && width < 1920) {
        setScrollOffset(-50); // md screens
      } else {
        setScrollOffset(-110); // xl, 2xl
      }
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

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-20 flex justify-between 
        2xl:px-32 2xl:py-8 md:px-24 md:py-4 px-5 py-4 items-center
        transition-shadow duration-300
        ${isScrolled ? 'backdrop-blur-md shadow-[0_4px_8px_rgba(255,255,255,0.4)]' : 'bg-transparent shadow-none'}`}
    >
      {/* Logo */}
      <h1 className='text-white poppins text-xl 2xl:text-4xl font-bold tracking-wider'>
        &lt;Raj Rathinam/&gt;
      </h1>

      {/* Desktop Navigation */}
      <ul className="md:flex hidden md:gap-6 text-white poppins font-light tracking-wide">
        {navItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer md:p-2 md:px-4 rounded-xl">
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="relative text-white 2xl:text-2xl group-hover:text-[#acaaffcc] 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-[#acaaff] after:transition-all 
              after:duration-300 group-hover:after:w-full cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Icon */}
      <div className='md:hidden text-white text-3xl cursor-pointer' onClick={toggleMenu}>
        {showMenu ? <RiCloseLine /> : <RiMenu4Line />}
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <ul className='absolute top-full left-0 w-full bg-[#48488b]/70 backdrop-blur-md shadow-md
          flex flex-col items-center text-white poppins font-bold tracking-wide md:hidden transition-all duration-300'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='cursor-pointer border-b border-white/20 hover:bg-white/20 w-full text-center p-4'
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70} // Fixed offset for mobile menu
                onClick={toggleMenu}
                className="block w-full"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
