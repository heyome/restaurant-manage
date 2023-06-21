import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/videos" className="nav-link">Videos</Link>
        </li>
        <li className="nav-item">
          <Link to="/pictures" className="nav-link">Pictures</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
