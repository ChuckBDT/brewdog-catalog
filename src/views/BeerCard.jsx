import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  const { beer } = useSelector((state) => state);
  const data = beer[0];
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const imgRef = useRef(null);

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
  }, [data]);

  return (
    <section className="max-w-screen-xl mx-auto w-full flex flex-col py-10 h-fit">
      {data && (
        <>
          <header className="col-span-3 mb-6 flex gap-x-4 w-full">
            <div ref={sourceRef} className="h-fit w-full">
              <h1 className="font-bold text-4xl mb-2">{data.name}</h1>
              <h2 className="font-bold text-2xl mb-4 italic">{data.tagline}</h2>
              <p className="font-light text-lg text-justify">
                {data.description}
              </p>
            </div>
            <div ref={targetRef} className="">
              <img
                ref={imgRef}
                src={data.image_url}
                alt={data.name}
                className="object-contain h-full w-full"
              />
            </div>
          </header>
          <div className="flex gap-x-10 justify-between w-full ">
            <div className="w-1/3">
              <div className="flex flex-col gap-y-2 mb-6">
                <h3 className="font-bold">Ingredients</h3>
                <Ingredient
                  ingredient={data.ingredients.hops}
                  icon={hopsIcon}
                />
                <Ingredient
                  ingredient={data.ingredients.malt}
                  icon={maltIcon}
                />
                <Ingredient
                  ingredient={data.ingredients.yeast}
                  icon={yeastIcon}
                />
              </div>
              <div className="mb-2">
                <h3 className="font-bold">Brewer's tips</h3>
                <p className="text-xs text-justify">{data.brewers_tips}</p>
              </div>
              <div>
                <h3 className="font-bold">More informations :</h3>
                <ul className="text-xs text-justify">
                  <li>
                    {' '}
                    Boil volume : {data.boil_volume.value}{' '}
                    {data.boil_volume.unit}
                  </li>
                  <li>
                    Volume : {data.volume.value} {data.volume.unit}
                  </li>
                  <li>Target FG : {data.target_fg}</li>
                  <li>Target OG : {data.target_og}</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col w-full ">
              <div className="flex w-full gap-x-4 mb-6">
                <div className="flex flex-col w-1/2 justify-between gap-y-2 ">
                  <h3 className="font-bold">Method</h3>
                  <Ingredient
                    ingredient={`Fermentation :
                        ${data.method.fermentation.temp.value}°C
                    `}
                    icon={fermentationIcon}
                  />
                  <Ingredient
                    ingredient={`Mash : ${data.method.mash_temp[0].duration} minutes at
                      ${data.method.mash_temp[0].temp.value}°C`}
                    icon={mashIcon}
                  />
                  {data.method.twist && (
                    <Ingredient
                      ingredient={`Twist : ${data.method.twist}`}
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
                    value={data.ibu}
                  />
                  <Caracteristic
                    name="EBC"
                    min={1}
                    max={300}
                    value={data.ebc}
                  />
                  <Caracteristic
                    name="ABV"
                    min={0}
                    max={100}
                    value={data.abv}
                  />
                  <Caracteristic
                    name="SRM"
                    min={0}
                    max={100}
                    value={data.srm}
                  />
                  <Caracteristic name="PH" min={0} max={14} value={data.ph} />
                  <Caracteristic
                    name="ATT"
                    min={0}
                    max={100}
                    value={data.attenuation_level}
                  />
                </div>
              </div>
              <div className="gap-y-2 flex flex-col flex-1 ">
                <h3 className="font-bold">Goes well with</h3>
                <div className="flex gap-x-6 h-full">
                  {data.food_pairing.map((food) => (
                    <FoodPairing
                      key={data.food_pairing.indexOf(food)}
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
