import React from "react";
import "../Style/navbar.css";
import { useState } from "react";


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="navbar-header">
        {/* <h1>Analytics</h1> */}
        <button className="toggle-button" onClick={toggleNav}>
          ☰
        </button>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
