import React, { useContext, useState } from "react";
import "./Header.css";
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

  let sigupclickme=()=>{
    navigate("/Signup")
  }
  const cartitem = useSelector((store)=> store.cart.items)
  return (
    <div className="main">
      <div className="first">
        <Link to="/">Urban Bazaar</Link>
      </div>
      <div className="searchbar">
        <input placeholder="What are you looking for?" />
        {/* <button></button> */}
      </div>
      <div className="second">
        <Link to="">Home</Link>
        <Link to="/Cart">Cart:{cartitem.length}</Link>
        <button onClick={loginclickme}>{isAuth ? "Logout" : "Login"}</button>
        {/* <button onClick={sigupclickme}>Signup</button> */}
        <Link to="/Signup">Signup</Link>
        {/* <Link to="/Login">Login</Link> */}
      </div>
    </div>
  );
};

export default Header;
