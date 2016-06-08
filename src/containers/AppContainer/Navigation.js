/* eslint-disable no-alert */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="site-navigation">
        <ul>
          <li>
            <Link to="/">
              <strong>Home</strong>
            </Link>
          </li>
          <li>
            <Link to="/guestbook">Sign my Guestbook</Link>
          </li>
          <li>
            <Link to="/recent-work">Recent work</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
          <li>
            <a href="https://github.com/dyscrete/sams-website">Github</a>
          </li>
        </ul>
      </div>
    )
  }
}
