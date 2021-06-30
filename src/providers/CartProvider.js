import React, {useState} from 'react';
import CartContext from "../context/cartContext";

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = {item, quantity}
    setCart(prev => [...prev, newItem]);
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

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
