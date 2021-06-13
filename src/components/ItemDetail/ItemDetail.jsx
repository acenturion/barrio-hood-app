import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import styles from "./ItemDetail.module.scss"
import Loader from "../Loader/Loader";

const ItemDetail = ({item}) => {
    return (
        <div className={styles.itemDetailContainer}>
            {item
                ? (<div>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.imgContainer}>

                    <img src={`../${item.pictureUrl}`} alt="mock-product"/>
                </div>
                <div className={styles.itemDescription}>
                    {item.description}
                </div>
                <div className={styles.price}>$ {item.price}</div>
                <ItemCount stock={5} initial={1}/>
                <Button/>
            </div>)
                : (<Loader/>)}

        </div>
    );
};

export default ItemDetail;
