import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shops.css";

const Shops = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  // send product data to product components

  const product = products.map((product) => (
    <Product
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
    />
  ));

  return (
    <div className="shops-container">
      <div className="products-container">{product}</div>
      <div className="card-container">
        <h3>This is card container</h3>
        <p>Selected item:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shops;
