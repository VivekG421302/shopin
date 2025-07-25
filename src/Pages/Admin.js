import React, { useState, useEffect } from 'react'
import "../style/Admin.css"
import AdminNav from '../Components/AdminNav'
import { Link, Outlet } from 'react-router-dom'

function Admin() {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <div className="adminBody">
                <div className="adminBodydiv">
                    <aside className="adminSidebar">
                        <Link to='/home' className='logoLinkadmin'>
                        <div className="imglogodiv">
                            <img src="../images/ShopinWhiteLogo.png" alt="Go to Home Page" />
                        </div>
                        </Link>
                        <div className="option1 dashop">
                            <img src="../images/menu.svg" alt="Dashboard" /> Dashboard
                        </div>
                        <Link to="addproduct">
                            <div className="option2 dashop">
                                <img src="../images/addProducts.svg" alt="Product" />
                                Products
                            </div>
                        </Link>
                        <Link to="allproducts">
                            <div className="option3 dashop">
                                <img src="../images/product.svg" alt="Review" />
                                Products Review
                            </div>
                        </Link>
                        <div className="option4 dashop">
                            <img src="../images/Review.svg" alt="" />
                            Offers & Coupons
                        </div>
                        <div className="option5 dashop">
                            <img src="../images/Package.svg" alt="Orders" />
                            Orders
                        </div>
                        <div className="option6 dashop">
                            <img src="../images/Support.svg" alt="Orders" />
                            Help & Support
                        </div>
                        <div className="option7 dashop">
                            <img src="../images/Setting.svg" alt="Orders" />
                            Setting
                        </div>
                        {/* <div className="emptySidebar">.</div> */}
                    </aside>

                    <div className={`admincontents ${theme}`} id='mainadminarea'>
                        <header>
                            <AdminNav theme={theme} toggleTheme={toggleTheme} />
                        </header>
                        <Outlet />
                    </div>
                </div>
                <div className="adminFooter"></div>
            </div>
        </>
    )
}

export default Admin