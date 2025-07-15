import styles from './CartFAB.module.css';
import CartIcon from './CartIcon';

interface CartFABProps {
    itemCount: number;
    onClick: () => void;
}

const CartFAB = ({ itemCount, onClick }: CartFABProps) => {
    return (
        <button className={styles.cartFab} onClick={onClick}>
            <div className={styles.badge}>{itemCount}</div>
            <CartIcon />
        </button>
    );
};

export default CartFAB;