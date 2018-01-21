import React, { Component } from 'react';

import SideBlock from 'src/components/sideblock/SideBlock';


class SideBlockContainer extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    }
  }

  toggleAgenda = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { type } = this.props;
    const { open } = this.state;

    return (<SideBlock type={type} open={open} toggleAgenda={this.toggleAgenda} />)
  }
}

export default SideBlockContainer;
