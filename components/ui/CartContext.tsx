'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { information } from '@/assets/data';

interface CartItem {
  [productId: number]: number;
}

interface Product {
  id: number;
  image: any;
  category: string;
  title: string;
  quantity?: number;
}

interface CartContextType {
  cartItems: CartItem;
  addToCart: (productId: number) => void;
  getTotalItems: () => number;
  getDisplayCount: () => string;
  getCartProducts: () => Product[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem>({});

  const addToCart = (productId: number): void => {
    // Verificar que el producto existe en information.productos
    const product = information.productos.find((p) => p.id === productId);
    if (product) {
      setCartItems((prev) => ({
        ...prev,
        [productId]: (prev[productId] || 0) + 1,
      }));
    }
  };

  const getTotalItems = (): number => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const getDisplayCount = (): string => {
    const total = getTotalItems();
    return total > 9 ? '9+' : total.toString();
  };

  const getCartProducts = (): Product[] => {
    return Object.entries(cartItems).map(([productId, quantity]) => {
      const product = information.productos.find(
        (p) => p.id === parseInt(productId)
      );
      return {
        ...product!,
        quantity,
      };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getTotalItems,
        getDisplayCount,
        getCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
