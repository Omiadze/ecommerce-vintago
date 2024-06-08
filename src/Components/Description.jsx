import React from "react";
import { useLocation } from "react-router-dom";
import ItemsCounter from "./Ui/ItemsCounter";

const Description = () => {
  const location = useLocation();
  const {
    // id,
    title,
    img,
    price,
    description,
    // clickedItems,
    // numberOfItems,
    // setNumberOfItems,
    // setClickedItems,
  } = location.state;

  // const Btn = () => {
  //   if (!clickedItems.some((clickedItem) => clickedItem.id === id)) {
  //     setNumberOfItems(numberOfItems + 1);
  //     setClickedItems([...clickedItems, { id, title, price, img }]);
  //   }
  // };
  return (
    <div className=" bg-white rounded-lg shadow-lg  dark:bg-gray-700 flex ml-24 mr-24 mt-4 items-center">
      <div className="w-1/2">
        <img className="object-cover" src={img} alt={title} />
      </div>
      <div className="p-4 flex flex-col items-start">
        <div className="">
          <h2 className=" mb-20 text-left text-xl font-semibold text-fuchsia-500 dark:text-gray-50">
            {title}
          </h2>
          <p className="mb-20 text-left text-gray-700 dark:text-gray-400 mt-2">
            {description}
          </p>
          <p className="mb-20 text-gray-900 dark:text-gray-100 mt-4 text-left">
            Price: ${price}
          </p>
        </div>
        <div className="flex gap-20 items-center justify-center">
          <ItemsCounter />
          <button
            // onClick={Btn}
            className=" w-64  py-4 px-8 bg-fuchsia-500 text-white font-semibold rounded-lg hover:bg-fuchsia-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
