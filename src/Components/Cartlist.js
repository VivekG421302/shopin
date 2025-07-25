import React, { useState } from 'react';
import "../style/Cartlist.css";
import StarRating from './StarRating';

function Cartlist(props) {
    let [countqty, setcountqty] = useState(1);
    const billingAmount = props.price * countqty;

    const [inCart, setInCart] = useState(props.inCart || false);

    const toggleCart = () => {
        const updatedCartStatus = !inCart;
        fetch(`https://shopinjsondb-production.up.railway.app/products/${props.id}`, {
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
            <div className="CartlistBody">
                <div className="CartListBodydiv">
                    <div className="cartProductImgdiv">
                        <img src={props.imgSrc} alt="" className="cartProductImg" />
                    </div>
                    <div className="Cartlistinfo">
                        <h3>{props.title}</h3>
                        <p><StarRating rates={props.rate} /> ({props.rate})</p>
                    </div>
                    <div className="Cartlistprice">
                        <h2>₹ {props.price}</h2>
                        <p>for {props.ppv} {props.unit}</p>
                    </div>
                    <div className="CartProductQty">
                        {countqty > 1 ? (
                            <button className='decreasecart' onClick={() => { setcountqty(countqty - 1) }}>-</button>
                        ) : (
                            <button className='decreasecart'>-</button>
                        )}
                        <span>{countqty}</span>
                        <button className='increasecart' onClick={() => { setcountqty(countqty + 1) }}>+</button>
                    </div>
                    <div className="BillingAmount">
                        <h2>₹ {billingAmount}</h2>
                        <p>for {countqty} {props.unit}</p>
                    </div>
                    <div className="CartofWish">
                        <button className="wishCartButton">
                            <img src="../images/fav.png" alt="Add to Wishlist" />
                        </button>
                    </div>
                </div>
                <div className="removeCart">
                    <button className="removeCartButton" onClick={toggleCart}>
                        <img src="../images/delete.svg" alt="Remove" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cartlist;
