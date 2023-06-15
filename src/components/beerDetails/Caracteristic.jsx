import React, { useEffect, useState } from 'react';

const Caracteristic = ({ name, min, max, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (max === 100) {
      setProgress(value);
    } else {
      setProgress((value * 100) / max);
    }
  }, []);

  return (
    <div>
      <div className="flex w-full justify-between items-center text-sm">
        <p className="text-gray-400">{name}</p>
        <p>
          {value}
          <span className="text-gray-400">/{max}</span>
        </p>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 bg-gray-300 w-full h-1 rounded-full"></div>
        <div
          style={{ width: `${progress}%` }}
          className="absolute top-0 left-0 bg-green-900 h-1 rounded-full transition-width duration-500 max-w-full"
        ></div>
      </div>
    </div>
  );
};

export default Caracteristic;
