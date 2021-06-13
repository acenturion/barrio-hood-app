import React from 'react';
import styles from "../ItemCount/ItemCount.module.scss";

const Button = ({onClick}) => {
    return (
        <div onClick={onClick} className={styles.buttonAddToCart}>
            Agregar al carrito
        </div>
    );
};

export default Button;
