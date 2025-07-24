import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Product.css";
import StarRating from '../Components/StarRating';
import PrimaryNav from '../Components/PrimaryNav';
import Main from '../Components/Main';

function Product(props) {
    let HomeProductData = props.HomeProducts;
    let location = useLocation();
    let Asset = location.state;

    const [currentImage, setCurrentImage] = useState(Asset.thumbnail);

    // State to track the purchase status
    // const [isPurchased, setIsPurchased] = useState(Asset.isPurchased || false);
    const [inCart, setInCart] = useState(Asset.inCart || false);

    useEffect(() => {
        let emiResult = calemi(Asset.price);
        const currentDate = new Date();
        console.log(currentDate);
        console.log(emiResult, "EMI calculation result");
    }, [Asset.price]);

function calemi() {
    const priceStr = (Asset?.price || "0").toString().replace(/,/g, '');
    const price = parseFloat(priceStr);
    return isNaN(price) ? '0.00' : (price / 12).toFixed(2);
}


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

    // Function to toggle the purchase status
    // const togglePurchase = () => {
        // const updatedPurchaseStatus = !isPurchased;

    const toggleCart = () => {
        const updatedCartStatus = !inCart;
        fetch(`https://shopinjsondb-production.up.railway.app/products/${Asset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inCart: updatedCartStatus }),
        })
            .then((res) => res.json())
            .then(() => {
                setInCart(updatedCartStatus);
            })
            .catch((error) => console.error("Error updating purchase status:", error));
    };

    return (
        <>
            <PrimaryNav />
            <div className="productBody">
                <div className="productMainArea">
                    <div className="productImgArea">
                        <div className="productimgthumbnail">
                            <img src={currentImage} alt="" className="productImgAreaThumbnail" />
                        </div>
                        <div className="productImgAreaImgSliders">
                            <div className="imgsliderdiv">
                                <img
                                    src={Asset.thumbnail}
                                    alt=""
                                    className="productimgSlider1"
                                    onMouseEnter={() => setCurrentImage(Asset.thumbnail)}
                                />
                            </div>
                            <div className="imgsliderdiv">
                                <img
                                    src={Asset.imgone}
                                    alt=""
                                    className="productimgSlider2"
                                    onMouseEnter={() => setCurrentImage(Asset.imgone)}
                                />
                            </div>
                            <div className="imgsliderdiv">
                                <img
                                    src={Asset.imgtwo}
                                    alt=""
                                    className="productimgSlider3"
                                    onMouseEnter={() => setCurrentImage(Asset.imgtwo)}
                                />
                            </div>
                            <div className="imgsliderdiv">
                                <img
                                    src={Asset.imgthree}
                                    alt=""
                                    className="productimgSlider4"
                                    onMouseEnter={() => setCurrentImage(Asset.imgthree)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="productInfoArea">
                        <div className="productTitleArea">
                            <div className="titleAreaDescription">
                                <p>Visit the {Asset.brand} store </p>
                                <h2>{Asset.description}</h2>
                            </div>
                            <div className="productRatingArea">
                                <StarRating rates={Asset.rate} />
                                <p className='card-rate-info'>
                                    ({Asset.rate}) {Asset.sales}+ {Asset.unit} sold past month
                                </p>
                            </div>
                        </div>
                        <div className="productPriceArea">
                            <h2>
                                <b>₹ {Asset.price}</b>
                                <p>(-{Asset.discount} %)</p>
                            </h2>
                            <s>₹ {Asset.compare} </s>
                        </div>
                        <div className="productStockQty">
                            <p>In stock <b>{Asset.stock} {Asset.unit}</b> available</p>
                        </div>
                        <div className="productPurchaseArea">
                            <button className="productPurchasebtn">Buy Now!!</button>
                            <button className="productCartbtn" onClick={toggleCart}>
                                {inCart ? "In Cart": "Add to Cart"}</button>
                        </div>
                        <div className="productPaymentArea">
                            <div className="paymentoption1emi">
                                <h4>No Cost EMI</h4>
                                <p>Upto <b>₹ {calemi(Asset.price)}</b></p>
                                <p>EMI Available</p>
                                <p>12 month</p>
                            </div>
                            <div className="paymentoption2bank">
                                <h4>Bank Discounts</h4>
                                <p>Get upto <b>₹ 1000</b> discount using</p>
                                <p>Credit Card</p>
                            </div>
                            <div className="paymentoption3coupon">
                                <h4>Coupon Code</h4>
                                <p>Get coupon for next purchase</p>
                                <p> upto <b>₹ 500</b> cashback</p>
                            </div>
                        </div>
                    </div>
                    <div className="productOrderArea">
                        <h2><u>Order Details</u></h2>
                        <div className="productNameAndDetails productOrderParts">
                            <p className='productDetailsChild1 productDetailsChild'>
                                <span>
                                    <b>Product Name: </b> <i>{Asset.productName}</i>
                                </span>
                            </p>
                            <p className='productDetailsChild2 productDetailsChild'>
                                <span>
                                    <b>Category: </b> <i>{Asset.category} </i>
                                </span>
                            </p>
                            <p className='productDetailsChild3 productDetailsChild'>
                                <span>
                                    <b>Sub-Category: </b> <i>{Asset.subCategory} </i>
                                </span>
                            </p>
                        </div>
                        <div className="productDeliveryDetails productOrderParts">
                            <div className="productDeliveryType">
                                <b>Free Delivery</b>
                                <p>Shipped by <i>Nimbus</i></p>
                                <i>Your product will be delivered by <b>{formatDate(dateIn3Days)}</b></i>
                            </div>
                            <div className="productPartnersandSellersDetails">
                                <p className="Seller">
                                    <span>
                                        <b>Seller:</b> <i>{Asset.brand}</i>
                                    </span>
                                </p>
                                <p className="Partner">
                                    <span>
                                        <b>Partner:</b> <i>Shopin</i>
                                    </span>
                                </p>
                                <p className='Shipper'>
                                    <span>
                                        <b>Shipping:</b> <i>Nimbus</i>
                                    </span>
                                </p>
                            </div>
                            <div className="productPriceDetails">
                                <p className="Cost">
                                    <span>
                                        <b>Cost: </b> <i><s>₹ {Asset.compare}</s></i> <span>(-{Asset.discount}%)</span>
                                    </span>
                                </p>
                                <p className="Price">
                                    <span>
                                        <b>Price: </b> <i>₹ {Asset.price}/-</i>
                                    </span>
                                </p>
                                <p className="DeliveryCost">
                                    <span>
                                        <b>Delivery Cost: </b> <i>₹ 0</i>
                                    </span>
                                </p>
                                <p className="NetBill">
                                    <span>
                                        <b>Net Amount: </b> <i><b>₹ {Asset.price}</b></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Main proData={HomeProductData} />
        </>
    );
}

export default Product;
