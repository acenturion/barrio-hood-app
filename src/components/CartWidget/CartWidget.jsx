import React from 'react';
import {IoCartOutline} from "react-icons/all";
import styles from "./CartWidget.module.scss"
import {NavLink} from "react-router-dom";

const CartWidget = () => {
    return (
        <div className={styles.cardWidgetContainer}>
            <NavLink to="/carrito" activeClassName={styles.cartSelected}>
                <IoCartOutline size={24}/>
            </NavLink>
        </div>
    );
};

export default CartWidget;
