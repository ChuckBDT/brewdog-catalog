import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ingredient from '../components/beerDetails/Ingredient';

const BeerCard = () => {
  const { beer } = useSelector((state) => state);
  const data = beer[0];

  return (
    <main className="max-w-screen-2xl mx-auto px-6 2xl:px-0 bg-gray-100 h-full flex">
      <section className="w-1/5"></section>
      {data ? (
        <section className="w-4/5 grid grid-cols-2 p-10 gap-x-4">
          <header className="col-span-2 mb-6">
            <h1 className="font-bold text-4xl mb-2">{data.name}</h1>
            <h2 className="font-bold text-2xl mb-4">{data.tagline}</h2>
            <p className="font-light text-lg">{data.description}</p>
          </header>
          <div>
            <div className="flex flex-col gap-y-2">
              <h3>Ingredients</h3>
              <Ingredient ingredient={data.ingredients.hops} />
              <Ingredient ingredient={data.ingredients.malt} />
            </div>
            <div>
              <h3>Method</h3>
              <p>
                Fermentation :
                <span> {data.method.fermentation.temp.value}°C</span>
              </p>
              <p>
                Mash temp :{' '}
                <span>
                  {data.method.mash_temp[0].duration} minutes at{' '}
                  {data.method.mash_temp[0].temp.value}°C
                </span>
              </p>
              <p>
                Twist :<span> {data.method.twist}</span>
              </p>
            </div>
          </div>
          <div>
            <p>Caracteristics</p>
            <p>Goes well with</p>
          </div>
        </section>
      ) : (
        <section className="w-4/5 bg-red-100 grid grid-cols-2 h-96 animate-pulse"></section>
      )}
    </main>
  );
};

export default BeerCard;
