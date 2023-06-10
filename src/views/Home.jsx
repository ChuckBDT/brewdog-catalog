import React from "react";

import homeHeroSm from "../assets/hero/HomeHero-sm.webp";
import homeHeroMd from "../assets/hero/HomeHero-md.webp";
import homeHeroLg from "../assets/hero/HomeHero-lg.webp";
import homeHeroXl from "../assets/hero/HomeHero-xl.webp";
import homeHeroFull from "../assets/hero/HomeHero-full.webp";

const Home = () => {
  return (
    <main>
      <img
        src={homeHeroSm}
        srcSet={`${homeHeroSm} 320w, ${homeHeroMd} 640w, ${homeHeroLg} 1024w, ${homeHeroXl} 1280w, ${homeHeroFull} 1920w `}
        className='w-full h-72 2xl:h-auto object-cover object-right-bottom'
        alt=''
      />
    </main>
  );
};

export default Home;
