import React from "react";
import About from "../About/About";
import Shop from "../Shop/Shop";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <React.Fragment>
      <Slider />
      <About />
      <Shop />
    </React.Fragment>
  );
};

export default Home;
