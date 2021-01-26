import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';

function Header() {
    return (
        <div className="Header" id="header">
            <h1>Benjamin A. Brumby</h1>
            <ul class="nav justify-content-end">

                <li class="nav-item">
                    <Link to="/React-Portfolio/" class="nav-link inactive" href="index.html"> <strong>About Me</strong></Link>
                </li>
                <li class="nav-item">
                    <Link to="/portfolio" class="nav-link" href="portfolio.html"><strong>Portfolio</strong></Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" class="nav-link" href="contact.html" tabindex="-1" aria-disabled="true"><strong>Contact</strong></Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;