import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/styles/main.scss";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import products from "./data/products";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <hr className="hr-color" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
