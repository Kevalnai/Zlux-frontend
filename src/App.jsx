/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';
import HeroSection from './components/HeroSection';
import Body from './components/Body'; // Importing the Body component

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();

  // Define the path for pages where the Navbar should not be visible
  const noNavbarPaths = ['*']; // Include "*" for the NotFound page and any other special routes
  const isNoNavbar = noNavbarPaths.some((path) => location.pathname === path);

  // Determine if the current page is the Home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Conditionally render HeroSection only on the Home page */}
      {isHomePage && <HeroSection />}

      {/* Conditionally render Navbar only if the page isn't one of the 'noNavbarPaths' */}
      {!isNoNavbar && <Navbar />}

      {/* Add Body component, always displayed after HeroSection on Home page */}
      {isHomePage && <Body />} {/* Show Body only on the Home page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
