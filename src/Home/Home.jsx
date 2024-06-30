import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import Shimmer from "../Shimmer/Shimmer";
import Slider from "./Slider";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../Constdata/DataContext";
import Fetch from "../Constdata/Fetchdata";
import CartDataContext from "../Constdata/CartDataContext";
import Infopage from "./Infopage";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Cart/CartSlice";

const Home = () => {
  const dispatch = useDispatch()
  const { dataget, setdataget } = useContext(DataContext) || [];

  const { cartdata, setcartdata } = useContext(CartDataContext) || [];

  const navigate = useNavigate();

  const cart = useSelector((store) => store.cart.items);
  let handleAddToCart = (value) => {
    // setcartdata(value);
    // navigate("/Info/:id/:title");
    dispatch(addItem(value) )
  };

  Fetch();
  return (
    <>
      <Slider />
      <br />
      <div className="homealign">
        <div className="mainproductbox">
          <div className="boxmain">
            {dataget.map((item) => (
              <div key={item.id} className="box">
                <Link to={`/Info/${item.id}/${item.title}`}>
                  <img src={item.images[0]} alt="product" />
                  {/* {item.images.map((e)=>(
                    
                        <img src={e} alt="product" />
                      
                    ))} */}

                  <h1>{`${item.title} ${item.id}`}</h1>
                  <p>{item.price}</p>
                </Link>
                <button onClick={() => handleAddToCart(item)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="categorybox">
          <h3>Categories:</h3>
          <button onClick={() => filterByCategory("all")}>All</button>
          <button onClick={() => filterByCategory("beauty")}>Beauty</button>
          <button onClick={() => filterByCategory("fragrances")}>
            Fragrances
          </button>
          <button onClick={() => filterByCategory("furniture")}>
            Furniture
          </button>
          <button onClick={() => filterByCategory("groceries")}>
            Groceries
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
