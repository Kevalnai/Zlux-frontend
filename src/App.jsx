import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import AppRouter from './router/AppRouter';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();


  const noNavbarPaths = ['*']; // `*` includes all unmatched paths (e.g., NotFound page)
  const isNoNavbar = noNavbarPaths.some((path) => location.pathname === path);


  return (
    <>
      {!isNoNavbar && <Navbar />}
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