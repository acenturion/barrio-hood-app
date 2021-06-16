import React from 'react';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import {useParams} from "react-router-dom";
import PageContainer from "../components/PageContainer/PageContainer";

const Product = () => {
    let {id} = useParams();
    return (
        <PageContainer>
            <ItemDetailContainer id={id}/>
        </PageContainer>
    );
};

export default Product;
