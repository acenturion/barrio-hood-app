import React, {useContext} from 'react';
import PageContainer from "../components/PageContainer/PageContainer";
import CartContext from "../context/cartContext";
import CartItem from "../components/CartItem/CartItem";
import CartEmpty from "../components/CartEmpty/CartEmpty";
import CartTotalPrice from "../components/CartTotalPrice/CartTotalPrice";

const MyCart = () => {
  const {cart, removeItem, getTotal} = useContext(CartContext);
  return (
    <PageContainer title={"Mi carrito"}>
      <div style={{paddingBottom: '10em'}}>
        {cart.length > 0
          ? (
            cart.map(element => <CartItem key={element.item.id}
                                          item={element.item}
                                          onClick={() => removeItem(element.item.id)}/>
            ))
          : (<CartEmpty/>)
        }

      </div>
      {cart.length > 0 && <CartTotalPrice getTotal={getTotal}/>}
    </PageContainer>
  );
};

export default MyCart;
