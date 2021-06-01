/** @format */

import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";
import { useFormState } from "react-hook-form";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
