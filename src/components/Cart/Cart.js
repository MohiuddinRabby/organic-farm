import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import demoData from "../../demoData";
import { CartContext } from "../../global/CartContext";
import { getDatabaseCart } from "../../localStorage";
import "./Cart.css";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((pds) => {
      const product = demoData.find((pd) => pd.id === pds);
      product.qty = savedCart[pds];
      return product;
    });
    console.log(cartProducts);
    setCart(cartProducts);
  }, []);
  return (
    <Container fluid="md" className="py-5">
      <h1 className="py-5">Cart</h1>
      {cart.map((pd) => (
        <li>
          {pd.name} {pd.qty}
        </li>
      ))}
    </Container>
  );
};

export default Cart;
