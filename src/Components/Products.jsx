import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Ui/Card";

const Shop = () => {
  const { numberOfItems, setNumberOfItems } = useOutletContext();
  const { clickedItems, setClickedItems } = useOutletContext();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(numberOfItems);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);

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
  }, []);
  console.log("data", data);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="flex flex-wrap ml-40 mr-40 justify-between mt-8">
        {data.products?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={parseFloat(item.price.toFixed(1))}
            img={item.images[0]}
            numberOfItems={numberOfItems}
            setNumberOfItems={setNumberOfItems}
            item={item}
            clickedItems={clickedItems}
            setClickedItems={setClickedItems}
          />
        ))}
      </div>
    );
  }
};

export default Shop;
