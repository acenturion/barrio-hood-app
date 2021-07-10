import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import {getItemsFirebase} from "../../services/ItemsService";
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const {id} = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsFirebase(id).then(res => {
      setItems(res);
    });
  }, [id])


  return (
    items.length > 0
      ? <ItemList items={items}/>
      : <Loader/>
  );
};

export default ItemListContainer;
