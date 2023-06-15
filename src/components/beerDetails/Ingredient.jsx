import React from 'react';

const Ingredient = ({ ingredient, icon }) => {
  return (
    <div className="flex h-16 w-full">
      <div className="h-full w-16 bg-white shadow-md rounded-md mr-2">
        <img src={icon} alt="" className="w-full h-full object-contain p-3" />
      </div>
      <div className="flex flex-col justify-center items-start text-xs h-full flex-1 ">
        {typeof ingredient === 'string' ? (
          <p>{ingredient}</p>
        ) : (
          <ul className="h-12 overflow-y-auto w-full">
            {ingredient.map((el) => (
              <li key={ingredient.indexOf(el)}>
                {el.name} : {el.amount.value} {el.amount.unit}
                {el.add ? ` at ${el.add}` : ''}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Ingredient;
