import React, { useEffect, useState } from 'react';
import { useGetBeersListQuery } from '../services/apiSlice';
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
  const [page, setPage] = useState(1);
  const [pagin, setPagin] = useState(20);
  const { data, isLoading, isError } = useGetBeersListQuery({
    page,
    pagin,
  });
  const [lastData, setLastData] = useState(false);
  const [beersList, setBeersList] = useState([]);

  const getNextData = () => {
    if (beersList.length === pagin) {
      setPage((prevstate) => prevstate + 1);
    } else {
      setLastData(true);
    }
  };

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
        getNextData={getNextData}
        lastData={lastData}
      />
    </section>
  );
};

export default Catalog;
