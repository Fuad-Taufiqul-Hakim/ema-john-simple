import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const { cart } = props;
  // console.log(cart);
  let totalPrice = 0;
  let shipping = 0;
  for (const data of cart) {
    totalPrice += data.price;
    shipping += data.shipping;
  }
  const tex = totalPrice * 0.07;
  const total = totalPrice + shipping + tex;
  return (
    <div className="cart">
      <h5 className="cart-title">Order Summary</h5>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tex.toFixed(2)}</p>
      <h6>Grand Total: ${total.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
