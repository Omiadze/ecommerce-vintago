import React from "react";
import { useState } from "react";

const ClickedItemsCard = ({
  img,
  price,
  title,
  total,
  setTotal,
  setSubtotal,
}) => {
  const deliveryprice = 7;
  const [quantity, setQuantity] = useState(1);

  const plusBtnHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotal(price * quantity + deliveryprice);
    setSubtotal((prevSub) => prevSub + price);
  };

  const minusBtnHandler = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setTotal(price * quantity + deliveryprice);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box">
          <img src={img} alt={title} className="xl:w-[140px]" />
        </div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
            {title}
          </h5>

          <h6 className="font-medium text-lg leading-8 text-fuchsia-500  max-[550px]:text-center">
            {price * quantity}
          </h6>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
          {deliveryprice}{" "}
          <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
            (Delivery Charge)
          </span>
        </h6>
        <div className="flex items-center w-full mx-auto justify-center">
          <button
            onClick={minusBtnHandler}
            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
          >
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M16.5 11H5.5"
                stroke=""
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <path
                d="M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <path
                d="M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <input
            type="text"
            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
            value={quantity}
            readOnly
          />
          <button
            onClick={plusBtnHandler}
            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
          >
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke=""
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <h6 className="text-fuchsia-500 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
          {price * quantity + deliveryprice}
        </h6>
      </div>
    </div>
  );
};

export default ClickedItemsCard;
