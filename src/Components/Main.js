// src/Components/Main.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import "./Main.css";

function Main({ proData }) {
  const navigate = useNavigate();

  function openProduct(prod) {
    navigate("/product", { state: prod });
  }

  return (
    <div className="mainGridBody">
      {proData.length > 0 ? (
        proData.map((prod) => (
          <div
            className="clickProduct product"
            key={prod.id}
            onClick={() => openProduct(prod)}
          >
            <Card
              imgSrc={prod.thumbnail}
              title={prod.productName}
              price={prod.price}
              desc={prod.description}
              rate={prod.rate}
              brand={prod.brand}
              market={prod.compare}
              category={prod.category}
              subCategory={prod.subCategory}
            />
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Main;
