import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart,removeItem } from "../../Cart/CartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  let [cartdata , setcartdata]= useState([])
let alldelete=()=>{
  dispatch(clearCart ())
}
let remove=()=>{
  dispatch(removeItem())
}
  return (
    <div>
      <button onClick={alldelete}>Clear</button>
      
      {
      cart.map((e)=>(
        <div key={e.id}>
         <h1>{e.id +" ."+e.title}</h1>
         <p>{e.price}</p>
         <button onClick={remove}>remove</button>
        </div>
      ))
      
      }</div>
  )
}

export default Cart