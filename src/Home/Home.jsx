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
      <h3 className="text-left text-2xl m-3 font-bold ">Categories</h3>
      <div className="grid gap-2  no-underline  sm:grid-cols-5 sm:border border-black m-5 p-5 sm:justify-around text-2xl font-bold sm:underline underline-offset-1">
        <button className="max-sm:border border-box border-black hover:bg-red-400 rounded-lg"  onClick={() => filterByCategory("all")}>All</button>
        <button className="max-sm:border border-box border-black hover:bg-red-400 rounded-lg" onClick={() => filterByCategory("beauty")}>Beauty</button>
        <button className="max-sm:border border-box border-black hover:bg-red-400 rounded-lg" onClick={() => filterByCategory("fragrances")}>Fragrances</button>
        <button className="max-sm:border border-box border-black hover:bg-red-400 rounded-lg" onClick={() => filterByCategory("furniture")}>Furniture</button>
        <button className="max-sm:border border-box border-black hover:bg-red-400 rounded-lg" onClick={() => filterByCategory("groceries")}>Groceries</button>
      </div>
      <div className="  ">
        <div className="grid grid-cols-2 sm:grid-cols-6 sm:gap-6  text-center ">
          {passingData.map((item) => (
            <div key={item.id} className="  flex flex-col m-3 h-[350px] border border-box border-red-300 rounded-lg">
              {/* <Link className="no space-x-0" to={`/Info/${item.id}/${item.title}`}> */}
                <div className=" h-[50%] flex justify-center ">
                  <img className="w-full  " src={item.images[0]} alt="product" />
                </div>
                <div className="h-[20%] text-xl font-semibold leading-6 ">
                  <h1>{`${item.title}`}</h1>
                </div>
                <div className="h-[15%]  text-xl font-semibold  ">
                  <p>{`$. ${item.price}`}</p>
                </div>
                <div className="h-[10%] ">
                  <button className="border border-box border-red-300 hover:bg-red-400 text-xl p-3 font-bold rounded-lg" onClick={() => handleAddToCart(item)}>
                    Add to cart
                  </button>
                </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Home;
