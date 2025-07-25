import React from 'react';
import { Link } from 'react-router-dom';
import "../style/PrimaryNav.css";

// what ever value we are getting from the category selector and the search bar is been
function PrimaryNav({ theme, toggleTheme, onSearchChange, onCategoryChange }) {
    return (
        <div className="midNavbar">
            <Link className="midNavbarLink" to="/home">
                <div className="midNavLogo">
                    <img
                        src="./images/Shopin Logo.png"
                        alt="Click for Home"
                    />
                </div>
            </Link>

            <div className="midNavCity">
                <img
                    src="./images/Location.svg"
                    alt="Select City"
                />
                <select
                    name="city"
                    id="City"
                    className="city-select"
                >
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="pune">Pune</option>
                    <option value="ahmedabad">Ahmedabad</option>
                </select>
            </div>

            <div className="midNavSearch">
                <div className="category">
                    <select
                        name="Category"
                        id="Category"
                        className="selectCategory"
                        onChange={(e) => onCategoryChange(e.target.value)}
                    >
                        <option value="All">All Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Food">Food</option>
                    </select>
                </div>

                <input
                    type="text"
                    placeholder="Search on Shopin..."
                    className="searchInput"
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <div className="searchbtndiv">
                    <img
                        src="./images/search.png"
                        className="searchbtn"
                        alt="Search"
                    />
                </div>
            </div>

            <div className="midNavUser">
                <div className="adminModeDiv" onClick={toggleTheme}>
                    <img
                        src="../images/dark.svg"
                        alt="mode" className="adminmode adminico"
                    />
                </div>
                <Link to="/wishlist">
                    <div className="midNavFav userlognavdiv">
                        <img
                            src="./images/fav.png"
                            alt="wishlist"
                            className="userlogonav"
                        />
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="midNavCart userlognavdiv">
                        <img
                            src="./images/cart.svg"
                            alt="Cart" className="userlogonav"
                        />
                    </div>
                </Link>
                <Link to="/admin">
                    <div className="midNavAccount userlognavdiv">
                        <img
                            src="./images/profile.svg"
                            alt="Profile" className="userlogonav"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default PrimaryNav;
