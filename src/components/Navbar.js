import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure> */}
          <span className="site-logo">
            MILK + OCHRE
          </span>
        </Link>

        {/* Put a hamburger menu toggle here */}
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        <Link className="navbar-item" to="/tags/writing">
          Writing
        </Link>
        <Link className="navbar-item" to="/tags/reading">
          Reading
        </Link>
        <Link className="navbar-item" to="/tags/creating">
          Creating
        </Link>
        <Link className="navbar-item" to="/tags/loving">
          Loving
        </Link>
        <Link className="navbar-item" to="/tags/sitting">
          Sitting
        </Link>
        <Link className="navbar-item" to="/tags/walking">
          Walking
        </Link>
        <Link className="navbar-item" to="/tags/eating">
          Eating
        </Link>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
