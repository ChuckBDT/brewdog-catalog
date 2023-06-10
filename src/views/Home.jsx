import React from "react";
import { Link } from "react-router-dom";

import homeDefault from "../assets/hero/HomeHero.jpg";
import homeHeroFull from "../assets/hero/HomeHero-full.webp";

const Home = () => {
  return (
    <main>
      <section className='hero-section relative flex justify-center items-center bg-black'>
        <img
          src={homeDefault}
          srcSet={`${homeHeroFull}`}
          className='w-full h-72 object-cover object-top opacity-50 sm:opacity-100'
          alt=''
        />
        <div className='absolute h-fit w-48 sm:left-[10%] flex justify-center flex-col items-center'>
          <h1 className='font-bold text-2xl text-white sm:text-black pb-6 text-center'>
            Wanna drink a good'ol beer ?
          </h1>
          <Link to='/catalog'>
            <button className='bg-white transition duration-300 ease-out sm:bg-black sm:border-2 sm:border-black sm:hover:bg-transparent sm:hover:text-black sm:text-white py-2 px-4 rounded-3xl'>
              Let's go !
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
