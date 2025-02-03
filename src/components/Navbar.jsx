/* eslint-disable no-unused-vars */
import React from 'react';
import '../Styles/Navbar.css'; // Import your CSS file here

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
