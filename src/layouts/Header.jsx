import React from 'react';

import HeroFull from '../assets/hero/HomeHero-full.webp';
import HeroTest from '../assets/hero/HomeHeroTest.jpg';
import SideBar from '../components/sidebar/SideBar';

const Header = () => {
  return (
    <header className="h-36 relative">
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
