import React from "react";



const Footer = () => {
  return (
    <>
      <hr />
      <div className="flex justify-around text-xl p-3">
        <div>
          <h3 className="font-bold">OFFLINE STORES</h3>
          <p>Find Stores Near ME</p>
        </div>
        <div>
          <h3 className="font-bold">GET TO KNOW US</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ's</li>
            <li>Blogs</li>
            <li>Terms & Conditons</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">TRACK OR RETURN/EXCHANGE ORDER</h3>
          <ul>
            <li>Track Order</li>
            <li>Place Return/Exchange Request</li>
            <li> Returns/Exchange Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">CUSTOMER CARE</h3>
          <ul>
            <li>Timings:10AM-7PM(Mon-Sat)</li>
            <li>Whatsapp:+987654321</li>
            <li>Instagram:Urban_Bazaar</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center text-3xl  font-bold p-4 m-3">
        <h3>Made By GauravSondhiya 👋</h3>
      </div>
      <hr />
    </>
  );
};

export default Footer;
