import React from "react";

const ItemsCounter = ({ plusBtnHandler, minusBtnHandler, quantity = 1 }) => {
  return (
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
  );
};

export default ItemsCounter;
