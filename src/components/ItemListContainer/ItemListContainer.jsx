import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <div style={{padding: '1em', fontSize: '24px'}}>
            {greeting}
        </div>
    );
};

export default ItemListContainer;
