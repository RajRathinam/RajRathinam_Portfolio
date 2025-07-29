import React, { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import '../index.css';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container') || window;

    const onScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 4 || window.scrollY > 4);
    };

    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About Me", to: "aboutme" },
    { label: "Showcase", to: "showcase" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-20 flex justify-between md:px-24 md:py-4 px-5 py-2 items-center
        transition-shadow duration-300
        ${isScrolled ? 'backdrop-blur-md shadow-[0_4px_8px_rgba(255,255,255,0.4)]' : 'bg-transparent shadow-none'}`}
    >
      <h1 className='text-white poppins text-xl font-bold tracking-wider'>
        &lt;Raj Rathinam/&gt;
      </h1>

      {/* Desktop Menu */}
      <ul className="md:flex hidden md:gap-6 text-white poppins font-light tracking-wide">
        {navItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer md:p-2 md:px-4 rounded-xl">
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              offset={-50}
              className="relative text-white group-hover:text-[#acaaffcc] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#acaaff] after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden text-white text-3xl cursor-pointer' onClick={toggleMenu}>
        {showMenu ? <RiCloseLine /> : <RiMenu4Line />}
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <ul className='absolute top-full left-0 w-full bg-[#48488b]/70 backdrop-blur-md shadow-md
          flex flex-col items-center text-white poppins font-bold tracking-wide md:hidden transition-all duration-300'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='cursor-pointer border-b-1 border-white/20 hover:bg-white/20 w-full text-center p-4'
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="block w-full"
                 onClick={toggleMenu}
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
