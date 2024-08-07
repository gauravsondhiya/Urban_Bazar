import React, { useContext, useState, useEffect } from "react";
import DataContext from "../Constdata/DataContext";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { useNavigate } from "react-router-dom";
// import "./Info.css";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Cart/CartSlice";
const Infopage = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const { dataget } = useContext(DataContext) || [];
  const { id, title } = useParams();

  const [valuefilter, setvaluefilter] = useState([]);
  // console.log(valuefilter.reviews[0].comment)
  useEffect(() => {
    let value = dataget.filter((e) => {
      return e.id == id && e.title === title;
    });
    console.log(value);
    setvaluefilter(value);
    // if (value.length > 0) {
    //   setvaluefilter(value[0]);
    // }
  }, [dataget, id, title]);
  let add =(e)=>{
    dispatch(addItem(e) )
  }
  return dataget == "" ? (
    navigate("/")
  ) : (
    <div className="flex border border-box border-black">
      <div className=" w-[50%] ">
        {valuefilter.map((e) => (
          <img className="" src={e.images} alt="logo" />
        ))}
      </div>
      <div className="">
        <div>
          {valuefilter.map((e) => (
            <>
              <div key={e.id} className="text-xl my-4 font-medium">
                <div>
                  {" "}
                  <h2 className="text-3xl font-bold ">{e.title}</h2>
                </div>
                <div>
                  <p className="">{`Brand- ${e.brand}`}</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">{`$ ${e.price}`}</h4>
                </div>
                <div>
                  <p className="">{e.description}</p>
                </div>
                <div>
                  {" "}
                  <h4 className="">{`Category : ${e.category}`}</h4>
                </div>
               
                <div>
                  <h4 className="">{`Rating ⭐:${e.rating}`}</h4>
                </div>
                <div>
                  <p>{`Stocks: ${e.stock}`}</p>
                </div>
                
                <div>
                  {" "}
                  <p>{`warrantyInformation: ${e.warrantyInformation}`}</p>
                </div>
                <div>
                  <button className="border border-box border-black bg-red-400 p-3 font-bold rounded-lg my-2" onClick={add (e)}>ADD TO CART</button>
                </div>
                        <h5 className="text-2xl font-bold my-3 ">Reviews & Rating</h5>
                <div>
                  {e.reviews.map((e, index) => (
                    <>
                      <div key={index} className="text-xl my-3 ">
                        <div className="font-semibold">{`User ${index + 1}| ${e.reviewerName}`}</div>
                        <div>{`Email :${e.reviewerEmail}`}</div>
                        <div>{`Rating⭐:${e.rating}`}</div>
                        <div>{`Comment:${e.comment}`}</div>
                        
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infopage;
