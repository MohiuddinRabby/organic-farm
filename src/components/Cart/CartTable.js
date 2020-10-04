import React from "react";
import { useState } from "react";
const CartTable = (props) => {
  const { img, name, price, qty } = props.items;
  const [count, setCount] = useState(1);
  const inC = () => {
    setCount(count + 1);
  };
  return (
    <tr id="tab-product">
      <td>
        <img src={img} style={{ width: "60px", height: "60px" }} alt="" />
      </td>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>
        <i className="fas fa-minus" id="cart-minus"></i>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <i className="fas fa-plus" id="cart-plus" onClick={inC}></i>
      </td>
    </tr>
  );
};

export default CartTable;
