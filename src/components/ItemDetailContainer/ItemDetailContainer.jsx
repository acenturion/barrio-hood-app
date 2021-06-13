import React, {useEffect, useState} from 'react';
import {getItem} from "../../services/ItemsService";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from './ItemDetailContainer.module.scss'

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(parseInt(id)).then(res => {
            setItem(res);
        })
    })
    return (
        <div className={styles.itemDisplayContainer}>
            <ItemDetail item={item}/>
        </div>
    )
};

export default ItemDetailContainer
