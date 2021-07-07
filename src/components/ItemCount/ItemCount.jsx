import React, {useState} from 'react';
import styles from './ItemCount.module.scss'
import Button from "../Button/Button";

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
            <div className={styles.titleItemCount}>Cantidad</div>
            <div className={styles.itemCount}>
                <div className={`${styles.buttonController} ${styles.left}`} onClick={handleDecrement}>-</div>
                <div className={styles.itemQty}>{itemQty}</div>
                <div className={`${styles.buttonController} ${styles.right}`} onClick={handleIncrement}>+</div>
                ({stock} diponibles)
            </div>
            <Button text={'Agregar al carrito'} onClick={() => onAdd(itemQty)}/>
        </div>
    );
}

export default ItemCount;
