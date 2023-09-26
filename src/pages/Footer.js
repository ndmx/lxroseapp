import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <nav className="footer-nav">
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="copyright-div">
          <p>Copyright &copy; LxRose.Inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
