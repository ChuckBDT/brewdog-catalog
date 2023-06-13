import React, { useEffect, useState } from 'react';
import { useGetBeersListQuery } from '../services/apiSlice';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const { data } = useGetBeersListQuery({ page: 3, pagin: 20 });
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    if (data) {
      setBeersList(data);
    }
  }, [data]);

  return (
    <main className="max-w-screen-2xl mx-auto px-6 2xl:px-0 bg-gray-100">
      {beersList.map((beer) => (
        <Link to={`/beers/${beer.id}`} state={{ beer }} key={beer.id}>
          <p key={beer.id}>{beer.name}</p>
        </Link>
      ))}
      <button className="p-6 bg-green-500 rounded-full flex items-center justify-center">
        AJOUTER UNE BIERE
      </button>
    </main>
  );
};

export default Catalog;
