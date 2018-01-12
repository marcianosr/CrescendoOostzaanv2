import React from 'react';
import styles from './Title.scss';

const Title = ({ children, type }) => {
  let Header = type ? type : 'h1';

  return (
    <Header className={styles.title}>{children}</Header>
  )
};

export default Title;
