import React from 'react';
import {Route, Switch} from "react-router-dom";
import MyCart from "../pages/MyCart";
import Product from "../pages/Product";
import Home from "../pages/Home";
import BuyProducts from "../pages/BuyProducts";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/categoria/:id">
        <Home/>
      </Route>
      <Route exact path="/carrito">
        <MyCart/>
      </Route>
      <Route exact path="/item/:id">
        <Product/>
      </Route>
      <Route exact path="/buy">
        <BuyProducts/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
  );
};

export default Router;
