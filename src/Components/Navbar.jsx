import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const [nav, setNav] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <ScrollLink to='main' smooth={true} duration={1000}>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
      </ScrollLink>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-btn' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><ScrollLink to='main' smooth={true} duration={1000}>Home</ScrollLink></li>
        <li><ScrollLink to='feature' smooth={true} duration={1000}>Features</ScrollLink></li>
        <li><ScrollLink to='presentaion' smooth={true} duration={1000}>Offer</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} duration={1000}>About</ScrollLink></li>
        <li><ScrollLink to='mygears' smooth={true} duration={1000}>My Gears</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} duration={1000}>Contact</ScrollLink></li>
        { isAuthenticated ? (
        <li>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          LOG OUT </button>
        </li>
        ) : (
        <li>
          <button onClick={() => loginWithRedirect()} className="login-button">Log In</button>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
