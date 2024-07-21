import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.footerText}>MMDB</h2>
      <div className={styles.footerLinks}>
        <Link className={styles.footerLinks} href="/about">About</Link>
        <Link className={styles.footerLinks} href="/terms">Terms of Use</Link>
        <Link className={styles.footerLinks} href="/privacy">Privacy Policy</Link>
        <Link className={styles.footerLinks} href="/help">Help</Link>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} MMDB. All rights reserved.
      </div>

    </footer>
  );

};

export default Footer;