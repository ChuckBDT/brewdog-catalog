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
    <section className="max-w-screen-xl w-full flex mx-auto py-10">
      <section className="">
        {beersList.map((beer) => (
          <Link to={`/beers/${beer.id}`} state={{ beer }} key={beer.id}>
            <p key={beer.id}>{beer.name}</p>
          </Link>
        ))}
      </section>
      <Link to={`/beers/1`}>
        <p>Bière Test</p>
      </Link>
    </section>
  );
};

export default Catalog;
