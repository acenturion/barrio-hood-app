import React from 'react';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemCount from "../components/ItemCount/ItemCount";

const Home = () => {


    const onAdd = (value) => {
        console.info(`El usuario va a comprar ${value} productos`);
    }
    return (
        <div>
            <ItemListContainer greeting={"Productos Destacados"}/>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
};

export default Home;
