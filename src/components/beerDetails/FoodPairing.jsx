import React from 'react';
import food1 from '../../assets/beerDetails/foodPairings/1.webp';

const FoodPairing = ({ food }) => {
  return (
    <div className="relative w-full flex-1 rounded-md overflow-hidden">
      <img
        src={food1}
        alt="food1"
        className="absolute top-0 left-0 object-cover h-full w-full"
      />
      <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-opacity duration-150 text-white rounded-md text-center text-xs p-2">
        {food}
      </div>
    </div>
  );
};

export default FoodPairing;
