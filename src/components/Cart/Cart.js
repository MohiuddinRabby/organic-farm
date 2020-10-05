import React, { useContext } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../global/CartContext";
import "./Cart.css";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  return (
    <Container fluid="md" className="py-5">
      <h1 className="py-5">Cart</h1>
      {cart.map((pd) => (
        <li>{pd.name}</li>
      ))}
    </Container>
  );
};

export default Cart;
