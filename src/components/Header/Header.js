import React from "react";
import "./Header.css";
import icon from "../../assets/img/vegetables.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img src={icon} alt="" style={{ width: "60px", height: "60px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Shop
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                <i className="fas fa-shopping-basket fa-2x"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                <i className="fas fa-align-left fa-2x"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
