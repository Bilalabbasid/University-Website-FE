import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={`nav-links ${mobileMenu ? 'show-menu' : ''}`}>
        <li><Link to='hero' offset={0} duration={500} smooth={true} onClick={() => setMobileMenu(false)}>Home</Link></li>
        <li><Link to='program' offset={-260} duration={500} smooth={true} onClick={() => setMobileMenu(false)}>Program</Link></li>
        <li><Link to='about' offset={-150} duration={500} smooth={true} onClick={() => setMobileMenu(false)}>About</Link></li>
        <li><Link to='campus' offset={-260} duration={500} smooth={true} onClick={() => setMobileMenu(false)}>Campus</Link></li>
        <li><Link to='testimonials' offset={-260} duration={500} smooth={true} onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
        <li><Link to='contact' offset={-260} duration={500} smooth={true} className='btn cbtn' onClick={() => setMobileMenu(false)}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
