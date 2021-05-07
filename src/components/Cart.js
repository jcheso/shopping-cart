import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ state: items, setState: setItems }) => {
  const shoppingCart = items.filter((item) => item.inCart > 0);


  const updateCartValue = (index, amount) => {
    if (amount >= 0) {
      setItems((items) => {
        const newItems = [...items];
        const newCartAmount = parseInt(amount);
        console.log(newCartAmount);
        newItems[index] = {
          ...items[index],
          inCart: newCartAmount,
        };
        return newItems;
      });
    }
  };

  const handleSubmit = (event) => {
    const index = event.target[0].id;
    const amount = event.target[0].value;

    console.log(index);
    console.log(amount);

    updateCartValue(index, amount);
    event.preventDefault();
  };

  console.log(shoppingCart);

  if(shoppingCart.length > 0){
    return (
      <div className="cart-container">
        {shoppingCart.map((item, index) => (
          <div className="cart-card" key={`${index}-key`}>
            <div className="item-row">
              <img className="item-image" src={item.img} alt="Coffee Beans" />
            </div>
            <div>
              <div className="item-title">{item.name}</div>
              <div className="item-row">{item.inCart}kg in cart</div>
            </div>
  
            <div className="item-row">${item.price * item.inCart}</div>
            <div className="item-row">
              <form className="cart-update" onSubmit={handleSubmit}>
                <div>
                <input
                  id={item.index}
                  placeholder={item.inCart}
                  className="cart-input"
                  type="number"
                  min="0"
                />
                </div>
                 <div>
                <input type="submit" value="Update Cart" className="btn" />
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    );
  }
  else{
    return (
      <div className="cart-container">
      <div className="empty-cart">Your cart is empty!</div>
      </div>
    )
  }
 
};

export default Cart;
