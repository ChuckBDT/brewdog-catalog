import React from 'react';

import HeroFull from '../assets/hero/HomeHero-full.webp';
import SideBar from '../components/Sidebar/SideBar';

const Header = () => {
  return (
    <header className="mx-auto h-28 max-w-screen-2xl relative">
      <img
        src={HeroFull}
        alt="Logo"
        className="w-full h-full object-cover object-top"
      />
      <SideBar />
    </header>
  );
};

export default Header;
