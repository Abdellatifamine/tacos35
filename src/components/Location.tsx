import styles from './Location.module.css';

const Location = () => {
  return (
    <div className={styles.location}>
      <h2>Our Location</h2>
      
      
      <div className={styles.mapContainer}>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.8824536459183!2d-9.3715108!3d30.211902199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c30034e09ff7%3A0xd186b009467a0690!2sTACOS%2035!5e0!3m2!1sen!2sma!4v1752590801606!5m2!1sen!2sma" 
            width="100%" 
            height="400" 
            style={{ border: 0 }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <p><strong>Address:</strong> Biougra, l'Khamis Road, in front of the taxi station</p>
      <p><strong>Opening Hours:</strong> 12:00 PM - 12:00 AM</p>
    </div>
  );
};

export default Location;