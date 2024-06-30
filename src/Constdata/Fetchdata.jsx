import React, { useEffect, useState, useContext } from "react";
import DataContext from "./DataContext";

const Fetching = () => {
  const { setdataget, dataget } = useContext(DataContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const URL = "https://dummyjson.com/products";
    const fetchData = async () => {
      try {
        const response = await fetch(URL, { signal });
        const data = await response.json();
        setdataget(data.products);
      } catch {
        console.log("error");
      }
    };

    fetchData();
    // Cleanup function to abort the fetch request
    return () => {
      controller.abort();
    };
  }, []);
  return dataget;
};

export default Fetching;
