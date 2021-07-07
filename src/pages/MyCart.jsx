import React, {useContext} from 'react';
import PageContainer from "../components/PageContainer/PageContainer";
import CartContext from "../context/cartContext";
import CartItem from "../components/CartItem/CartItem";
import CartEmpty from "../components/CartEmpty/CartEmpty";
import CartTotalPrice from "../components/CartTotalPrice/CartTotalPrice";
import Button from "../components/Button/Button";

const MyCart = () => {
  const {cart, removeItem, getTotal, clear} = useContext(CartContext);
  return (
    <PageContainer title={"Mi carrito"}>
      {cart.length > 0
        ? (
          <div style={{paddingBottom: '10em'}}>
            <div style={{padding:'1em'}}>
              <Button text={'Elimiar todos los productos'} onClick={() => clear()} style={{marginLeft:'auto'}}/>
            </div>

            {
              cart.map(element => <CartItem key={element.item.id}
                                            element={element}
                                            onClick={() => removeItem(element.item.id)}/>
              )
            }

            {cart.length > 0 && <CartTotalPrice getTotal={getTotal}/>}
          </div>)
        : (<CartEmpty/>)}
    </PageContainer>
  );
};

export default MyCart;
