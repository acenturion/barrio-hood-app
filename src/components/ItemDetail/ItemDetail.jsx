import React, {useContext, useEffect, useState} from 'react';
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss"
import Loader from "../Loader/Loader";
import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import CardMessage from "../CardMessage/CardMessage";
import CartContext from "../../context/cartContext";

const ItemDetail = ({item}) => {

  const history = useHistory();
  const [qtyItems, setQtyItems] = useState(1);
  const [showFinish, setShowFinish] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const {addItem, isInCart} = useContext(CartContext);

  const handleOnAddItem = (value) => {
    setQtyItems(value)
    addItem(item, value);
    setShowFinish(true);
    setShowMessage(true);
  }

  const handleFinishBuying = () => {
    history.push('/carrito')
  }

  useEffect(() => {
    if (item && isInCart(item.id)) {
      setShowFinish(true);
      // setShowMessage(true);
    }
  }, [item, isInCart])

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

          <ItemCount stock={item.stock} initial={1} onAdd={handleOnAddItem} onFinish={handleFinishBuying}/>

          {showFinish && (<Button text={'Terminar mi compra'} onClick={() => handleFinishBuying()} primary={false}/>)}

          {showMessage && <CardMessage
            message={`Agregaste ${qtyItems} ${qtyItems > 1 ? 'productos' : 'producto'} al carrito 🎉`}
            show={showMessage}
            setShowMessage={setShowMessage}
          />}

        </div>)
        : (<Loader/>)}

    </div>
  );
};

export default ItemDetail;
