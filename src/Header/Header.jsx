import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { useSelector } from "react-redux";
const Header = () => {

  const { isAuth, logout } = useContext(AuthContext);

  let navigate = useNavigate();

  let loginclickme = () => {
    if (isAuth) {
      navigate("/Login")
      logout()

    } else {
      navigate("/Login");
    }
  };

  let sigupclickme = () => {
    navigate("/Signup")
  }
  const cartitem = useSelector((store) => store.cart.items)
  return (
    <div className="flex  justify-around m-2 border border-box border-black p-5 text-2xl rounded-xl">
      <div className="font-bold text-3xl " >
        <Link  to="/">Urban Bazaar</Link>
      </div>
   
      <div className="flex gap-5 ">
        <input className="border border-black h-10 w-[450px] text-center rounded-md" placeholder="What are you looking for?" />
        <button className="border border-black h-9 w-[100px] rounded-lg">Search</button>
      </div>
      <div className="flex gap-10 underline underline-offset-2  m-2">
        <Link to="">Home</Link>
        <Link to="/Cart">{`Cart:${cartitem.length}`}</Link>
        <button  onClick={loginclickme}>{isAuth ? "Logout" : "Login"}</button>
        <button  onClick={sigupclickme}>Signup</button>
        {/* <Link to="/Signup">Signup</Link>
         <Link to="/Login">Login</Link>  */}
        
      </div>
     
    </div>
  );
};

export default Header;
