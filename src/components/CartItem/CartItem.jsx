import React from 'react';
import styles from './CartItem.module.scss'
import {IoCloseCircleOutline} from "react-icons/all";

const CartItem = ({item, onClick}) => {
  return (
    <div className={styles.itemCartContainer}>
      <div className={styles.imageContainer}>
        <img src={item.pictureUrl} alt={`img-${item.title}`}/>
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.titleItem}>
          <h3>{item.title}</h3>
          <IoCloseCircleOutline className={styles.deleteIcon} onClick={onClick}/>
        </div>
        <p>Cantidad: {item.stock}</p>
        <div style={{marginLeft:"auto"}}>
          <p className={styles.priceItem}>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
