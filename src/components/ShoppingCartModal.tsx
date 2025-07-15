import { useState } from 'react';
import styles from './ShoppingCartModal.module.css';

import type { CartItem } from '../types';


const CheckoutForm = ({ cartItems }: { cartItems: CartItem[] }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('livraison');

    const handleWhatsAppOrder = () => {
        if (!name || !phone || (deliveryOption === 'livraison' && !address)) {
            alert('Please fill in all required fields.');
            return;
        }

        // <<< === BDEL B'NEMRA DYALK DYAL WHATSAPP HNA === >>>
        const your_phone_number = '212664132466'; 

        const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
        
        const orderSummary = `Salam Tacos 35, I would like to place an order:\n\n` +
                             `${cartItems.map(item => `- ${item.quantity}x ${item.name}`).join('\n')}\n\n` +
                             `*Total: ${totalPrice.toFixed(2)} DH*\n\n` +
                             `*Collection Method: ${deliveryOption === 'livraison' ? 'Delivery' : 'Pickup'}*\n\n` +
                             `My Information:\n` +
                             `Name: ${name}\n` +
                             `Phone: ${phone}\n` +
                             (deliveryOption === 'livraison' ? `Address: ${address}` : '');

        const whatsappUrl = `https://wa.me/${your_phone_number}?text=${encodeURIComponent(orderSummary)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={styles.checkoutForm}>
            <h3>Order Information</h3>
            
            <div className={styles.deliveryOptions}>
                <label>
                    <input 
                        type="radio" 
                        value="livraison" 
                        name="deliveryOption"
                        checked={deliveryOption === 'livraison'} 
                        onChange={(e) => setDeliveryOption(e.target.value)} 
                    />
                    Delivery
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="ranjilih" 
                        name="deliveryOption"
                        checked={deliveryOption === 'ranjilih'} 
                        onChange={(e) => setDeliveryOption(e.target.value)} 
                    />
                    Pickup
                </label>
            </div>

            <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
            
            {deliveryOption === 'livraison' && (
                <textarea 
                    placeholder="Detailed Address (Neighborhood, Street...)" 
                    value={address} 
                    onChange={e => setAddress(e.target.value)}
                    required
                ></textarea>
            )}

            <button className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}} onClick={handleWhatsAppOrder}>
                Send Order via WhatsApp
            </button>
        </div>
    );
};


const ShoppingCartModal = ({ isOpen, onClose, cartItems, onUpdateQuantity }: Props) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
        <h2>Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <p style={{textAlign: 'center', margin: '2rem 0'}}>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.cartItemsList}>
              {cartItems.map(item => (
                <div key={item.name} className={styles.cartItem}>
                  <img src={item.img} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <div className={styles.quantityControl}>
                    <button onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.totalPrice}>Total: {totalPrice.toFixed(2)} DH</p>
            <hr className={styles.divider} />
            <CheckoutForm cartItems={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};


interface Props {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (name: string, quantity: number) => void;
}

export default ShoppingCartModal;