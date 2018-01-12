import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.scss';


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: true
    }
  }

  closeNavigation = () => {
    this.setState({ isOpen: false })
  }

  openNavigation = () => {
    this.setState({ isOpen: true })
  }

  render() {
    const { type } = this.props;
    const { isOpen } = this.state;

    const isTransparent = type === 'transparent';
    const isOpenClass = isOpen ? styles.isOpen : styles.closed;

    const classNames = [
      styles.navigation,
      isTransparent ? styles.transparent : styles.main
    ]
    .filter(Boolean)
    .join(' ');


    return (
      <nav className={classNames}>
        { !isOpen && <button className={styles.openButton} onClick={this.openNavigation}>open</button>}
        { isOpen && <button className={styles.closeButton} onClick={this.closeNavigation}>close</button>}

        <ul className={isOpenClass}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/over-crescendo">Over Crescendo</Link></li>
        </ul>
      </nav>
    )
  }

}


export default Navigation;
