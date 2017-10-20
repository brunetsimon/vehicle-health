import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/idtc-logo-60px.png'


const Navbar = () => (
  <nav className="navbar navbar-default navbar-static-top m-b-0">
    <div className="navbar-header">
      <div className="top-left-part">
        <Link to='/' className="logo">
          <b><img src={logo} alt="logo" /></b>
          <span>Health checker</span>
        </Link>
      </div>
      <ul className="nav navbar-top-links navbar-right pull-right">
        <li className="right-side-toggle">
          <Link to='/' className="waves-effect waves-light">
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
