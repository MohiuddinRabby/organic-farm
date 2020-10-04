import React, { useContext } from "react";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { StorageContext } from "../../global/StorageContext";
import "./Cart.css";
import CartTable from "./CartTable";
const Cart = () => {
  const [loc_storage, setLocStorage] = useContext(StorageContext);
  return (
    <Container fluid="md" className="py-5">
      <div className="cart-info">
        <Row>
          <Col md={6} className="product-table">
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {loc_storage.map((pd) => (
                  <CartTable items={pd}></CartTable>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={6}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
