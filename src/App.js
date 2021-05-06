import React, { useState } from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import images
import brazil from "./components/assets/brazil.png";
import colombia from "./components/assets/colombia.png";
import costaRica from "./components/assets/costaRica.png";
import ethiopia from "./components/assets/ethiopia.png";
import guatemala from "./components/assets/guatemala.png";
import peru from "./components/assets/peru.png";
import png from "./components/assets/png.png";

const App = () => {
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

  return (
    <Router>
      <div className="App">
        <Nav state={items} setState={setItems}/>
        <div className="container">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/shop">
              <Shop state={items} setState={setItems} />
            </Route>
            <Route exact path="/cart">
              <Cart state={items} setState={setItems} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
