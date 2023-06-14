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

  return (
    <main className=" bg-gray-50 flex-1 flex max-w-screen-xl mx-auto relative">
      <section className="w-1/5  flex justify-center items-center">
        {data && (
          <img
            src={data.image_url}
            alt={data.name}
            className="object-cover h-96"
          />
        )}
      </section>
      {data ? (
        <section className="w-full  h-fit grid grid-cols-2 p-10 gap-x-4">
          <header className="col-span-2 mb-6 h-fit">
            <h1 className="font-bold text-4xl mb-2">{data.name}</h1>
            <h2 className="font-bold text-2xl mb-4 italic">{data.tagline}</h2>
            <p className="font-light text-lg ">{data.description}</p>
          </header>
          <div>
            <div className="flex flex-col gap-y-2 mb-6">
              <h3 className="font-bold">Ingredients</h3>
              <Ingredient ingredient={data.ingredients.hops} icon={hopsIcon} />
              <Ingredient ingredient={data.ingredients.malt} icon={maltIcon} />
              <Ingredient
                ingredient={data.ingredients.yeast}
                icon={yeastIcon}
              />
            </div>
            <div>
              <h3 className="font-bold">Method</h3>
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
              {data.method.twist && (
                <p className="text-xs">
                  Twist :<span> {data.method.twist}</span>
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="gap-y-2 flex flex-col mb-6">
              <h3 className="font-bold">Caracteristics</h3>
              <Caracteristic name="IBU" min={1} max={150} value={data.ibu} />
              <Caracteristic name="EBC" min={1} max={300} value={data.ebc} />
              <Caracteristic name="ABV" min={0} max={100} value={data.abv} />
              <Caracteristic name="PH" min={0} max={14} value={data.ph} />
              <Caracteristic
                name="ATT"
                min={0}
                max={100}
                value={data.attenuation_level}
              />
            </div>
            <div className="gap-y-2 flex flex-col flex-1 ">
              <h3 className="font-bold">Goes well with</h3>
              <div className="flex gap-x-2 h-full">
                {data.food_pairing.map((food) => (
                  <FoodPairing
                    key={data.food_pairing.indexOf(food)}
                    food={food}
                  />
                ))}
              </div>
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
