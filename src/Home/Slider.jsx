import React, { useState, useEffect } from "react";
import image1 from "../image/1.jpg";
// import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import image5 from "../image/5.jpg";
import image6 from "../image/6.jpg";

const Slider = () => {
  const images = [image1, image3, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (

    <div
      className="bg-cover sm:bg-center h-[350px] sm:h-350[px] md:h[350px] lg:h-[350px]"
       style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        
      <div className=" flex h-[300px] justify-between p-3 text-5xl font-bold align-middle">
        <button className="" onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlide}>{">"}</button>
      </div>
    </div>
  );
};

export default Slider;

