import React, { useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { StorageContext } from "../../global/StorageContext";
import "./Cart.css";
const Cart = () => {
  const [loc_storage, setLocStorage] = useContext(StorageContext);
  return (
    <Container fluid="md" className="py-5">
      <div className="cart-info">
        <Row>
          <Col md={6}>
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
                  <tr id="tab-product">
                    <td>
                      <img
                        src={pd.img}
                        style={{ width: "60px", height: "60px" }}
                        alt=""
                      />
                    </td>
                    <td>{pd.name}</td>
                    <td>$ {pd.price}</td>
                    <td>{pd.qty}</td>
                    <td>$ {pd.qty * pd.price}</td>
                  </tr>
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
