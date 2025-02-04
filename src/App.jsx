/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Support from './Pages/Support';
import Products from './Pages/Products';
import Zlux from './Pages/Zlux';
import Pricing from './Pages/Pricing';
import HeroSection from './components/HeroSection';
import Body from './components/Body'; // Importing the Body component
import NewsComponent from './components/NewsComponent';
import Footer from "./components/Footer";

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
      

      {/* Conditionally render Navbar only if the page isn't one of the 'noNavbarPaths' */}
      {!isNoNavbar && <Navbar />}
      {!isNoNavbar && <Body />}

      {/* Add Body component, always displayed after HeroSection on Home page */}
      {/* Show Body only on the Home page */}
      <NewsComponent />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/zlux" element={<Zlux />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        
      </Routes>
    </>
  );
}

export default App;
