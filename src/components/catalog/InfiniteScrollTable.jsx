import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const InfiniteScrollTable = ({ data, headOrder, getNextData, lastData }) => {
  const [beers, setBeers] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const observer = useRef();

  const columnsKey = Object.keys(headOrder);

  // Calling the API to get next data if the user
  // sees the last entry in the table
  const lastBeerRef = useCallback(
    (node) => {
      if (loadingData) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getNextData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [data]
  );

  // Setting the loading state to true during the
  // retrieving of the data to avoid infinite loop
  // as the user is already on bottom of the table
  useEffect(() => {
    setLoadingData(true);
    setBeers((prevstate) => [...prevstate, ...data]);
    setLoadingData(false);
  }, [data]);

  return (
    <table className="w-full h-fit">
      <thead className="bg-white h-12 shadow-md sticky top-0 my-8">
        <tr className="whitespace-nowrap">
          {columnsKey.map((head, i) => (
            <th
              key={i}
              className={`text-left px-4 text-stone-500 font-normal ${
                head === 'name' ? 'w-1/4' : head === 'tagline' && 'w-1/3'
              }`}
            >
              {headOrder[head]}
            </th>
          ))}
          <th className="px-4 text-stone-500 font-normal">Link</th>
        </tr>
      </thead>
      <tbody>
        {beers.map((item, index) => {
          // If the beer is the last in the list, ref is added
          // to perform the infinite scroll
          return (
            <tr
              key={index}
              ref={beers.length === index + 1 ? lastBeerRef : null}
              className={
                beers.length !== index + 1 ? 'border-b border-gray-200' : ''
              }
            >
              {columnsKey.map((head, i) => (
                <td key={i} className="px-4 h-10">
                  {item[head]}
                </td>
              ))}
              <td className="px-4 h-full flex justify-center  items-center">
                <Link to={`/beers/${item.id}`} state={{ item }}>
                  <svg
                    className="hover:w-6 hover:h-6 transition-all hover:fill-green-800 active:fill-green-500"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    ></path>
                  </svg>
                </Link>
              </td>
            </tr>
          );
        })}
        {/* Loading data animation */}
        <tr className={`h-10 ${lastData && 'hidden'} `}>
          {columnsKey.map((i) => (
            <td key={i} className="px-4 h-10 animate-pulse">
              <div className="w-full h-full bg-gray-200 rounded-md"></div>
            </td>
          ))}
          <td className="px-4 h-10 flex justify-center animate-pulse items-center">
            <div className="w-full h-full bg-gray-200 rounded-md"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfiniteScrollTable;
