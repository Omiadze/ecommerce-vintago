import React from "react";
import { useState } from "react";
import ItemsCounter from "./ItemsCounter";
import { useOutletContext } from "react-router-dom";

const ClickedItemsCard = ({
  img,
  price,
  title,
  total,
  setTotal,
  setSubtotal,
  setClickedItems,
  clickedItems,
}) => {
  const deliveryprice = 7;

  const { numberOfItems, setNumberOfItems } = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  const plusBtnHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotal(price * quantity + deliveryprice);
    setSubtotal((prevSub) => prevSub + price);
  };

  const minusBtnHandler = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setTotal(price * quantity + deliveryprice);
    setSubtotal((prevSub) => (quantity === 1 ? prevSub : prevSub - price));
  };
  const deleteBtnHandler = (itemToBeDeleted) => {
    const newClickedItems = clickedItems.filter(
      (el) => el.title !== itemToBeDeleted
    );
    setClickedItems(newClickedItems);
    setNumberOfItems(numberOfItems - 1);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box">
          <img
            src={img}
            alt={title}
            className="lg:w-[140px] sm:w-[100px] w-[100px]"
          />
        </div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
            {title}
          </h5>

          <h6 className="font-medium text-lg leading-8 text-fuchsia-500  max-[550px]:text-center">
            ${price}
          </h6>
          <button
            onClick={() => deleteBtnHandler(title)}
            className=" w-64  py-2 px-4 bg-fuchsia-500 text-white font-semibold rounded-lg hover:bg-fuchsia-700"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
          ${deliveryprice}{" "}
          <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
            (Delivery Charge)
          </span>
        </h6>
        <ItemsCounter
          plusBtnHandler={plusBtnHandler}
          minusBtnHandler={minusBtnHandler}
          quantity={quantity}
        />
        <h6 className="text-fuchsia-500 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
          ${price * quantity + deliveryprice}
        </h6>
      </div>
    </div>
  );
};

export default ClickedItemsCard;
