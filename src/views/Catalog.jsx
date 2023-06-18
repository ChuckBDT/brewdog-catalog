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
  const [callPage, setCallPage] = useState(1);
  const [pagin, setPagin] = useState(20);
  const { data, isLoading, isError } = useGetBeersListQuery({
    page: callPage,
    pagin,
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
        callPage={callPage}
        pagin={pagin}
        setCallPage={setCallPage}
      />
    </section>
  );
};

export default Catalog;
