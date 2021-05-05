import React from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
