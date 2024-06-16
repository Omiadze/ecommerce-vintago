import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  title,
  price,
  img,
  numberOfItems,
  setNumberOfItems,
  item,
  clickedItems,
  setClickedItems,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  const handleCartBtn = () => {
    if (!clickedItems.some((clickedItem) => clickedItem.id === id)) {
      setNumberOfItems(numberOfItems + 1);
      setClickedItems([...clickedItems, { id, title, price, img }]);
    }

    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const itemOnClick = () => {
    navigate("/description", {
      state: {
        title,
        img,
        price,
        description: item.description,
      },
    });
  };

  return (
    <article className="max-w-sm md:w-64 w-40 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 mb-4 flex flex-col justify-between">
      <div onClick={itemOnClick} className="hover:opacity-40 cursor-pointer h-">
        <img
          className="lg:w-[180px] sm:w-[140px] m-auto md:h-[200px] h-[120px]"
          src={img}
          alt={title}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1 mt-4 px-4">
            <p className="text-black-800 dark:text-gray-50 text-left">
              ${price}
            </p>
            <p className="font-semibold text-gray-800 md:text-lg text-sm dark:text-gray-50 text-left">
              {title}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
        <button
          onClick={handleCartBtn}
          className="w-full flex justify-between items-center font-bold cursor-pointer hover:text-fuchsia-300 text-gray-800 dark:text-gray-50"
        >
          <span className="text-base md:block hidden">Add to Cart</span>
          {addedToCart ? (
            <svg
              className="h-6 w-6 text-fuchsia-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
};

export default Card;
