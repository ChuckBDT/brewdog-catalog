import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ingredient from '../components/beerDetails/Ingredient';
import hopsIcon from '../assets/beerDetails/ingredientsIcons/hops.png';
import maltIcon from '../assets/beerDetails/ingredientsIcons/malt.png';
import yeastIcon from '../assets/beerDetails/ingredientsIcons/yeast.png';
import Caracteristic from '../components/beerDetails/Caracteristic';
import FoodPairing from '../components/beerDetails/FoodPairing';

const BeerCard = () => {
  const { beer } = useSelector((state) => state);
  const data = beer[0];
  console.log(data);

  return (
    <main className="max-w-screen-2xl mx-auto px-6 2xl:px-0 bg-gray-50 h-full flex">
      <section className="w-1/5"></section>
      {data ? (
        <section className="w-4/5 grid grid-cols-2 p-10 gap-x-4">
          <header className="col-span-2 mb-6">
            <h1 className="font-bold text-4xl mb-2">{data.name}</h1>
            <h2 className="font-bold text-2xl mb-4">{data.tagline}</h2>
            <p className="font-light text-lg">{data.description}</p>
          </header>
          <div>
            <div className="flex flex-col gap-y-2 mb-6">
              <h3>Ingredients</h3>
              <Ingredient ingredient={data.ingredients.hops} icon={hopsIcon} />
              <Ingredient ingredient={data.ingredients.malt} icon={maltIcon} />
              <Ingredient
                ingredient={data.ingredients.yeast}
                icon={yeastIcon}
              />
            </div>
            <div>
              <h3>Method</h3>
              <p className="text-xs">
                Fermentation :
                <span> {data.method.fermentation.temp.value}°C</span>
              </p>
              <p className="text-xs">
                Mash :{' '}
                <span>
                  {data.method.mash_temp[0].duration} minutes at{' '}
                  {data.method.mash_temp[0].temp.value}°C
                </span>
              </p>
              <p className="text-xs">
                Twist :<span> {data.method.twist}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="gap-y-2 flex flex-col mb-6">
              <h3>Caracteristics</h3>
              <Caracteristic name="IBU" min={1} max={150} value={data.ibu} />
              <Caracteristic name="EBC" min={1} max={140} value={data.ebc} />
              <Caracteristic name="ABV" min={0} max={100} value={data.abv} />
              <Caracteristic name="PH" min={0} max={14} value={data.ph} />
              <Caracteristic
                name="ATT"
                min={0}
                max={100}
                value={data.attenuation_level}
              />
            </div>
            <div>
              <h3>Goes well with</h3>
              <FoodPairing />
              <FoodPairing />
              <FoodPairing />
            </div>
          </div>
        </section>
      ) : (
        <section className="w-4/5 bg-red-100 grid grid-cols-2 h-96 animate-pulse"></section>
      )}
    </main>
  );
};

export default BeerCard;
