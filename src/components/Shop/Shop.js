import React, { useContext, useState } from "react";
import "./Shop.css";
import { Col, Container, Row } from "react-bootstrap";
import demoData from "../../demoData";
import Products from "../Products/Products";
import { CartContext } from "../../global/CartContext";
import { addToDatabaseCart, getDatabaseCart } from "../../localStorage";
import { useEffect } from "react";
const Shop = () => {
  const [products, setProducts] = useState(demoData);
  const [category, setCategory] = useState("vegetable");
  //filter foods accord to category
  const selectCategory = products.filter((food) => food.category === category);
  //context
  const [cart, setCart] = useContext(CartContext);
  const handleCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    const sameProduct = newCart.filter((pd) => pd.id === item.id);
    const count = sameProduct.length;
    addToDatabaseCart(item.id, count);
  };
  return (
    <Container fluid="md" className="shop-section py-5" id="shop">
      <div className="shop-headers text-center">
        <h3 id="latest-title">Latest Arrivals</h3>
        <h1 id="products-title">NEW PRODUCTS</h1>
      </div>
      <div className="cat-nav">
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li
                className="nav-product"
                onClick={() => setCategory("vegetable")}
              >
                <span
                  className={
                    category === "vegetable" ? "actives nav-link " : "nav-link"
                  }
                >
                  Vegetables
                </span>
              </li>
              <li className="nav-product" onClick={() => setCategory("fruit")}>
                <span
                  className={
                    category === "fruit" ? "actives nav-link " : "nav-link"
                  }
                >
                  Fruits
                </span>
              </li>

              <li className="nav-product" onClick={() => setCategory("bread")}>
                <span
                  className={
                    category === "bread" ? "actives nav-link " : "nav-link"
                  }
                >
                  Breads
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Row className="py-3">
        {selectCategory.map((product) => (
          <Col md={3} key={product.id} className="py-4">
            <Products product={product} handleCart={handleCart}></Products>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
