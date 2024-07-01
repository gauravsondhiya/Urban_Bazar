import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../../Cart/CartSlice";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [carttotal, setcarttotal] = useState(0);
  
  const alldelete = () => {
    dispatch(clearCart());
  };
  
  const remove = (id) => {
    dispatch(removeItem(id));
  };
  
  useEffect(() => {

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setcarttotal(total);
  }, [cart]);
  
  const navigate = useNavigate();

  const checkout = () => {
    const cartlength = cart.length;
    if(cartlength>0){
      navigate("/thankyou", { state: { carttotal, cartlength } });
    }
   
  };

  return (
    <div className="cartmainbox">
      <div className="cartbox1">
        <div className="carta">
          <div>
            <h2>Your Cart</h2>
          </div>
          <div>
            <button onClick={alldelete}>Clear Cart</button>
          </div>
        </div>
        <div className="cartboxb">
          {cart.map((e) => (
            <div className="cartvalues" key={e.id}>
              <div>
                <img className="cartvaluesimg" src={e.images[0]} alt="logo" />
              </div>
              <div className="titlevalue">
                <p>{e.title}</p>
              </div>
              <div>
                <h5>{`$ ${e.price}`}</h5>
              </div>
              <div>
                <button onClick={() => remove(e.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cartbox2">
        <h3>Order Summary</h3>
        <hr />
        <h3>{`Total Amount: $ ${Math.ceil(carttotal)}`}</h3>
        <p>Shipping is Free for you</p>
        <button onClick={checkout}>CheckOut</button>
       
      </div>
    </div>
  );
};

export default Cart;
