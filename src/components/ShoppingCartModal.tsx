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
        const your_phone_number = '212605132343'; 

        const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
        
        const orderSummary = `Salam Tacos 35, je voudrais passer une commande:\n\n` +
                             `${cartItems.map(item => `- ${item.quantity}x ${item.name}`).join('\n')}\n\n` +
                             `*Totale: ${totalPrice.toFixed(2)} DH*\n\n` +
                             `*Méthode de collecte: ${deliveryOption === 'livraison' ? 'Delivery' : 'Pickup'}*\n\n` +
                             `Mes informations:\n` +
                             `Nom: ${name}\n` +
                             `Téléphone: ${phone}\n` +
                             (deliveryOption === 'livraison' ? `Address: ${address}` : '');

        const whatsappUrl = `https://wa.me/${your_phone_number}?text=${encodeURIComponent(orderSummary)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={styles.checkoutForm}>
            <h3>Informations sur la commande</h3>
            
            <div className={styles.deliveryOptions}>
                <label>
                    <input 
                        type="radio" 
                        value="livraison" 
                        name="deliveryOption"
                        checked={deliveryOption === 'livraison'} 
                        onChange={(e) => setDeliveryOption(e.target.value)} 
                    />
                    Livraison
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="ranjilih" 
                        name="deliveryOption"
                        checked={deliveryOption === 'ranjilih'} 
                        onChange={(e) => setDeliveryOption(e.target.value)} 
                    />
                    Ramasser
                </label>
            </div>

            <input type="text" placeholder="Nom et prénom" value={name} onChange={e => setName(e.target.value)} required />
            <input type="tel" placeholder="Numéro de téléphone" value={phone} onChange={e => setPhone(e.target.value)} required />
            
            {deliveryOption === 'livraison' && (
                <textarea 
                    placeholder="Adresse détaillée (quartier, rue...)"
                    value={address} 
                    onChange={e => setAddress(e.target.value)}
                    required
                ></textarea>
            )}

            <button className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}} onClick={handleWhatsAppOrder}>
                Envoyer la commande via WhatsApp
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
        <h2>Panier</h2>
        
        {cartItems.length === 0 ? (
          <p style={{textAlign: 'center', margin: '2rem 0'}}>Votre panier est vide.</p>
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