import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="/terms-and-conditions" className={styles.link}>
          T&C
        </a>
        <a href="/privacy-policy" className={styles.link}>
          Privacy Policy
        </a>
        <a href="/contact-us" className={styles.link}>
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
