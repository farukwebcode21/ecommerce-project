import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shops.css";

const Shops = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
  };

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
      </div>
    </div>
  );
};

export default Shops;
