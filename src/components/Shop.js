import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import brazil from "./assets/brazil.png";
import colombia from "./assets/colombia.png";
import costaRica from "./assets/costaRica.png";
import ethiopia from "./assets/ethiopia.png";
import guatemala from "./assets/guatemala.png";
import peru from "./assets/peru.png";
import png from "./assets/png.png";

const Shop = () => {
  // useEffect(() => {}, []);

  const [items, setItems] = useState([
    {
      name: "Brazil",
      description:
        "Treacly honeyed finish balanced with earthy raw cacao and dried fruit notes. Even finish with deliciously creamy texture.",
      price: 35.5,
      img: brazil,
      inCart: 0,
    },
    {
      name: "Colombia",
      description:
        "Bountiful in flavour with mild hints of cane sugary sweetness. Well-rounded and medium in intensity, rich in profile.",
      price: 35.5,
      img: colombia,
      inCart: 0,
    },
    {
      name: "Peru",
      description:
        "Subdued creamy sweetness on the palate with a mild tang finish. Medium-low acidity and earthy, warm caramel notes make this bean a prime pick",
      price: 36.5,
      img: peru,
      inCart: 0,
    },
    {
      name: "Costa Rica",
      description:
        "Demonstrates intense, warming cacao notes with a full-bodied creaminess and a slightly sharp dark chocolate bitterness offset by a velvety finish.",
      price: 35.5,
      img: costaRica,
      inCart: 0,
    },
    {
      name: "Ethiopia",
      description:
        "A delicious, light-bodied bean with significant floral and citrus notes due to vibrant, lustrous acidity complex. Warm earthy notes complete with medium to high acidity.",
      price: 35.5,
      img: ethiopia,
      inCart: 0,
    },
    {
      name: "Guatemala",
      description:
        "This is a powerful and nutty brew with a striking floral aroma. A true showcase of Guatemalan coffee characteristics, this blend is ideal for those who want a strong, yet balanced cup of coffee.",
      price: 35.5,
      img: guatemala,
      inCart: 0,
    },
    {
      name: "Papa New Guinea",
      description:
        "This is a powerful and nutty brew with a striking floral aroma. A true showcase of Guatemalan coffee characteristics, this blend is ideal for those who want a strong, yet balanced cup of coffee.",
      price: 35.5,
      img: png,
      inCart: 0,
    },
  ]);

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
                id={index}
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
