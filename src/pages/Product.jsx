import React from 'react';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import {
    useParams
} from "react-router-dom";

const Product = () => {
    let {id} = useParams();
    return (
        <div>
            <ItemDetailContainer id={id}/>
        </div>
    );
};

export default Product;
