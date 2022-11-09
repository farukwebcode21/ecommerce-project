import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  const product = cart.map((product) => (
    <ReviewItem
      key={product.id}
      product={product}
      handleRemoveProduct={handleRemoveProduct}
    />
  ));
  return (
    <div className="shops-container ">
      <div className="review-item-container">{product}</div>
      <div className="card-container">
        <Cart cart={cart}>
          <Link to="/shipment">
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
