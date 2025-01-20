import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import NotFound from '../Pages/NotFound';

function AppRouter() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} /> {/* 404 Not Found */}
    </Routes>
    );
}

export default AppRouter;
