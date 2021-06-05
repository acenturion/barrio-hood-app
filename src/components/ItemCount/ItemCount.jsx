import React, {useState} from 'react';
import styles from './ItemCount.module.scss'

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemQty, setItemQty] = useState(initial);

    const handleIncrement = () => {
        if (itemQty === stock) return;
        setItemQty(itemQty + 1)
    };
    const handleDecrement = () => {
        if (itemQty === initial) return;
        setItemQty(itemQty - 1)
    };

    return (
        <div className={styles.itemCountContainer}>
            <div className={styles.itemCount}>
                <div className={`${styles.buttonController} ${styles.left}`} onClick={handleDecrement}>-</div>
                <div className={styles.itemQty}>{itemQty}</div>
                <div className={`${styles.buttonController} ${styles.right}`} onClick={handleIncrement}>+</div>
            </div>

            <div onClick={() => {onAdd(itemQty)}} className={styles.buttonAddToCart}>
                Agregar al carrito
            </div>
        </div>
    );
};

export default ItemCount;
