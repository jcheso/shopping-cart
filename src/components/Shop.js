import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Shop = ( {state: items, setState: setItems}) => {

  console.log(items)
  

  const addToCart = (index, amount) => {
    if (amount > 0) {
      setItems((items) => {
        const newItems = [...items];
        const newCartAmount = parseInt(items[index].inCart) + parseInt(amount);
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

    addToCart(index, amount);
    event.preventDefault();
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <div className="item-card" key={`${index}-key`}>
          <div className="item-row">
            <img className="item-image" src={item.img} alt="Coffee Beans" />
          </div>
          <div className="item-title">{item.name}</div>
          <div className="item-row">${item.price}/kg</div>
          <div className="item-row">
            <form onSubmit={handleSubmit}>
              <input
                id={item.index}
                placeholder="0"
                className="cart-input"
                type="number"
                min="0"
              />
              <br></br>
              <input type="submit" value="Add to Cart" className="btn" />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
