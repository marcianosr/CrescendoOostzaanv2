import React, { Component } from 'react';
import styles from './Block.scss';

const Block = ({ children, color }) => {
  const classNames = [
    styles.crescBlock,
    color && color === 'white' ? styles.white : null
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default Block;
