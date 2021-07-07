import React from 'react';
import styles from "./Button.module.scss";

const Button = ({onClick, text, style, primary = true}) => {
  return (
    <div
      onClick={onClick}
      className={`${primary ? styles.primary : styles.secondary} ${styles.buttonAddToCart}`}
      style={style}
    >
      {text}
    </div>
  );
};

export default Button;
