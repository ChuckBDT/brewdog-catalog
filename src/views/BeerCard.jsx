import { useRef, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  useGetSpecificBeerQuery,
  useLikedBeerMutation,
} from '../services/apiSlice';

import Ingredient from '../components/beerDetails/Ingredient';
import hopsIcon from '../assets/beerDetails/ingredientsIcons/hops.png';
import maltIcon from '../assets/beerDetails/ingredientsIcons/malt.png';
import yeastIcon from '../assets/beerDetails/ingredientsIcons/yeast.png';
import mashIcon from '../assets/beerDetails/methodIcons/mash.png';
import fermentationIcon from '../assets/beerDetails/methodIcons/fermentation.png';
import twistIcon from '../assets/beerDetails/methodIcons/twist.png';
import Caracteristic from '../components/beerDetails/Caracteristic';
import FoodPairing from '../components/beerDetails/FoodPairing';

const BeerCard = () => {
  const [beer, setBeer] = useState(null);
  const [skipApiCall, setSkipApiCall] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const imgRef = useRef(null);

  // Call to get specific beer, blocked
  const { data, isLoading, isError, error } = useGetSpecificBeerQuery(id, {
    skip: skipApiCall,
  });

  // Call to send liked beer
  const [likedBeer, { isLoading: likedBeerLoading, isError: likedBeerError }] =
    useLikedBeerMutation();

  const handleLikeBeer = (id, name) => {
    console.log('Beer liked');
    likedBeer({ id, name });

    if (likedBeerError) {
      console.log('ERREUR');
    }
  };

  // Searching for beer data in the location, if it isn't found the API is called
  useEffect(() => {
    if (location.state) {
      const { beer } = location.state;
      setBeer(beer);
    } else {
      setSkipApiCall(false);
      console.log(isLoading, isError);
      setBeer(data);
    }
    console.log(beer);
  }, [location.pathname, beer, data]);

  // Setting height and width of the beer image to fit in the header
  useEffect(() => {
    const sourceElement = sourceRef.current;
    const targetElement = targetRef.current;
    const imgElement = imgRef.current;

    if (sourceElement && targetElement) {
      const sourceHeight = sourceElement.getBoundingClientRect().height;
      const imgHeight = imgElement.naturalHeight;
      const imgWidth = imgElement.naturalWidth;
      targetElement.style.height = `${sourceHeight}px`;
      targetElement.style.width = `${(sourceHeight * imgWidth) / imgHeight}px`;
    }
  }, [beer]);

  if (isLoading) {
    return (
      <main className="max-w-screen-xl mx-auto w-full h-full animate-pulse"></main>
    );
  }

  if (isError) {
    return (
      <main className="max-w-screen-xl mx-auto w-full h-full">
        {JSON.stringify(error.data)}
      </main>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto w-full flex flex-col py-10 h-fit">
      {beer && (
        <>
          <header className="col-span-3 mb-6 flex gap-x-4 w-full">
            <div ref={sourceRef} className="h-fit w-full">
              <h1
                className="font-bold text-4xl mb-2"
                onClick={() => {
                  handleLikeBeer(beer.id, beer.name);
                }}
              >
                {beer.name}
              </h1>
              <h2 className="font-bold text-2xl mb-4 italic">{beer.tagline}</h2>
              <p className="font-light text-lg text-justify">
                {beer.description}
              </p>
            </div>
            <div ref={targetRef} className="">
              <img
                ref={imgRef}
                src={beer.image_url}
                alt={beer.name}
                className="object-contain h-full w-full"
              />
            </div>
          </header>
          <div className="flex gap-x-10 justify-between w-full ">
            <div className="w-1/3">
              <div className="flex flex-col gap-y-2 mb-6">
                <h3 className="font-bold">Ingredients</h3>
                <Ingredient
                  ingredient={beer.ingredients.hops}
                  icon={hopsIcon}
                />
                <Ingredient
                  ingredient={beer.ingredients.malt}
                  icon={maltIcon}
                />
                <Ingredient
                  ingredient={beer.ingredients.yeast}
                  icon={yeastIcon}
                />
              </div>
              <div className="mb-2">
                <h3 className="font-bold">Brewer's tips</h3>
                <p className="text-xs text-justify">{beer.brewers_tips}</p>
              </div>
              <div>
                <h3 className="font-bold">More informations :</h3>
                <ul className="text-xs text-justify">
                  <li>
                    {' '}
                    Boil volume : {beer.boil_volume.value}{' '}
                    {beer.boil_volume.unit}
                  </li>
                  <li>
                    Volume : {beer.volume.value} {beer.volume.unit}
                  </li>
                  <li>Target FG : {beer.target_fg}</li>
                  <li>Target OG : {beer.target_og}</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col w-full ">
              <div className="flex w-full gap-x-4 mb-6">
                <div className="flex flex-col w-1/2 justify-between gap-y-2 ">
                  <h3 className="font-bold">Method</h3>
                  <Ingredient
                    ingredient={`Fermentation :
                        ${beer.method.fermentation.temp.value}°C
                    `}
                    icon={fermentationIcon}
                  />
                  <Ingredient
                    ingredient={`Mash : ${beer.method.mash_temp[0].duration} minutes at
                      ${beer.method.mash_temp[0].temp.value}°C`}
                    icon={mashIcon}
                  />
                  {beer.method.twist && (
                    <Ingredient
                      ingredient={`Twist : ${beer.method.twist}`}
                      icon={twistIcon}
                    />
                  )}
                </div>
                <div className="flex flex-col  w-full gap-y-2 justify-between">
                  <h3 className="font-bold">Caracteristics</h3>
                  <Caracteristic
                    name="IBU"
                    min={1}
                    max={150}
                    value={beer.ibu}
                  />
                  <Caracteristic
                    name="EBC"
                    min={1}
                    max={300}
                    value={beer.ebc}
                  />
                  <Caracteristic
                    name="ABV"
                    min={0}
                    max={100}
                    value={beer.abv}
                  />
                  <Caracteristic
                    name="SRM"
                    min={0}
                    max={100}
                    value={beer.srm}
                  />
                  <Caracteristic name="PH" min={0} max={14} value={beer.ph} />
                  <Caracteristic
                    name="ATT"
                    min={0}
                    max={100}
                    value={beer.attenuation_level}
                  />
                </div>
              </div>
              <div className="gap-y-2 flex flex-col flex-1 ">
                <h3 className="font-bold">Goes well with</h3>
                <div className="flex gap-x-6 h-full">
                  {beer.food_pairing.map((food) => (
                    <FoodPairing
                      key={beer.food_pairing.indexOf(food)}
                      food={food}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BeerCard;
