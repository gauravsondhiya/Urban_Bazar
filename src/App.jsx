import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Infopage from "./Home/Infopage";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Cart from "./Cart/Cart";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
  <>
  <Header/>
  <br/>
    <Routes>
         <Route path='' element={<Home/>}/>
         <Route path='Cart' element={<Cart/>}/>
         <Route path='Signup' element={<Signup/>}/>
    </Routes>
    <br/>
    <Footer/>
    </>
   
  );
};

export default App;
