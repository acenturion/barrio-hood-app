import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import {getItems} from "../../services/ItemsService";
import styles from './ItemListContainer.module.scss'

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems().then(res => setItems(res))
    }, [])

    return (
        <div className={styles.itemListsContainer}>
            <h3 className={styles.title}>{greeting}</h3>
            <ItemList items={items}/>
        </div>
    );
};

export default ItemListContainer;
