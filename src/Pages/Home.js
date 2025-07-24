// src/Pages/Home.js
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Banner from '../Components/Banner';

function Home(props) {
  const [theme, setTheme] = useState('dark');
  const [searchTerm, setSearchTerm] = useState(''); // Store search input
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track category filter
  const [filteredProducts, setFilteredProducts] = useState(props.HomeProducts || []);

  const HomeProductData = props.HomeProducts;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // BANNER SHOWER
  const isFiltered = searchTerm || selectedCategory !== 'All';

  // FILTER FOR SEARCH AND CATEGORY
  useEffect(() => {
    let results = HomeProductData;

    if (selectedCategory !== 'All') {
      results = results.filter((product) => product.category === selectedCategory);
    }

    if (searchTerm) {
      results = results.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, HomeProductData]);

  return (
    <div className={`homeBody ${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />
      {!isFiltered && <Banner />}
      <Main proData={filteredProducts} />
    </div>
  );
}

export default Home;
