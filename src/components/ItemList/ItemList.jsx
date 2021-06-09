import React from 'react';
import Item from "../Item/Item";
import styles from './ItemList.module.scss'
const ItemList = ({items}) => {
    return (
        <div className={styles.itemListContainer}>
            {items && items.map(item => <Item key={item.id} {...item} />)}
        </div>
    );
};

export default ItemList;
