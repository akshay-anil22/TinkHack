import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { id: 'overview', title: 'Overview' },
    { id: 'timeline', title: 'Timeline' },
    { id: 'sponsors', title: 'Sponsors' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-950 backdrop-blur-sm text-gray-300 z-20 border-b border-slate-800">
      <div>
        <Link to="home" smooth={true} duration={500} className="text-2xl font-bold text-cyan-400 cursor-pointer">
          TinkHack
        </Link>
      </div>

    
      <ul className="hidden md:flex">
        {navLinks.map(({ id, title }) => (
          <li key={id} className="px-4 cursor-pointer hover:text-cyan-400 transition duration-300">
            <Link to={id} smooth={true} duration={500} offset={-80}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

    
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

 
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'
        }
      >
        {navLinks.map(({ id, title }) => (
          <li key={id} className="py-6 text-4xl">
            <Link onClick={handleClick} to={id} smooth={true} duration={500} offset={-80}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;