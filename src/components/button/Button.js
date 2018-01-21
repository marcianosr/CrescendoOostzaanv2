import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.scss';


const Button = ({ children, normal, transparent, centered, uppercase, wide, onClick, href }) => {
  const classNames = [
    normal && styles.normal,
    transparent && styles.transparent,
    centered && styles.centered,
    uppercase && styles.uppercase,
    wide && styles.wide
  ]
  .filter(Boolean)
  .join(' ');

  return !href ? (
    <button className={classNames} onClick={onClick}>
        {children}
    </button>
  ) : (
    <Link to={href} className={classNames}>{children}</Link>
  )
}

export default Button;
