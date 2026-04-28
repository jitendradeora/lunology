import { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number;
  name: string;
  nameAr?: string;
  price: number;
  quantity: number;
  image: string;
  variants?: Record<string, string>;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number, variants?: Record<string, string>) => void;
  updateQuantity: (id: number, quantity: number, variants?: Record<string, string>) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lunology-cart');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lunology-cart', JSON.stringify(items));
    }
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) =>
          i.id === item.id &&
          JSON.stringify(i.variants || {}) === JSON.stringify(item.variants || {})
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += item.quantity || 1;
        return newItems;
      }

      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (id: number, variants?: Record<string, string>) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            JSON.stringify(item.variants || {}) === JSON.stringify(variants || {})
          )
      )
    );
  };

  const updateQuantity = (id: number, quantity: number, variants?: Record<string, string>) => {
    if (quantity <= 0) {
      removeFromCart(id, variants);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        JSON.stringify(item.variants || {}) === JSON.stringify(variants || {})
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
