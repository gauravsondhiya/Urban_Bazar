import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData,ddataget ,setddataget] = useState([]);
  const [passingData, setPassingData] = useState([]);

  const url = "https://dummyjson.com/products";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          setData(data.products);
          setPassingData(data.products); // Initially show all products
      }

  const filterByCategory = (category) => {
    if (category === "all") {
      setPassingData(data);
    } else {
      const filteredData = data.filter((item) => item.category === category);
      setPassingData(filteredData);
    }
  };

 
  return (
    <div className="homealign">
      <div className="mainproductbox">
        <div className="boxmain">
          {passingData.map((item) => (
            <div key={item.id} className="box">
              <img src={item.images[0]} alt="product" />
              <h1>{`${item.title} ${item.id}`}</h1>
              <p>{item.price}</p>
              <button onClick={() => carting(item)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="categorybox">
        <h3>Categories:</h3>
        <button onClick={() => filterByCategory("all")}>All</button>
        <button onClick={() => filterByCategory("beauty")}>Beauty</button>
        <button onClick={() => filterByCategory("fragrances")}>Fragrances</button>
        <button onClick={() => filterByCategory("furniture")}>Furniture</button>
        <button onClick={() => filterByCategory("groceries")}>Groceries</button>
      </div>
    </div>
  );
};

export default Home;
