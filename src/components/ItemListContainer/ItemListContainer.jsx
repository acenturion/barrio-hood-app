import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import {getItems} from "../../services/ItemsService";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems(id).then(res => setItems(res))
    }, [id])
    
    return (
        <div>
            <ItemList items={items}/>
        </div>
    );
};

export default ItemListContainer;
