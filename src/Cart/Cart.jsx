import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../../Cart/CartSlice";
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
    if (cartlength > 0) {
      navigate("/thankyou", { state: { carttotal, cartlength } });
    }

  };

  return (
    <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 ">
      <div className="sm: col-span-9">
        <div className="font-semibold flex justify-around border borer-box border-black p-3 text-2xl m-3 rounded-lg ">
          <div className="">
            <h2>Your Cart</h2>
          </div>
          <div>
            <button className=" rounded-lg  m-auto w-[130px] h-[40px] border border-black hover:bg-red-400 " onClick={alldelete}>Clear Cart</button>
          </div>
        </div>
        <div className="">
          {cart.map((e) => (
            <div className="grid gap-2 sm:grid-cols-12  m-3  border  border-black text-3xl text-center rounded-xl" key={e.id}>
              <div className="flex justify-center sm:col-span-4">
                <img className="h-[200px]" src={e.images[0]} alt="logo" />
              </div>
              <div className=" sm:col-span-4 m-auto">
                <p className="">{e.title}</p>
              </div>
              <div className=" sm:col-span-2 m-auto">
                <h5>{`$ ${e.price}`}</h5>
              </div>
              <div className="border border-black  sm:col-span-2 m-auto rounded-lg sm:w-[150px] hover:bg-red-400 ">
                <button onClick={() => remove(e.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-black sm:col-span-3 m-2 text-center text-3xl  leading-loose rounded-xl">
        <div><h3 className="font-bold underline underline-offset-2">Order Summary</h3></div>
        <div> <h3>{`Total Amount: $ ${Math.ceil(carttotal)}`}</h3></div>
        <div> <p>Shipping is Free for you</p> </div>
        <div> <button className="border  border-black rounded-xl w-[150px] hover:bg-red-400" onClick={checkout}>CheckOut</button></div>

      </div>
    </div>
  );
};

export default Cart;
