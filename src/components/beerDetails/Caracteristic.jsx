import React from 'react';

const Caracteristic = ({ name, min, max, value }) => {
  return (
    <div>
      {name} : {value}/{max}
    </div>
  );
};

export default Caracteristic;
