import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./global/CartContext";
import { StorageProvider } from "./global/StorageContext";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <StorageProvider>
          <CartProvider>
            <Header />
            <Switch>
              <Route path="/shop/cart">
                <Cart></Cart>
              </Route>
              <Route exact path="*">
                <Home></Home>
              </Route>
            </Switch>
          </CartProvider>
        </StorageProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
