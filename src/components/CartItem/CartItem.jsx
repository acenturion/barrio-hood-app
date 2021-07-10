import React from 'react';
import styles from './CartItem.module.scss'
import {IoCloseCircleOutline} from "react-icons/all";

const CartItem = ({element, onClick}) => {
  return (
    <div className={styles.itemCartContainer}>
      <div className={styles.imageContainer}>
        <img src={element.item.imageId} alt={`img-${element.item.title}`}/>
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.titleItem}>
          <h3>{element.item.title}</h3>
          <IoCloseCircleOutline className={styles.deleteIcon} onClick={onClick}/>
        </div>
        <p>Cantidad: {element.quantity}</p>
        <div style={{marginLeft:"auto"}}>
          <p className={styles.priceItem}>${element.item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
