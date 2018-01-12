import React, { Component } from 'react';
import styles from './Block.scss';

const Block = ({ children }) => {
  return (
    <div className={styles.crescBlock}>
      {children}
    </div>
  )
}

export default Block;
