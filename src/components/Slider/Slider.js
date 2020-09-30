import React from "react";
import "./Slider.css";
const Slider = () => {

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item carousel-image-1 active">
          <div className="dark-overlary">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <div className="title-box">
                  <h5
                    className="title-one"
                  >
                    High-Quality Organic Products
                  </h5>
                  <h5
                    className="title-two"
                  >
                    VEGETABLES
                  </h5>
                  <h5
                    className="title-three"
                  >
                    WITHOUT HARMFUL ADDITIVES
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-image-2">
          <div className="dark-overlary">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <div className="title-box">
                  <h5
                    className="title-one"
                  >
                    Fresh Organic Produce
                  </h5>
                  <h5
                    className="title-two"
                  >
                    FRUITS
                  </h5>
                  <h5
                    className="title-three"
                  >
                    WITH LOTS OF VITAMINS
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-image-3">
          <div className="dark-overlary">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <div className="title-box">
                  <h5 className="title-one">Welcome to Our Farm</h5>
                  <h5 className="title-two">PRODUCTS</h5>
                  <h5 className="title-three">GROWN WITH LOVE</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span aria-hidden="true" id="prev-text">
          prev
        </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span aria-hidden="true" id="next-text">
          next
        </span>
      </a>
    </div>
  );
};

export default Slider;
