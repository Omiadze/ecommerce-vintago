import React, { useState } from 'react';

import Item1 from "./Assets/Shopping.jpg";
import Item2 from "./Assets/asian-woman-using-the-smart-mobile-phone-for-check-online-shopping-order-is-completed-with-clothes-beside-the-glassess-in-store-shop-with-happy-action-at-department-center-961515078-d885f0506450479c9efb38d9ddf1ed58.jpg";
import Item3 from "./Assets/shopping-in-san-francisco-scaled.jpg";

const Home = () => {
  const img = [Item1, Item2, Item3];
  const [indexOfImg, setIndexOfImg] = useState(0);

  const nextImage = () => {
    setIndexOfImg((prevIndex) => (prevIndex + 1) % img.length);
  };

  const prevImage = () => {
    setIndexOfImg((prevIndex) => (prevIndex - 1 + img.length) % img.length);
  };

  return (
    <div className='overflow-x-hidden flex justify-center items-center relative w-screen h-screen'>
      <svg
        onClick={prevImage}
        className='absolute left-4 cursor-pointer z-10'
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="black"
          strokeWidth="1.00088"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 8.25C12.6879 9.8121 11.8121 10.6879 10.25 12.25L14.25 16.25"
          stroke="black"
          strokeWidth="1.00088"
          strokeLinejoin="round"
        />
      </svg>

      <img className='object-cover w-full h-full' src={img[indexOfImg]} alt="Slideshow" />

      <svg
        onClick={nextImage}
        className='absolute right-4 cursor-pointer z-10'
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="black"
          strokeWidth="1.00088"
          strokeLinejoin="round"
        />
        <path
          d="M10.25 8.25C11.8121 9.8121 12.6879 10.6879 14.25 12.25L10.25 16.25"
          stroke="black"
          strokeWidth="1.00088"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Home;