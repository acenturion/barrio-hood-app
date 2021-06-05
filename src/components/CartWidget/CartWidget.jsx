import React from 'react';
import {IoCartOutline} from "react-icons/all";
import styles from "./CartWidget.module.scss"
import {Link} from "react-router-dom";

const CartWidget = () => {
    return (
        <div className={styles.cardWidgetContainer}>
            <Link to="/carrito">
                <IoCartOutline size={24}/>
            </Link>
        </div>
    );
};

export default CartWidget;
