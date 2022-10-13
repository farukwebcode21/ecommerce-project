import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faCartPlus} />;

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { img, name, seller, price, rating } = product;
  return (
    <div className="product">
      <img src={img} alt="product" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price : {price}</p>
        <p>
          <small>Seller :{seller}</small>
        </p>
        <p>
          <small>Rating:{rating} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add to Cart {element}</p>
      </button>
    </div>
  );
};

export default Product;
