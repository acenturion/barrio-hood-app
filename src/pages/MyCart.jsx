import React, {useContext} from 'react';
import PageContainer from "../components/PageContainer/PageContainer";
import CartContext from "../context/cartContext";
import Button from "../components/Button/Button";

const MyCart = () => {
  const {cart, clear,removeItem} = useContext(CartContext);

  return (
    <PageContainer title={"Mi carrito"}>
      {cart.length > 0 && (<div>
        <Button text={"Eliminar todos"} onClick={() => clear()}/>
      </div>)}
      {cart.length > 0
        ? (
          cart.map(element => {
          return (
            <div style={{padding: '1em'}} key={element.item.id}>
              {element.item.title} ........ cantidad {element.quantity}
              <Button text={'Eliminar'} onClick={() => removeItem(element.item.id)}/>
            </div>
          )
        }))
        : (<div>Agregue productos para comenzar con la compra!</div>)
      }
    </PageContainer>
  );
};

export default MyCart;
