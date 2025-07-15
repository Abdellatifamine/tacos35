import { useState } from 'react';
import styles from './Menu.module.css';
import type { Product } from '../types'; 


import tacosBeldiRoyalImg from '/media.jpeg';
import tacosNormalImg from '/media-2.jpeg';
import trioTastyImg from '/media-3.jpeg';
import tacosBowlImg from '/media-4.jpeg';
import burgerImg from '/media-5.jpeg';
import tropicaleImg from '/media-6.jpeg';
import sodaImg from '/media-7.jpeg';
import fritesImg from '/media-8.jpeg';
import eauImg from '/media-9.jpeg';
import tiramisuImg from '/media-10.jpeg';


const menuData = {
  'Tacos beldi Royal': [
    { img: tacosBeldiRoyalImg, name: 'Tacos Mixte Royal', price: '28 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos Dinde Royal', price: '30 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos Kefta Royal', price: '28 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos Saucisses Royal', price: '28 DH' }
  ],
  'Tacos beldi': [
    { img: tacosBeldiRoyalImg, name: 'Tacos beldi mixte', price: '25 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos beldi kefta', price: '25 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos beldi saucisses', price: '25 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos beldi thon fromage', price: '15 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos beldi 35 xxl', price: '42 DH' },
    { img: tacosBeldiRoyalImg, name: 'Tacos beldi dinde', price: '26 DH' }
  ],
  'Tacos Normal': [
    { img: tacosNormalImg, name: 'Tacos Normal Krfta', price: '30 DH' },
    { img: tacosNormalImg, name: 'Tacos Normal Dinde', price: '33 DH' },
    { img: tacosNormalImg, name: 'Tacos Normal Mixte', price: '35 DH' },
    { img: tacosNormalImg, name: 'Tacos Normal Saucisses', price: '30 DH' }
  ],
  'Trio Tasty': [
    { img: trioTastyImg, name: 'Trio Tasty', price: '35 DH' }
  ],
  'Tacos Bowl': [
    { img: tacosBowlImg, name: 'Tacos Bowl Kefta', price: '35 DH' },
    { img: tacosBowlImg, name: 'Tacos Bowl Saucisses', price: '35 DH' },
    { img: tacosBowlImg, name: 'Tacos Bowl Mixte', price: '40 DH' },
    { img: tacosBowlImg, name: 'Tacos Bowl Dinde', price: '35 DH' }
  ],
  'Burger': [
    { img: burgerImg, name: 'Burger grill', price: '20 DH' },
    { img: burgerImg, name: 'Burger Double', price: '25 DH' }
  ],
  'Extra': [
    { img: tropicaleImg, name: 'Tropicale', price: '9 DH' },
    { img: sodaImg, name: 'Soda 33cl', price: '7 DH' },
    { img: eauImg, name: 'Eau 50cl', price: '5 DH' },
    { img: fritesImg, name: 'Frites', price: '5 DH' },
    { img: tiramisuImg, name: 'Tiramisu', price: '25 DH' }
  ],
};

const categories = Object.keys(menuData);

interface MenuProps {
    onAddToCart: (product: Product) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState('Tacos beldi Royal');
  const activeItems = menuData[activeCategory as keyof typeof menuData];

  return (
    <div className={styles.menuSection}>
      <h2>Notre menu</h2>
      <div className={styles.filterContainer}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.menuGrid}>
        {activeItems.map((item, index) => (
          <div className={styles.menuItem} key={index}>
            <button onClick={() => onAddToCart(item)} className={styles.addToCartButton}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className={styles.itemImage}
                />
            </button>
            <div className={styles.itemDetails}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemPrice}>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;