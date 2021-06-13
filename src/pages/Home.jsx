import React from 'react';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
    // const onAdd = (value) => {
    //     console.info(`El usuario va a comprar ${value} productos`);
    // }


    return (
        <div>
            <ItemListContainer greeting={"Productos Destacados"}/>
        </div>
    );
};

export default Home;
