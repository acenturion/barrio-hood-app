import React, {useEffect, useState} from 'react';
import {getItem} from "../../services/ItemsService";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(parseInt(id)).then(res => {
            setItem(res);
        })
    })
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
};

export default ItemDetailContainer
