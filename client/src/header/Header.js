import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div>
        <nav>
       <div className="logo1">Air Quality</div>
        <input type="checkbox" id="click1" />
        <label htmlFor="click1" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/community" >Community</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
     </nav>
     <div className="content">
     </div>
    </div>
  )
}

export default Header