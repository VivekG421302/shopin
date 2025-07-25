import React from 'react'
import './Wishlist.css'
import Navbar from '../Components/Navbar'
import Cartlist from '../Components/Cartlist'

function Wishlist(props) {
    let MyWishlist = props.Showlist
    console.log(MyWishlist, "WishlistData")
  return (
    <>
    <Navbar/>
    <div className="wishBody">
        <div className="wishBodyListBody">
            <h1 className="WishTitleis">Wishlist</h1>
            {MyWishlist.map((prowish)=> (
          <>
          <Cartlist
              imgSrc={prowish.thumbnail}
              title={prowish.productName}
              price={prowish.price}
              Qty={prowish.stock}
              rate={prowish.rate}
              ppv={prowish.ppv}
              unit={prowish.unit}
              />
              </>
            ))}
        </div>
    </div>
    </>
  )
}

export default Wishlist