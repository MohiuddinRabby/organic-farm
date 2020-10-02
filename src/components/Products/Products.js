import React from "react";
import "./Products.css";
import { Card } from "react-bootstrap";

const Products = (props) => {
  const { name, img, price } = props.product;
  return (
    <div className="product-card">
      <Card className="text-center">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title id="pd-name">{name}</Card.Title>
          <Card.Title id="price">${price}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
