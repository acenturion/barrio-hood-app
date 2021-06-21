import React, {useState} from 'react';
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss"
import Loader from "../Loader/Loader";
import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import CardMessage from "../CardMessage/CardMessage";

const ItemDetail = ({item}) => {

    const history = useHistory();
    const [qtyItems, setQtyItems] = useState(1);
    const [showFinish, setShowFinish] = useState(false);

    const handleOnAddItem = (value) => {
        console.log("agrego un item", value)
        setQtyItems(value)
        setShowFinish(true);
    }

    const handleFinishBuying = () => {
        console.log("agrego los items", qtyItems)
        history.push('/carrito')

    }

    return (
        <div className={styles.itemDetailContainer}>
            {item
                ? (<div>
                    <h2 className={styles.itemTitle}>{item.title}</h2>
                    <div className={styles.imgContainer}>

                        <img src={`${item.pictureUrl}`} alt={item.title}/>
                    </div>
                    <div className={styles.itemDescription}>
                        {item.description}
                    </div>
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>$ {item.price}</div>
                        <div className={styles.chipDeal}>Oferta del dia</div>
                    </div>
                    {showFinish
                        ? (<Button text={'Terminar mi compra'} onClick={() => handleFinishBuying()}/>)
                        : (<ItemCount stock={item.stock} initial={1} onAdd={handleOnAddItem} onFinish={handleFinishBuying}/>)}

                    { showFinish && (
                        <CardMessage message={`Agregaste ${qtyItems} 🎉 ${qtyItems > 1 ? 'productos' : 'producto' } al carrito` } show={true}/>
                    ) }
                </div>)
                : (<Loader/>)}

        </div>
    );
};

export default ItemDetail;
