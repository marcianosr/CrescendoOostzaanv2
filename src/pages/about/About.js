import React, { Component } from 'react';

import Block from 'src/components/block/Block';
import Title from 'src/components/title/Title';
import styles from './About.scss';

const About = ({ children, color }) => {
  const classNames = [
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <div className={classNames}>
      <Block>
        <Title>Over Crescendo</Title>
      </Block>
    </div>
  )
}

export default About;
