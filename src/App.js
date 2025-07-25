// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Admin from './Pages/Admin';
import AddProduct from './Sections/AddProduct';
import Register from './Pages/Register';
import ProductReview from './Sections/ProductReview';
import StarRating from './Components/StarRating';
import ScrollToTop from './Components/ScrollToTop';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';

function App() {
  const [getProductData, setGetProductData] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://shopinjsondb-production.up.railway.app/products');
      setGetProductData(response.data);
    } catch (error) {
      console.error('Error occured while fetching the product data:', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home HomeProducts={getProductData} />} />
        <Route path='/product' element={<Product HomeProducts={getProductData} />} />
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path='/star' element={<StarRating />} />
        <Route path='/cart' element={<Cart Showlist={getProductData} />} />
        <Route path='/wishlist' element={<Wishlist Showlist={getProductData} />} />
        <Route path='/admin/' element={<Admin />}>
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='allproducts' element={<ProductReview adminProducts={getProductData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
