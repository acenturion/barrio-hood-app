import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import {getItems} from "../../services/ItemsService";
import styles from './ItemListContainer.module.scss'
import Title from "../Title/Title";

const ItemListContainer = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems().then(res => setItems(res))
    }, [])

    return (
        <div className={styles.itemListsContainer}>
            <ItemList items={items}/>
        </div>
    );
};

export default ItemListContainer;
