import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import logoImage from '/logo-after .png';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        
        <Link to="/" className={styles.logoLink}>
          <img src={logoImage} alt="Tacos 35 Logo" className={styles.logoImage} />
        </Link>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li>
            <button onClick={onCartClick} className={styles.cartButton}>
              Cart
              {cartItemCount > 0 && (
                <span className={styles.cartBadge}>{cartItemCount}</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;