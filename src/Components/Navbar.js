// src/Components/Navbar.js
import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import PrimaryNav from './PrimaryNav';

function Navbar({ theme, toggleTheme, onSearch, onCategoryChange }) {
    return (
        <div className="navbarBody">
            {/* Upper Navbar */}
            <div className="upperNavbar">
                <div className="leftUpNav">
                    <ul className="upleftNavlist navlist">
                        <li>About us</li>
                        <li>Wishlist</li>
                        <li>Order Tracking</li>
                        <li>My Account</li>
                    </ul>
                </div>
                <div className="upmidNav">20% off on daily essentials</div>
                <div className="rightUpNav navlist">
                    <ul className="uprightNavlist navlist">
                        <li>Call us on:</li>
                        <li>+91 77700 33040</li>
                        <li>
                            <select name="Lang" id="Navlang">
                                <option value="En">English</option>
                            </select>
                        </li>
                        <li>
                            <select name="Coin" id="Navcoin">
                                <option value="INR">₹ INR</option>
                                <option value="USD">$ USD</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Middle Navbar */}
            <PrimaryNav
                theme={theme}
                toggleTheme={toggleTheme}
                onSearchChange={onSearch} 
                onCategoryChange={onCategoryChange} 
            />

            {/* Lower Navbar */}
            <div className="lowerNavbar navlist">
                <div className="lowLeftNavBrowse">
                    <img src="./images/menu.svg" alt="" />Browse all
                </div>
                <div className="lowMidNavPages">
                    <ul className="lowNavlist navlist">
                        <li>
                            <div className="lowNavlistDeals">
                                <img src="./images/deal.svg" alt="Deals" className="dealslogo" />
                                Deals
                            </div>
                        </li>
                        <li><Link to="/" className="HomeLinkonHomeNav">Home</Link></li>
                        <li>Store</li>
                        <li>Carts</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className="lowrightNavCall">
                    <img src="./images/call.svg" alt="Need help?" />
                    <div>
                        <p>77700-33040</p>
                        <p className="supportparagraph">24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
