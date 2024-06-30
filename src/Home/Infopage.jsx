import React, { useContext, useState, useEffect } from "react";
import DataContext from "../Constdata/DataContext";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import "./Info.css";
import Home from "./Home";


const Infopage = () => {
  const { dataget } = useContext(DataContext) || [];
  const { id, title } = useParams();

  const [valuefilter, setvaluefilter] = useState([]);
      // console.log(valuefilter.reviews[0].comment)
  useEffect(() => {
    let value = dataget.filter((e) => {return e.id == id && e.title === title});
    console.log(value)
    setvaluefilter(value)
    // if (value.length > 0) {
    //   setvaluefilter(value[0]);
    // }
  }, [dataget, id, title]);

  return (
    <div className="maininfobox">
      <div className="maininfobox1">
              {valuefilter.map((e)=>(
                <img src={e.images} alt="logo" />
              ))}
        
      </div>
      <div className="maininfobox2">
        <div>
        {
          valuefilter.map((e)=>(
            <>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <h4>Category : {e.category}</h4>
            <h4>Price :{e.price}</h4>
            <h4>Rating ⭐:{e.rating}</h4>
            <p>Stocks : {e.stock}</p>
            <p>warrantyInformation :{e.warrantyInformation}</p>
            {/* <h3>Reviews</h3>
              {e.reviews.map((e,no)=>(
                <>
                <p>Review {no+1}</p>
              <p>Rating:{e.rating}</p>
              <p>Comment :{e.comment}</p>
              <p>ReviewerName :{e.reviewerName}</p>
              <p>ReviewerEmail :{e.reviewerEmail}</p> 
                </> 
                ))
              } */}
            </>
            ))
        }
 
        </div>
            
      </div>
      
    </div>
  );
};

export default Infopage;



         
          