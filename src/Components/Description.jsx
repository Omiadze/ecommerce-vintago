import React from "react";
import { useLocation } from "react-router-dom";
import ItemsCounter from "./Ui/ItemsCounter";

const Description = () => {
  const location = useLocation();
  const { title, img, price, description } = location.state;

  return (
    <div className="bg-white rounded-lg shadow-lg dark:bg-gray-700 flex flex-col md:flex-row mx-4 md:mx-24 mt-4 items-center h-screen md:mt-4 mt-16">
      <div className="w-full md:w-1/3">
        <img className="lg:w-[200px] w-[160px] m-auto" src={img} alt={title} />
      </div>
      <div className="p-4 flex flex-col items-start w-full md:w-1/2">
        <div className="w-full">
          <h2 className="mb-4 text-left text-xl font-semibold text-fuchsia-500 dark:text-gray-50">
            {title}
          </h2>
          <p className="mb-4 text-left text-gray-700 dark:text-gray-400 mt-2">
            {description}
          </p>
          <p className="mb-4 text-gray-900 dark:text-gray-100 mt-4 text-left">
            Price: ${price}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 items-center justify-center w-full">
          <ItemsCounter />
          <button className="w-full md:w-64 py-4 px-8 bg-fuchsia-500 text-white font-semibold rounded-lg hover:bg-fuchsia-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
