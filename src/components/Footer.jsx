/* eslint-disable no-unused-vars */
import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                {/* DIALux Column */}
                <div className="footer-column">
                    <h3>DIALux</h3>
                    <ul>
                        <li><a href="/dialux">DIALux evo</a></li>
                        <li><a href="/dialux-pro">DIALux Pro</a></li>
                        <li><a href="/unlock-non-members">Unlock Non-Members</a></li>
                        <li><a href="/dialux-members">DIALux Members</a></li>
                    </ul>
                </div>

                {/* Resources Column */}
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/newsletter">Newsletter</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/community">Community</a></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/career">Career</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <p>DIAL GmbH, Bahnhofsallee 18, 58507 Lüdenscheid</p>
                <p>
                    T +49 2351 5674 0, dialog(at)dial.de,{" "}
                    <a href="http://www.dial.de" target="_blank" rel="noopener noreferrer">
                        www.dial.de
                    </a>
                </p>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://xing.com" target="_blank" rel="noopener noreferrer">Xing</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
                <div className="footer-bottom-links">
                    <a href="/legal-notice">Legal Notice</a> |{" "}
                    <a href="/data-protection">Data protection policy</a> |{" "}
                    <a href="/cookies">About Cookies</a>
                </div>
                <p>© 2025 DIAL GmbH. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
