import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <>
      <hr />
      <div className="footerfirstrow">
        <div>
          <h3>OFFLINE STORES</h3>
          <p>Find Stores Near ME</p>
        </div>
        <div>
          <h3>GET TO KNOW US</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ's</li>
            <li>Blogs</li>
            <li>Terms & Conditons</li>
          </ul>
        </div>
        <div>
          <h3>TRACK OR RETURN/EXCHANGE ORDER</h3>
          <ul>
            <li>Track Order</li>
            <li>Place Return/Exchange Request</li>
            <li> Returns/Exchange Policy</li>
          </ul>
        </div>
        <div>
          <h3>CUSTOMER CARE</h3>
          <ul>
            <li>Timings:10AM-7PM(Mon-Sat)</li>
            <li>Whatsapp:+987654321</li>
            <li>Instagram:Urban_Bazaar</li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <h3>Made By GauravSondhiya 👋</h3>
      </div>
      <hr />
    </>
  );
};

export default Footer;
