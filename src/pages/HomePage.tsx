import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Location from '../components/Location';
import { useOutletContext } from 'react-router-dom';
import type { Product } from '../types';


type AppContext = { onAddToCart: (product: Product) => void };

const HomePage = () => {

    const { onAddToCart } = useOutletContext<AppContext>();

    return (
        <>
            <Hero />
            
            
            <section className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
                
                <Menu onAddToCart={onAddToCart} />
            </section>

            
            <section className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <Location />
            </section>
        </>
    );
};

export default HomePage;