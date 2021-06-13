import React from 'react';
import {Route, Switch} from "react-router-dom";
import Stores from "../pages/Stores";
import MyCart from "../pages/MyCart";
import Product from "../pages/Product";
import Home from "../pages/Home";

import styles from "./router.module.scss"

const Router = () => {
    return (
        <div className={styles.routerContainer}>
            <Switch>
                <Route path="/tiendas">
                    <Stores/>
                </Route>
                <Route path="/supermercado">
                    <Stores/>
                </Route>
                <Route path="/carrito">
                    <MyCart/>
                </Route>
                <Route path="/producto/:id">
                    <Product/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
};

export default Router;
