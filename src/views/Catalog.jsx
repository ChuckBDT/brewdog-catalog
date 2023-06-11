import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBeer } from '../features/catalog/catalogSlice';

import mockedData from '../data/mockedData';

const Catalog = () => {
  const dispatch = useDispatch();
  let beers;

  // useEffect(() => {
  //   fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20')
  //     .then((res) => res.json())
  //     .then((data) => (beers = data));
  // }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <button
        className="p-6 bg-green-500 rounded-full flex items-center justify-center"
        onClick={() => {
          dispatch(addBeer(mockedData));
        }}
      >
        AJOUTER UNE BIERE
      </button>
    </main>
  );
};

export default Catalog;
