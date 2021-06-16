import React from 'react';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import PageContainer from "../components/PageContainer/PageContainer";

const Home = () => {
    return (
        <PageContainer title={"Productos Destacados"}>
            <ItemListContainer/>
        </PageContainer>
    );
}

export default Home;
