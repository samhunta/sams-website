import React, { Component } from 'react'
import Navigation from './Navigation'

export default class Header extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="container">
        <div className="site-header">
          <div className="site-logo">
            <img
              src={require('../../../assets/sam.gif')}
              width={220}
              height={84}
              alt="Sam Hunter Dancing"
              className="site-logo-gif1"
            />
            <div className="site-title">
              <h1>Sam's Website</h1>
            </div>
            <img
              src={require('../../../assets/sam.gif')}
              width={220}
              height={84}
              alt="Sam Hunter Dancing"
              className="site-logo-gif2"
            />
          </div>
          <hr />
          <Navigation />
          <hr />
        </div>
      </div>
    )
  }
}
