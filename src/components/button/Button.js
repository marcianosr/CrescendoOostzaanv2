import React from 'react';
import styles from './Button.scss';

const Block = ({ children, normal }) => {

  const classNames = [
    normal && styles.normal
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <button className={classNames}>
      {children}
    </button>
  )
}

export default Block;
