import React, { useEffect, useState } from "react";
import "./Home.css";
import Shimmer from "../Shimmer/Shimmer";
import Infopage from "./Infopage";
import Slider from "./Slider";

const Home = () => {
  const [data, setData] = useState([]);
  const [passingData, setPassingData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) { // Only update state if the component is still mounted
          setData(data.products);
          setPassingData(data.products); // Initially show all products
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.error("Error fetching data:", error);
        }
      });

    return () => {
      isMounted = false; // Cleanup function sets the flag to false
    };
  }, []);

  const filterByCategory = (category) => {
    if (category === "all") {
      setPassingData(data);
    } else {
      const filteredData = data.filter((item) => item.category === category);
      setPassingData(filteredData);
    }
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    // Additional logic to handle carting can go here
  };

  return passingData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <Slider/>
    <br/>
      <div className="homealign">
        <div className="mainproductbox">
          <div className="boxmain">
            {passingData.map((item) => (
              <div key={item.id} className="box">
                <img src={item.images[0]} alt="product" />
                <h1>{`${item.title} ${item.id}`}</h1>
                <p>{item.price}</p>
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>
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
      {selectedProduct && <Infopage values={[selectedProduct]} />}
    </>
  );
};

export default Home;
