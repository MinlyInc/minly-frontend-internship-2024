import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>MMDB</span>
    </div>
  );
};

export default NavBar;
