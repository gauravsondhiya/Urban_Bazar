import React, { useEffect, useState, useContext } from "react";
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
  const dispatch = useDispatch();
  const { dataget } = useContext(DataContext) || [];
  const [passingData, setPassingData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataget.length) {
      setPassingData(dataget);
    }
  }, [dataget]);

  let handleAddToCart = (value) => {
    dispatch(addItem(value));
  };

  let filterByCategory = (value) => {
    if (value === "all") {
      setPassingData(dataget);
    } else {
      const filteredData = dataget.filter((e) => e.category === value);
      setPassingData(filteredData);
    }
  };

  Fetch();

  return (dataget.length == "") ? <Shimmer /> : (
    <>
      <Slider />
      <h3 className="text-left text-2xl m-3 font-bold">Categories</h3>
      <div className="flex border border-box border-black m-5 p-5 justify-around text-2xl font-bold underline underline-offset-1">
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
        <div className="  ">
          <div className="grid grid-cols-5 gap-10  text-center ">
            {passingData.map((item) => (
              <div key={item.id} className=" flex flex-col justify-center h-[400px] m-2 border border-box border-red-300 leading-normal rounded-lg">
                <Link to={`/Info/${item.id}/${item.title}`}>
                  <div className="h-[200px] w-[100%]">
                    <img className="max-h-full w-full" src={item.images[0]} alt="product" />
                    </div>
                  <div className="h-[20%] text-xl font-semibold"> 
                    <h1>{`${item.title}`}</h1>
                    </div>
                  <div className="h-[10%]  text-xl font-semibold">
                    <p>{`$. ${item.price}`}</p>
                    </div>
                  <div className="h-[10%] ">
                    <button className="border border-box border-blue-400 p-3 font-semibold rounded-lg" onClick={() => handleAddToCart(item)}>
                      Add to cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      
    </>
  );
};

export default Home;
