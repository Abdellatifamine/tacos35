import styles from './Hero.module.css';

import heroBgImage from '/hdr355.png'; 

const Hero = () => {
  
  const heroStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.41)), url(${heroBgImage})`
  };

  return (
    
    <section className={styles.hero} style={heroStyle}>
      <div className={styles.heroContent}>
        <h1>Order the Best Tacos in Town Now</h1>
        <p>Everything is grilled on charcoal, guaranteed flavor!</p>
        <div className={styles.heroButtons}>
            <a href="#" className="btn btn-primary">Order Now</a>
            
        </div>
      </div>
    </section>
  );
};

export default Hero;