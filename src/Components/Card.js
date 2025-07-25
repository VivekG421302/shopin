import React from 'react';
import "./Card.css";
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Card(props) {
    const [inCart, setInCart] = useState(props.inCart || false);
    console.log(props)
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
        <Link to={'/'} className="card-link">
            <div className="carddiv">
                <div className="cardCategory">
                    <span>{props.category}</span>
                </div>

                <div className="cardContents">
                    <div className="cardimgdiv">
                        <img src={props.imgSrc} alt={props.title} className="card-img" />
                    </div>
                    <div className="cardinfograph">
                        <div className="infographcategory">
                            <p>{props.subCategory}</p>
                        </div>
                        <div className="card-desc">
                            <p>{props.desc}</p>
                        </div>
                        <div className="card-rate">
                            <StarRating rates={props.rate} />
                            <p className='card-rate-info'>
                                ({props.rate})
                            </p>
                        </div>
                        <div className="cardBrand">
                            By <a>{props.brand}</a>
                        </div>
                        <div className="cardtradePortal">
                            <div className="card-price">
                                <b>₹{props.price} </b>
                                <s>₹{props.market}</s>
                            </div>
                            <button className="cardtradePortalcta" onClick={toggleCart}>
                                <img src="./images/cart.svg" alt="" />
                                <b>Add</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
