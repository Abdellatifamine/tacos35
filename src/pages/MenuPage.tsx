import Menu from '../components/Menu';
import { useOutletContext } from 'react-router-dom';
import type { Product } from '../types'; 


type AppContext = { onAddToCart: (product: Product) => void };

const MenuPage = () => {
    const { onAddToCart } = useOutletContext<AppContext>();

    return (
        <section className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
             <Menu onAddToCart={onAddToCart} />
        </section>
    );
};

export default MenuPage;