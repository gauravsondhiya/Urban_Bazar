import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="main">
      <div className="first">
        <div>Shopping App</div>
      </div>
      <div className="searchbar">
        <input placeholder="What are you looking for?" />
        {/* <button></button> */}
      </div>
      <div className="second">
        <div>Home</div>
        <div>Cart</div>
        <div>Signup/Login</div>
      </div>
    </div>
  );
};

export default Header;
