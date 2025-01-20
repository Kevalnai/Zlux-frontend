import React from "react";

function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <li><link to="/" />Home</li>
                    <li><link to="/products" />Products</li>
                    <li><link to="/contact" />Contact us</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar