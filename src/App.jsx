import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Shimmer from "./Shimmer/Shimmer";
import Infopage from "./Home/Infopage";
const App = () => {
  return (
    <div>
          <Infopage/>
      <Header />
      <br />
  
      <Home />
      <br />
      <Footer />
    
    </div>
  );
};

export default App;
