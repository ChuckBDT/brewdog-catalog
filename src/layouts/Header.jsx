import React from 'react';
import { Link } from 'react-router-dom';

import HeroFull from '../assets/hero/HomeHero-full.webp';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className="h-36 relative flex justify-center items-center">
      <Link to="/" className="absolute w-12 object-contain invert">
        <img
          src={Logo}
          alt=""
          className="hover:opacity-80 transition-opacity"
        />
      </Link>
      <img
        src={HeroFull}
        alt="Logo"
        className="w-full h-full object-cover object-bottom"
      />
    </header>
  );
};

export default Header;
