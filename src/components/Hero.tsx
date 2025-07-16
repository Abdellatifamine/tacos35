import styles from './Hero.module.css';

import heroBgImage from '/hdr355.jpg'; 

const Hero = () => {
  
  const heroStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.41)), url(${heroBgImage})`
  };

  return (
    
    <section className={styles.hero} style={heroStyle}>
      <div className={styles.heroContent}>
        <h1>Commandez les meilleurs tacos de la ville</h1>
        <p>Tout est grillé au charbon de bois, saveur garantie !</p>
        <div className={styles.heroButtons}>
            <a href="#" className="btn btn-primary">Commandez maintenant</a>
            
        </div>
      </div>
    </section>
  );
};

export default Hero;