import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const product = cart.map((product) => (
    <ReviewItem key={product.id} product={product} />
  ));
  return (
    <div className="shops-container ">
      <div className="review-item-container">{product}</div>
      <div className="card-container">
        <h2>Cart has :{cart.length}</h2>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
