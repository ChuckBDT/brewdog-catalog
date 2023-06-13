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
    <main className="max-w-screen-2xl mx-auto p-10 bg-gray-100">
      {beersList.map((beer) => (
        <Link to={`/beers/${beer.id}`} state={{ beer }} key={beer.id}>
          <p key={beer.id}>{beer.name}</p>
        </Link>
      ))}
    </main>
  );
};

export default Catalog;
