import React from 'react';

import HeroFull from '../assets/hero/HomeHero-full.webp';
import HeroTest from '../assets/hero/HomeHeroTest.jpg';
import Logo from '../assets/Logo.png';
import SideBar from '../components/sidebar/SideBar';

const Header = () => {
  return (
    <header className="h-36 relative flex justify-center items-center">
      <img src={Logo} alt="" className="absolute w-20 object-contain invert" />
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
