import React from 'react';

import HeroFull from '../assets/hero/HomeHero-full.webp';
import HeroTest from '../assets/hero/HomeHeroTest.jpg';
import Logo from '../assets/Logo.png';
import SideBar from '../components/sidebar/SideBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-36 relative flex justify-center items-center">
      <Link to="/" className="absolute w-12 object-contain invert">
        <img src={Logo} alt="" className="" />
      </Link>
      <img
        src={HeroTest}
        alt="Logo"
        className="w-full h-full object-cover object-bottom"
      />
      <SideBar />
    </header>
  );
};

export default Header;
