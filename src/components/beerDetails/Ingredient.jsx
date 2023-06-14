import React from 'react';

const Ingredient = ({ ingredient, icon }) => {
  console.log(ingredient);
  return (
    <div className="flex items-center h-fit w-full">
      <div className="h-16 w-16 bg-white shadow-md rounded-md mr-2">
        <img src={icon} alt="" className="w-full h-full object-contain p-3" />
      </div>
      <p className="text-xs flex-1 text-justify truncate">
        {typeof ingredient === 'string'
          ? ingredient
          : ingredient.map((el) => (
              <>
                {el.name} : {el.amount.value} {el.amount.unit}
                {el.add ? ` at ${el.add}` : ''},{' '}
              </>
            ))}
      </p>
    </div>
  );
};

export default Ingredient;
