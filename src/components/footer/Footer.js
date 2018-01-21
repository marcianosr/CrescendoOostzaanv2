import React from 'react';
import styles from './Footer.scss';

const Footer = ({ children }) => {

  return (
    <footer className={styles.footer}>{children}</footer>
  )
};

export default Footer;
