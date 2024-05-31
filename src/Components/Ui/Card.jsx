import React from 'react';

const Card = ({title, price, img, numberOfItems, setNumberOfItems}) => {
  const handleCartBtn = () => {
    setNumberOfItems(numberOfItems + 1)
}

  return (
    
 
  <article className="max-w-sm w-64  bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 mb-4">
    <div>
      <img className="object-cover h-64 w-full" src={img} alt={title}/>
    </div>
    <div className='flex flex-col justify-between'>
    <div className="flex flex-col gap-1 mt-4 px-4">
    <p className=" text-black-800 dark:text-gray-50 text-left">${price}</p>
      <p className=" font-semibold text-gray-800 dark:text-gray-50 text-left">{title}</p>
      
      
    </div>

    

    <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500 ">
      <button onClick={handleCartBtn} className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
        <span className="text-base">Add to Cart</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
    </div>
  </article>


  );
};

export default Card;