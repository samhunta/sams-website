/* eslint-disable no-alert */
import React, { Component } from 'react'

export default class Footer extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    this._clickBanner = ::this._clickBanner
  }

  _clickBanner(e) {
    const conf = window.confirm(
      'To potential employers: These 88x31 banners are\r\n' +
      'satirical and represent how websites used to\r\n' +
      'appear in the 90s and early 2000s. I hope\r\n' +
      'you\'ve enjoyed my portfolio!'
    )
    if (conf) e.preventDefault()
  }

  _createBanner(img) {
    return (
      <a
        href="http://areallykewlwebpage.tripod.com"
        target="blank"
        onClick={this._clickBanner}
      >
        <img
          src={img}
          alt=""
        />
      </a>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="site-footer">
          <div className="site-copyright">
            <hr />
            <p>Copyright &copy; 1993 Samuel Hunter, All Rights Reserved</p>
            <p><small>Anyone who rips my cool gifs will be sued!</small></p>
            <hr />
          </div>
          <div className="site-counter">
            <p>
              This page has been visited&nbsp;
              <img src={require('../../../assets/hit-counter.png')} alt="" />
              &nbsp;times!!1
            </p>
          </div>
          <div className="site-88x31">
            {this._createBanner(require('../../../assets/ie4.gif'))}
            {this._createBanner(require('../../../assets/dhtml.gif'))}
            {this._createBanner(require('../../../assets/mac.gif'))}
            {this._createBanner(require('../../../assets/subdomains.jpg'))}
            {this._createBanner(require('../../../assets/tripod.png'))}
            {this._createBanner(require('../../../assets/aimlink.gif'))}
            {this._createBanner(require('../../../assets/stat.gif'))}
          </div>
        </div>
      </div>
    )
  }
}
