import { createContext, useState, useEffect, ReactNode } from 'react';
import type {CartItem} from '@/types/phone'

interface CartContextType {
  cart: CartItem[];
  addToCart: (phone: CartItem) => void;
  removeFromCart: (id: string) => void;
}

interface childrenNode {
  children : ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});


export const CartProvider = ({ children }:childrenNode) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (phone:CartItem) => setCart([...cart, phone]);
  const removeFromCart = (id:string) => setCart(cart.filter((p:CartItem) => p.id !== id));
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};