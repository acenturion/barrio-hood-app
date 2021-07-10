import React, {useEffect, useState} from 'react';
import {getItemFirebase} from "../../services/ItemsService";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({id}) => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemFirebase(id).then(res => {
      setItem(res);
    })
  }, [id])
  return (
    <ItemDetail item={item}/>
  )
};

export default ItemDetailContainer
