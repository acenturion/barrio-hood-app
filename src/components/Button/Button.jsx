import React from 'react';
import styles from "./Button.module.scss";

const Button = ({onClick, text}) => {
    return (
        <div onClick={onClick} className={styles.buttonAddToCart}>
            {text}
        </div>
    );
};

export default Button;
