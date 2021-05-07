import React from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";
import shoppingCart from "./assets/outline_shopping_cart_white_24dp.png";

const Nav = ({ state: items, setState: setItems }) => {
  let cartTotal = 0;
  const sumCartTotal = () => {
    for (let index = 0; index < items.length; index++) {
      cartTotal += items[index].inCart * items[index].price;
    }
  };
  sumCartTotal();

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
        <Link className="navStyleCart" to="/cart">
          <div className="navCart">
            <div className="cartText">${cartTotal}</div>
          </div>

          <div>
            {" "}
            <img
              className="cartImg"
              src={shoppingCart}
              alt="Shopping Cart"
            ></img>
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
