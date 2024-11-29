import React, { useEffect, useState } from 'react';
import { useGetBeersListQuery } from '../services/apiSlice';
import InfiniteScrollTable from '../components/catalog/InfiniteScrollTable';
import fakeApi from '../services/fakeApi';

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
  const [pagin, setPagin] = useState({ page: 1, pagin: 20 });
  // const { data, isLoading, isError } = useGetBeersListQuery({
  //   page: pagin.page,
  //   pagin: pagin.pagin,
  // });
  const fakeFetchedData = fakeApi(pagin);
  const [lastData, setLastData] = useState(false);
  const [beersList, setBeersList] = useState([]);

  const getNextData = () => {
    if (beersList.length === pagin.pagin) {
      setPagin({ ...pagin, page: pagin.page + 1 });
    } else {
      setLastData(true);
    }
  };

  useEffect(() => {
    if (fakeFetchedData) {
      setTimeout(()=>{
        setBeersList(fakeFetchedData);
      }, 700)
    }
  }, [fakeFetchedData]);

  return (
    <section className="max-w-screen-xl w-full flex mx-auto py-10">
      <InfiniteScrollTable
        data={beersList}
        headOrder={headOrder}
        getNextData={getNextData}
        lastData={lastData}
      />
    </section>
  );
};

export default Catalog;
