import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ClickedItemsCard from "./Ui/ClickedItemsCard";

const Cart = () => {
  const { clickedItems, setClickedItems } = useOutletContext();
  const { subtotal, setSubtotal } = useOutletContext();

  const [total, setTotal] = useState(0);

  console.log("hello", clickedItems);

  console.log("sub", subtotal);

  useEffect(() => {
    let sub = 0;
    clickedItems.map((item) => (sub = sub + item.price));
    setSubtotal(sub);
  }, [clickedItems, setSubtotal]);

  const deliveryCharge = clickedItems.length * 7;
  return (
    <section className="mb-8">
      <div className="w-full max-w-7xl  lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black bg-fuchsia-400 p-8 text-white">
          Shopping Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">
              Delivery Charge
            </span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>
        <div>
          {clickedItems.map((item) => (
            <ClickedItemsCard
              key={item.id}
              img={item.img}
              price={item.price}
              title={item.title}
              setSubtotal={setSubtotal}
              total={setTotal}
              setTotal={setTotal}
              setClickedItems={setClickedItems}
              clickedItems={clickedItems}
            />
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${subtotal}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Delivery Charge
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${deliveryCharge}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-medium text-2xl leading-9  text-fuchsia-500">
              ${subtotal + deliveryCharge}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-fuchsia-300 justify-center transition-all duration-500 hover:bg-fuchsia-500 ">
            <span className="px-2 font-semibold text-lg leading-8 text-white ">
              Add Coupon Code
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                stroke="#4F46E5"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-fuchsia-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-fuchsia-700">
            Continue to Payment
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
