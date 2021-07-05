import React from 'react';
import Button from "../Button/Button";
import {useHistory} from "react-router-dom";
import styles from './CartEmpty.module.scss'

const CartEmpty = () => {
  const history = useHistory();
  const handleClickButton = () => {
    history.push('/')
  }
  return (
    <div className={styles.cartEmptyContainer}>
      <h2>
        Tu carrito está vació
      </h2>
      <Button text={'Ver Ofertas'} onClick={handleClickButton} />
    </div>
  );
};

export default CartEmpty;
