import React, { useContext, useState, useEffect } from "react";
import DataContext from "../Constdata/DataContext";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { useNavigate } from "react-router-dom";
import "./Info.css";
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
    <div className="maininfobox">
      <div className="maininfobox1">
        {valuefilter.map((e) => (
          <img src={e.images} alt="logo" />
        ))}
      </div>
      <div className="maininfobox2">
        <div>
          {valuefilter.map((e) => (
            <>
              <div key={e.id} className="information">
                <div>
                  {" "}
                  <h2>{e.title}</h2>
                </div>
                <div>
                  <p>{e.description}</p>
                </div>
                <div>
                  {" "}
                  <h4>{`Category : ${e.category}`}</h4>
                </div>
                <div>
                  <h4>{`Price :$ ${e.price}`}</h4>
                </div>
                <div>
                  <h4>{`Rating :${e.rating}`}</h4>
                </div>
                <div>
                  <p>{`Stocks : ${e.stock}`}</p>
                </div>
                <div>
                  <p>{`Brand ${e.brand}`}</p>
                </div>
                <div>
                  {" "}
                  <p>{`warrantyInformation :${e.warrantyInformation}`}</p>
                </div>
                <div>
                  <button className="cartbutton" onClick={add (e)}>ADD TO CART</button>
                </div>
                        <h5>Reviews</h5>
                <div>
                  {e.reviews.map((e, index) => (
                    <>
                      <div key={index} className="comments">
                        <div>{`User ${index + 1}| Name :${e.reviewerName}`}</div>
                        <div>{`Email:${e.reviewerEmail}`}</div>

                        <div>{`Rating :${e.rating}`}</div>
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
