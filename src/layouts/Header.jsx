import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="mx-auto h-20 px-6 2xl:px-0 max-w-screen-2xl grid grid-cols-3 justify-items-center items-center">
        {
          <NavLink to="/beers" className="text-start w-full ">
            Browse the catalog
          </NavLink>
        }
        {
          <Link to="/">
            <img src={Logo} alt="BrewDog Logo" className="h-12" />
          </Link>
        }
        <a href="https://punkapi.com" className="w-full text-end">
          Punk API
        </a>
      </div>
    </header>
  );
};

export default Header;
