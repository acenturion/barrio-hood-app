import React from 'react';
import {IoCartOutline} from "react-icons/all";
import styles from "./CartWidget.module.scss"
import {NavLink} from "react-router-dom";

const CartWidget = ({qtyItems = 0}) => {
    return (
        <div className={styles.cardWidgetContainer}>
            <NavLink to="/carrito" activeClassName={styles.cartSelected}>
                <IoCartOutline size={24}/>
                {qtyItems}
            </NavLink>
        </div>
    );
};

export default CartWidget;
