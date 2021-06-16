import React from 'react';
import {Route, Switch} from "react-router-dom";
import MyCart from "../pages/MyCart";
import Product from "../pages/Product";
import Home from "../pages/Home";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/Ofertas">
                <Home/>
            </Route>
            <Route exact path="/carrito">
                <MyCart/>
            </Route>
            <Route exact path="/producto/:id">
                <Product/>
            </Route>
        </Switch>
    );
};

export default Router;
