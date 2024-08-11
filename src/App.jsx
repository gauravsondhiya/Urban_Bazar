import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Infopage from "./Home/Infopage";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Cart from "./Cart/Cart";
import Thankyou from "./Cart/Thankyou";
const App = () => {
  return (
    <>
      <Header />
      <br />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='Info/:id/:title' element={<Infopage />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='/Thankyou' element={<Thankyou />} />
        <Route path='Signup' element={<Signup />} />
        <Route path='Login' element={<Login />} />
      </Routes>
      <br />
      <Footer />
    </>
  );
};

export default App;
