import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <About />
    </React.Fragment>
  );
};

export default Home;
