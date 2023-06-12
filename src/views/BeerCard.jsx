import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useGetSpecificBeerQuery } from '../services/apiSlice';

const BeerCard = () => {
  const location = useLocation();
  const { id } = useParams();
  const [beer, setBeer] = useState();

  const { data, isLoading, isError } = useGetSpecificBeerQuery(id, {
    skip: !!location.state,
  });

  useEffect(() => {
    if (!location.state) {
      setBeer(data);
    } else {
      setBeer(location.state.beer);
    }
  }, [data]);

  return <div>{beer ? <p>{beer.name}</p> : <p>Loading</p>}</div>;
};

export default BeerCard;
