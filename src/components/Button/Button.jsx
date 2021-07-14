import React from 'react';
import styles from "./Button.module.scss";

const Button = ({
                  onClick,
                  text,
                  style,
                  primary = true,
                  disabled = false,
                  type = 'button'
                }) => {
  return (
    <button
      type={type}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      className={`
        ${primary ? styles.primary : styles.secondary} 
        ${styles.buttonAddToCart}
        ${disabled ? styles.disabled : ''}
        `}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
