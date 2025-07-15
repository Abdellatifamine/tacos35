import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
            <p>All rights reserved &copy; 2025 - @Tacos_a35</p>
            <div className={styles.socialIcons}>
                <a href="https://wa.me/212664132466">WhatsApp</a> | <a href="https://www.instagram.com/tacos_a35/">Instagram</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;