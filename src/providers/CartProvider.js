import React, {useState} from 'react';
import CartContext from "../context/cartContext";

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
      let cartUpdated = cart.map( element => {
        if(element.item.id === item.id){
          element.quantity = quantity;
        }
        return element;
      })
      setCart(cartUpdated)
    }else{
      setCart(prev => [...prev, {item, quantity}]);
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter(element => element.item.id !== itemId)
    setCart(newCart);
  }

  const clear = () => {
    setCart([]);
  }
  const isInCart = (itemId) => {
    return cart.some(element => element.item.id === itemId)
  }

  const getTotal  = () => {
    let total = 0;
    cart.forEach(element => total = element.item.price + total)
    return total;
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
