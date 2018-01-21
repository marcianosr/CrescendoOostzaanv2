import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Block from 'src/components/block/Block';
import Title from 'src/components/title/Title';
import Button from 'src/components/button/Button';
import styles from './SideBlock.scss';


const SideBlock = ({ children, type, open, toggleAgenda }) => {
  const classNames = [
    styles.sideblock,
    type === 'agenda' ? styles.agendaBlock : null,
    type === 'agenda' && open ? styles.open : null
  ]
  .filter(Boolean)
  .join(' ');

  const isOpen = open ? 'Toon' : 'Verberg';


  return (
    <div className={classNames}>
        <Button transparent uppercase onClick={toggleAgenda}>{isOpen} agenda</Button>
        <ul>
          <li>
            <strong>Vrienden van Crescendo Live!</strong>
            <span>4 november 2017</span>
            <span>22:15</span>
            <span>De grote kerk Oostzaan</span>
          </li>
          <li>
            <strong>Vrienden van Crescendo Live!</strong>
            <span>4 november 2017</span>
            <span>22:15</span>
            <span>De grote kerk Oostzaan</span>
          </li>
        </ul>
        <Link to='/agenda'>Meer agendapunten</Link>
    </div>
  )
}

export default SideBlock;
