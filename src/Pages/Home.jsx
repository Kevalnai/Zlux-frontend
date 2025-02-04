/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";  // ✅ Import Navbar
import HeroSection from "../components/HeroSection"; // ✅ Import HeroSection
import Body from "../components/Body"; // ✅ Import Body content
import Footer from "../components/Footer"; // ✅ Import Footer

function Home() {
    return (
        <>
            <Navbar /> {/* Include Navbar */}
            <Body /> {/* Main content */}

        </>
    );
};

export default Home;
