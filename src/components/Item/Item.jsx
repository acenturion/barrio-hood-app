import React from 'react';
import styles from "./Item.module.scss"

const Item = ({title, description, price, pictureUrl}) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img src={pictureUrl} alt="mock-product"/>
            </div>
            <div className={styles.itemDataContainer}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.price}>$ {price}</div>
            </div>
        </div>
    );
};

export default Item;
