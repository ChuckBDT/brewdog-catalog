import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const BeerCard = () => {
  const { beer } = useSelector((state) => state);
  const data = beer[0];

  return (
    <main className="max-w-screen-2xl mx-auto px-6 2xl:px-0 bg-gray-100 h-full flex">
      <section className="w-1/5 bg-blue-100"></section>
      {data ? (
        <section className="w-4/5 bg-red-100 grid grid-cols-2">
          <header className="col-span-2">
            <h1>{data.name}</h1>
            <h2>{data.tagline}</h2>
            <p>{data.description}</p>
          </header>
          <div>
            <p>Ingredients</p>
            <p>Method</p>
          </div>
          <div>
            <p>Caracteristics</p>
            <p>Goes well with</p>
          </div>
        </section>
      ) : (
        <></>
      )}
    </main>
  );
};

export default BeerCard;
