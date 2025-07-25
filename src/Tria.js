import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "../style/Product.css"
import Navbar from '../Components/Navbar';

function Product() {

    let location = useLocation()
    let Asset = location.state
    // let n = Asset.rate

    useEffect(() => {
        // let emiResult = calemi(Asset.face);
        const currentDate = new Date();
        console.log(currentDate);
        // console.log(Asset, "Assets")
        // console.log(emiResult, "EMI calculation result");
    }, [Asset.face]);

    // function calemi(emicost) {
    //     let cleanedCost = parseFloat(Asset.face.replace(/,/g, ''));

    //     return (cleanedCost / 12).toFixed(2);
    // }

    function formatDate(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];

        return `${dayName}, ${day} ${month}`;
    }

    const currentDate = new Date();
    console.log("Current Date: ", formatDate(currentDate));

    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const dateIn3Days = addDays(currentDate, 3);
    console.log("Date after 3 days: ", formatDate(dateIn3Days));

    return (
        // <Navbar />
        <>
        <div className="previewBody">
                {/* -----------------------------Image----------------------------- */}
                <div className="previewimg previewChild">
                    <div className="imgWindow">
                        <img src={Asset.thumbnail} alt="" />
                    </div>
                    <div className="imgSlideBar">
                        <div className="previewimg1 slideimg" >
                            <img src={Asset.imgone} alt="" />
                        </div>
                        <div className="previewimg2 slideimg" >
                            <img src={Asset.imgtwo} alt="" />
                        </div>
                        <div className="previewimg3 slideimg" >
                            <img src={Asset.imgthree} alt="" />
                        </div>
                        <div className="previewimg4 slideimg" >
                            <img src={Asset.imgone} alt="" />
                        </div>
                    </div>
                </div>

                {/* -----------------------------Info----------------------------- */}
                <div className="previewdesc  previewChild">
                    <div className="productDescription">
                        <h1>{Asset.description}</h1>
                        <p>Visit the <u>{Asset.brand}</u> Store</p>
                        <div className="productRatings">
                            <div className='numberRating'>
                                <b>{Asset.rate}</b>
                            </div>

                            <i>{Asset.sales}</i>
                        </div>
                    </div>
                    <hr />
                    <div className="productPrice">
                        <div className="Badge1">
                            {/* {Asset.badge1} */}
                        </div>
                        <div className="itemRate">
                            <h2>
                                ₹ {Asset.price} <i>{Asset.discount}</i>
                            </h2>
                            <h3>
                                <i><s>₹ {Asset.compare}</s></i>
                            </h3>
                            <h4>Inclusive of all taxes</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="offersDiv">
                        <div className="offerslogo">
                            <img src="offers.svg" alt="" /><span>Offers</span>
                        </div>
                        <div className="productOffers">
                            <div className="emiofferdiv">
                                <h3>No Cost EMI</h3>
                                {/* <p>Upto ₹ {calemi(Asset.face)}</p> */}
                                <p>EMI available</p>
                            </div>
                            <div className="gstreturndiv"></div>
                        </div>
                    </div>
                    <hr />
                </div>

                {/* -----------------------------Order----------------------------- */}
                <div className="orderDetails  previewChild">
                    <h2>Order Details</h2>
                    <div className="orderBody">
                        {/* <p>{Asset.delivery}</p> */}
                        <i>The product will be delivered by {formatDate(dateIn3Days)}</i>
                    </div>
                    <table>
                        <th>In Stock</th>
                        <tr>
                            <td className='column1'>Payment: </td>
                            <td className='column2'>Secure transaction</td>
                        </tr>
                        <tr>
                            <td className='column1'>Sold by: </td>
                            <td className='column2'>{Asset.brand}</td>
                        </tr>
                        <tr>
                            <td className='column1'>Delivery by: </td>
                            <td className='column2'>Shopin</td>
                        </tr>
                    </table>
                </div>
            </div >
        </>
    )
}

// export default Product