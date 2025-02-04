/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUser, FaSearch } from 'react-icons/fa'; // Import icons from react-icons
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left Section: Logo + Links */}
      <div className="navbar-left">
        <img src="/logo.png" alt="ZAILux Logo" className="logo" /> {/* Logo */}
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/zlux">ZLux</a>
        <a href="/pricing">Pricing</a>
        <a href="/support">Support</a>
      </div>

      {/* Right Section: Profile Icon, Search Icon, Language Dropdown */}
      <div className="navbar-right">
        <FaUser className="icon" /> {/* Profile Icon */}
        <FaSearch className="icon" /> {/* Search Icon */}
        <select className="language-dropdown"> {/* Language Selector */}
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
