import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCartModal from './components/ShoppingCartModal';
import CartFAB from './components/CartFAB';

import type { Product, CartItem } from './types'; 

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.name === product.name);
      if (itemInCart) {
        return prevItems.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productName: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.name === productName ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main>
      <Header 
        cartItemCount={totalItemsInCart}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      
      <Outlet context={{ onAddToCart: handleAddToCart }} />

      <Footer />

      <ShoppingCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {totalItemsInCart > 0 && (
          <CartFAB 
            itemCount={totalItemsInCart}
            onClick={() => setIsCartOpen(true)}
          />
      )}
    </main>
  );
}

export default App;