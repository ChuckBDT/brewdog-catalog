import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBeer } from '../features/catalog/catalogSlice';

import mockedData from '../data/mockedData';
import { useGetBeersListQuery } from '../services/apiSlice';

const Catalog = () => {
  const { data } = useGetBeersListQuery({ page: 2, pagin: 20 });
  const dispatch = useDispatch();

  return (
    <main className="max-w-screen-2xl mx-auto">
      <button
        className="p-6 bg-green-500 rounded-full flex items-center justify-center"
        onClick={() => {
          dispatch(addBeer(data));
        }}
      >
        AJOUTER UNE BIERE
      </button>
    </main>
  );
};

export default Catalog;
