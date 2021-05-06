import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ state: items, setState: setItems }) => {
  const shoppingCart = items.filter((item) => item.inCart > 0);
  console.log(shoppingCart);
  return (
    <div className="container">
      {shoppingCart.map((item, index) => (
        <div className="item-card" key={`${index}-key`}>
          <div className="item-row">
            <img className="item-image" src={item.img} alt="Coffee Beans" />
          </div>
          <div className="item-title">{item.name}</div>
          <div className="item-row">{item.inCart}kg in cart</div>
          <div className="item-row">${item.price * item.inCart}</div>
          <div className="item-row"></div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
