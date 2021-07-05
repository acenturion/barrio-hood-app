import React from 'react';
import Button from "../Button/Button";
import styles from './CartTotalPrice.module.scss'

const CartTotalPrice = ({getTotal}) => {
  return (
    <div className={styles.cartTotalPriceContainer}>
      <div className={styles.totalTitle}>
        <div>Total de la compra</div>
        <div>${getTotal()}</div>
      </div>
      <Button text={'Comprar'} primary={false}/>
    </div>
  );
};

export default CartTotalPrice;
