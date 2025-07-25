import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Cartlist from '../Components/Cartlist';
import '../style/Cart.css';

function Cart(props) {
  const navigate = useNavigate();

  function openProduct(prod) {
    navigate("/product", { state: prod });
  }

  let CartData = props.Showlist.filter((item) => item.inCart === true);

  console.log(CartData, 'Filtered cart data');

  return (
    <>
      <Navbar />
      <div className="CartBody">
        <h1 className="CartTitleis">Cart Items</h1>
        <div className="cartBodyListBody">
          {CartData.map((prod) => (
            <div
              key={prod.id}
              onClick={() => openProduct(prod)}
              className="cartItem"
            >
              <Cartlist
                imgSrc={prod.thumbnail}
                title={prod.productName}
                price={prod.price}
                Qty={prod.stock}
                rate={prod.rate}
                ppv={prod.ppv}
                unit={prod.unit}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
