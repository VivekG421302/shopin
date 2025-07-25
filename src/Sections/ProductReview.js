import React, { useState, useEffect } from 'react'
import AdminCharts from '../Components/AdminCharts'
import "../style/Admin.css"
import StarRating from '../Components/StarRating';

function ProductReview() {
    const [getProductData, setgetProductData] = useState([]);

    function ProductData() {
        fetch("https://shopinjsondb-production.up.railway.app/products")
            .then((resp) => {
                resp.json().then((response) => {
                    setgetProductData(response);
                    console.log(response, "response");
                });
            });
    }

    useEffect(() => {
        ProductData();
        console.log(ProductData)
    }, []);

    function deleteData(id, productName) {
        if (window.confirm(`Are you sure you want to delete ${productName}?`)) {
            fetch(`https://shopinjsondb-production.up.railway.app/products/${id}`, {
                method: "DELETE",
            })
                .then((resp) => {
                    if (resp.ok) {
                        setgetProductData((prevProducts) =>
                            prevProducts.filter((product) => product.id !== id)
                        );
                        alert(`${productName} has been deleted.`);
                    } else {
                        console.error("Failed to delete the product");
                    }
                })
                .catch(error => console.error("Error deleting product:", error));
        }
    }

    return (
        <div className="productReviewBody">
            {getProductData.map((prod) => (
                <div className="clickProductChart">
                    <AdminCharts
                        imgSrc={prod.thumbnail}
                        title={prod.name}
                        price={prod.price}
                        desc={prod.description}
                        rate={prod.rate}
                        brand={prod.brand}
                        market={prod.compare}
                        category={prod.category}
                        subCategory={prod.subCategory}
                        stock={prod.stock}
                        sales={prod.sales}
                        onButtonClick={() => deleteData(prod.id, prod.name)}
                    />
                </div >

            ))
            }
        </div>
    )
}

export default ProductReview