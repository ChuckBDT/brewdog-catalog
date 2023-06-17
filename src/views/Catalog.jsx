import React, { useEffect, useState } from 'react';
import { useGetBeersListQuery } from '../services/apiSlice';
import { Link } from 'react-router-dom';
import InfiniteScrollTable from '../components/catalog/InfiniteScrollTable';

const headOrder = {
  name: 'Name',
  tagline: 'Tag line',
  first_brewed: 'First brewed',
  ibu: 'IBU',
  ebc: 'EBC',
  abv: 'ABV',
  srm: 'SRM',
  ph: 'PH',
};

const Catalog = () => {
  const [callPage, setCallPage] = useState(1);
  const { data, isLoading, isError } = useGetBeersListQuery({
    page: callPage,
    pagin: 20,
  });
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    if (data) {
      setBeersList(data);
    }
  }, [data]);

  return (
    <section className="max-w-screen-xl w-full flex mx-auto py-10">
      <InfiniteScrollTable
        data={beersList}
        headOrder={headOrder}
        isLoading={isLoading}
      />
    </section>
  );
};

export default Catalog;
