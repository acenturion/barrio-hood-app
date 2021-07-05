import React from 'react';
import styles from "./Button.module.scss";

const Button = ({onClick, text, primary = true}) => {
    return (
        <div onClick={onClick} className={`${primary ? styles.primary: styles.secondary} ${styles.buttonAddToCart}` }>
            {text}
        </div>
    );
};

export default Button;
