/* eslint-disable no-alert */
import React from 'react'
import { Link } from 'react-router'

const Navigation = () => (
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
        <a href="https://github.com/samhunta/sams-website">Github</a>
      </li>
    </ul>
  </div>
)

export default Navigation
