import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Navbar() {


  const linkStyle = {
    textDecoration:'none',
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    color: '#2d353e',
    backgroundColor: '#aec3d6',
  };

  return (
      <nav>
        <div className="navbar-container">
          <div className="navbar-component"><Link style={linkStyle} to="/login">Login</Link></div>
          <div className="navbar-component"><Link style={linkStyle} to="/about">About</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/services">Services</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/websitetypes">Website Types</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/pricing">Pricing</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/portfolio">Portfolio</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/contactme">Contact Me</Link></div>
        </div>
      </nav>
  );
}

export default Navbar;