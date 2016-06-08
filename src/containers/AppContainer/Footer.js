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

  _createBanners(...args) {
    return args.map((banner) => (
      <a
        href="http://areallykewlwebpage.tripod.com"
        target="blank"
        onClick={this._clickBanner}
      >
        <img
          src={banner}
          alt=""
        />
      </a>
    ))
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
            {this._createBanners(
              require('../../../assets/ie4.gif'),
              require('../../../assets/dhtml.gif'),
              require('../../../assets/mac.gif'),
              require('../../../assets/subdomains.jpg'),
              require('../../../assets/tripod.png'),
              require('../../../assets/aimlink.gif'),
              require('../../../assets/stat.gif')
            )}
          </div>
        </div>
      </div>
    )
  }
}
