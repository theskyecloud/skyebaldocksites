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
            <div className="navbar-component"><Link style={linkStyle} to="/skyebaldocksites/about">About</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/skyebaldocksites/services">Services</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/skyebaldocksites/websitetypes">Website Types</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/skyebaldocksites/pricing">Pricing</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/skyebaldocksites/portfolio">Portfolio</Link></div>
            <div className="navbar-component"><Link style={linkStyle} to="/skyebaldocksites/contactme">Contact Me</Link></div>
        </div>
      </nav>
  );
}

export default Navbar;