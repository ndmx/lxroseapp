import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="mainHeader">
      <div id="logo">
        <Link to="/">
          <img
            src="/logo512.png"
            id="logo-img"
            alt="Logo for LxRose"
          />
        </Link>
      </div>
      <nav id="mainNav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header