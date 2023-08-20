import React from "react";
import { Icon } from "../../atoms";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light header">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/assets/images/logo.png"
            width="135"
            height="65"
            alt="Logo Image"
          />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-nav header__right-navItems d-flex align-items-center">
          <div className="auth-wrapper">
            <div className="nav-item m-1">
              <Link className="nav-link" to="/login">
                Sign In
              </Link>
            </div>
            <div className="nav-item m-1">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
          </div>
          <div className="nav-item cart-wrapper">
            <Link className="nav-link" to="/cart">
              <Icon classes="fa-solid fa-cart-shopping fa-lg" color="#d42559" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
