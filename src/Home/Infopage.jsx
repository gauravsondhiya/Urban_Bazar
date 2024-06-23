import React, { useState } from "react";

const Infopage = (props) => {
  let data = props.values || [];
console.log(data)
  return (
    <>
   <div>
    {data.map((e) => (
       <>
         <div key={e.id}>
                <h1>{e.title}</h1>
                <p>{e.description}</p>
                <h3>{e.price}</h3>
                <h4>{e.rating}</h4>
                <h5>{e.stocks}</h5>
              </div>
        </>
     ))}
   </div>
    </>
  );
};

export default Infopage;
