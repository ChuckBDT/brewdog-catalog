import { useRef, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  useGetSpecificBeerQuery,
  useLikedBeerMutation,
} from '../services/apiSlice';

import WhiteSquareTile from '../components/beerDetails/WhiteSquareTile';
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
  const [likedBeer, { isError: likedBeerIsError, error: likedBeerError }] =
    useLikedBeerMutation();

  // Handling like beer heart button click
  const handleLikeBeer = (id, name) => {
    likedBeer({ id, name });
  };

  useEffect(() => {
    if (likedBeerIsError) {
      console.log(likedBeerError.data);
    }
  }, [likedBeerIsError]);

  // Searching for beer data in the location, if it isn't found the API is called
  useEffect(() => {
    if (location.state) {
      const { item } = location.state;
      setBeer(item);
    } else {
      setSkipApiCall(false);
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
      <main className="max-w-screen-xl mx-auto w-full h-full animate-pulse">
        Loading ...
      </main>
    );
  }

  if (isError) {
    return (
      <p className="max-w-screen-xl mx-auto w-full h-full">
        Ooops ! Something went wrong ! You should{' '}
        <Link to="/">go back Home</Link> ({JSON.stringify(error.data)})
      </p>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto w-full flex flex-col py-10 h-fit">
      {beer && (
        <>
          <header className="col-span-3 mb-6 flex gap-x-4 w-full">
            <div ref={sourceRef} className="h-fit w-full">
              <h1 className="font-bold text-4xl mb-2 flex items-center gap-x-3">
                {beer.name}{' '}
                <svg
                  className="hover:fill-green-800 transition-colors active:fill-green-500"
                  onClick={() => {
                    handleLikeBeer(beer.id, beer.name);
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                </svg>
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
              <section className="mb-6">
                <h3 className="font-bold mb-2">Ingredients</h3>
                <div className="flex flex-col gap-y-2 justify-between">
                  <WhiteSquareTile
                    data={beer.ingredients.hops}
                    icon={hopsIcon}
                  />
                  <WhiteSquareTile
                    data={beer.ingredients.malt}
                    icon={maltIcon}
                  />
                  <WhiteSquareTile
                    data={beer.ingredients.yeast}
                    icon={yeastIcon}
                  />
                </div>
              </section>
              <section className="mb-2">
                <h3 className="font-bold mb-1">Brewer's tips</h3>
                <p className="text-xs text-justify">{beer.brewers_tips}</p>
              </section>
              <section>
                <h3 className="font-bold mb-1">More informations :</h3>
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
              </section>
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex w-full gap-x-4 mb-6">
                <section className=" w-1/2 h-full flex flex-col">
                  <h3 className="font-bold mb-2">Method</h3>
                  <div className="flex flex-col flex-1 justify-between gap-y-2">
                    <WhiteSquareTile
                      data={`Fermentation :
                        ${beer.method.fermentation.temp.value}°C
                    `}
                      icon={fermentationIcon}
                    />
                    <WhiteSquareTile
                      data={`Mash : ${beer.method.mash_temp[0].duration} minutes at
                      ${beer.method.mash_temp[0].temp.value}°C`}
                      icon={mashIcon}
                    />
                    {beer.method.twist && (
                      <WhiteSquareTile
                        data={`Twist : ${beer.method.twist}`}
                        icon={twistIcon}
                      />
                    )}
                  </div>
                </section>
                <section className="w-full h-full flex flex-col">
                  <h3 className="font-bold mb-2">Caracteristics</h3>
                  <div className="flex flex-col flex-1 justify-between gap-y-2">
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
                </section>
              </div>
              <aside className="flex flex-col flex-1">
                <h3 className="font-bold mb-2">Goes well with</h3>
                <div className="flex gap-x-12 h-full">
                  {beer.food_pairing.map((food) => (
                    <FoodPairing
                      key={beer.food_pairing.indexOf(food)}
                      food={food}
                    />
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BeerCard;
