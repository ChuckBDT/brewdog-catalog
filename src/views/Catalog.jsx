import React, { useEffect } from "react";

const Catalog = () => {
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=20")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <main className='max-w-screen-2xl mx-auto'> sdfd</main>;
};

export default Catalog;
