import React from 'react'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';import Card from './Ui/Card'



const Shop = () => {
  const { numberOfItems, setNumberOfItems } = useOutletContext();
    const [data, setData] = useState(null)
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
console.log(numberOfItems)

useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?limit=10`
        );

        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
    console.log(data)
  }, []); 

  if(loading) {
    return(
        <h1>Loading...</h1>
    )
  } else {
    return(
        
        <div className='flex flex-wrap ml-40 mr-40 justify-between mt-8'>
            {data?.map((item) => (
                
                <Card key={item.id} title={item.title} price={item.price} img={item.images[0]} numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} />
            ))}
        </div>
        
    )

  }
  
}

export default Shop