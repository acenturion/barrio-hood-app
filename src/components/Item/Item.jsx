import React from 'react';
import styles from "./Item.module.scss"
import {
    useHistory
} from "react-router-dom";

const Item = ({id, title, description, price, pictureUrl}) => {
    let history = useHistory();

    const handleItemClick = () => {
        history.push('/producto/'+id);
    }

    return (
        <div className={styles.itemContainer} onClick={handleItemClick}>
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
