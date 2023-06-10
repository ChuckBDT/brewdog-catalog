import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className='h-20 px-6 sm:px-10 grid grid-cols-3 justify-items-center items-center shadow-md'>
      {
        <NavLink to='/catalog' className='text-start w-full '>
          Browse the catalog
        </NavLink>
      }
      {
        <Link to='/'>
          <img src={Logo} alt='BrewDog Logo' className='h-12' />
        </Link>
      }
      <a href='https://punkapi.com' className='w-full text-end'>
        Punk API
      </a>
    </header>
  );
};

export default Header;
