import React from 'react';
import Button from "../Button/Button";
import styles from './CartTotalPrice.module.scss'
import {useHistory} from "react-router-dom";

const CartTotalPrice = ({getTotal}) => {
  let history = useHistory();

  const handleBuyProducts = () =>{
     history.push('/buy')
  }
  return (
    <div className={styles.cartTotalPriceContainer}>
      <div className={styles.totalTitle}>
        <div>Total de la compra</div>
        <div>${getTotal()}</div>
      </div>
      <Button text={'Comprar'} primary={false} onClick={handleBuyProducts}/>
    </div>
  );
};

export default CartTotalPrice;
