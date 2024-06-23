import React from "react";
import "./Header.css";
import {Link } from "react-router-dom"
const Header = () => {
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
        <Link to="/Cart">Cart</Link>
        <Link to="/Signup">Signup</Link>

      </div>
    </div>
  );
};

export default Header;
