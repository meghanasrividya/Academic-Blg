import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // Make sure to import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">My Blog</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/create" className="navbar-item">Create Post</Link>
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/register" className="navbar-item">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
