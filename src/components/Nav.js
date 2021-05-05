import React from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="page-title" to="/about">
        <h1>The Drip Doctor</h1>
      </Link>
      <ul className="nav-links">
        <Link className="navStyle" to="/about">
          <li>About</li>
        </Link>
        <Link className="navStyle" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;