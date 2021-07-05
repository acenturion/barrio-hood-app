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
