import React from 'react';
import styles from "./Item.module.scss"
import {
    useHistory
} from "react-router-dom";

const Item = ({id, title, description, price, imageId}) => {
    let history = useHistory();

    const handleItemClick = () => {
        history.push('/item/'+id);
    }

    return (
        <div className={styles.itemContainer} onClick={handleItemClick}>
            <div className={styles.imageContainer}>
                <img src={imageId} alt={title}/>
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
