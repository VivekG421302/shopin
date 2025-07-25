import React, { useState, useEffect, useRef } from 'react';
import "../Pages/Admin.css"

function AddProduct() {
    const inputRef = useRef(null);

    const [productName, setproductName] = useState('')
    const [brand, setbrand] = useState('')
    const [category, setcategory] = useState('All');
    const [subCategory, setsubCategory] = useState('')
    const [specification, setspecification] = useState('')
    const [unit, setunit] = useState('pcs')
    const [tags, settags] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState('')
    const [compare, setcompare] = useState('')
    const [discount, setdiscount] = useState('')
    const [thumbnail, setthumbnail] = useState('')
    const [imgone, setimgone] = useState('')
    const [imgtwo, setimgtwo] = useState('')
    const [imgthree, setimgthree] = useState('')
    const [imgfour, setimgfour] = useState('')
    const [rate, setrate] = useState();
    const [stock, setstock] = useState();
    const [sales, setsales] = useState();
    const [ppv, setppv] = useState(1);

    useEffect(() => {
        // Focus the input element after the component mounts
        inputRef.current.focus();
    }, []);

    // useEffect(()={
    //     if (product) {
    //         setproductName(product.name);
    //         setBrand(product.brand);
    //         setCategory(product.category);
    //         setSubCategory(product.subCategory);
    //         setSpecification(product.specification);
    //         setUnit(product.unit);
    //         setTags(product.tags);
    //         setDescription(product.description);
    //         setPrice(product.price);
    //         setCompare(product.compare);
    //         setDiscount(product.discount);
    //         setThumbnail(product.thumbnail);
    //         setImgOne(product.imgone);
    //         setImgTwo(product.imgtwo);
    //         setImgThree(product.imgthree);
    //         setRate(product.rate);
    //         setstock(product.stock)
    //         setsales(product.sales)
    //         setppv(product.ppv)
    //     }
    // },[product])

    function clear() {
        setproductName("");
        setbrand("");
        setcategory("");
        setsubCategory("");
        setspecification("");
        setunit("");
        settags("");
        setdescription("");
        setprice("");
        setcompare("");
        setdiscount("");
        setthumbnail("");
        setimgone("");
        setimgtwo("");
        setimgthree("");
        setimgfour("");
        // setrate("");
        setstock("");
        setsales("");
        setppv("");
        setrate("");
    }

    function submit(e) {
        e.preventDefault();
        console.log({ productName, brand, category, subCategory, ppv, specification, unit, tags, description, price, compare, discount, thumbnail, imgone, imgtwo, imgthree, rate, stock, sales, imgfour});
        let productData = { productName, brand, category, subCategory, ppv, specification, unit, tags, description, price, compare, discount, thumbnail, imgone, imgtwo, imgthree, rate, stock, sales, imgfour };

        fetch('https://shopinjsondb-production.up.railway.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then((response) => response.json())
            .then((proddata) => {
                console.log('Success:', proddata);
                clear();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const subCategories = {
        Electronics: ['Phones', 'Accessories', 'Tablet', 'Laptops', 'Cameras', 'Television'],
        Fashion: ['Men', 'Women', 'Kids'],
        Furniture: ['Chairs', 'Tables', 'Beds', 'Sofas'],
        Appliances: ['Refrigerators', 'Washing Machines', 'Microwaves', 'Air Conditioners'],
        Beauty: ['Makeup', 'Skincare', 'Haircare', 'Fragrances'],
        Food: ['Groceries', 'Snacks', 'Beverages', 'Dairy'],
        Sports: ['Cycles', 'Equipments', 'Addins', 'Accessories'],
    };

    const handleCategoryChange = (event) => {
        setcategory(event.target.value);
    };


    return (
        <>
            <main className="addProductMain">
                <form action="">
                    <table className='addProductsMainTable'>
                        <thead>
                            <tr>
                                <th colspan="2"><h1 className='formtitleonaddproducts'>Produt Information</h1></th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><label htmlFor="">Product Name</label></td>
                                <td><input type="text" ref={inputRef} placeholder='Product Name' value={productName} onChange={(e) => setproductName(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Brand</label></td>
                                <td><input type="text" placeholder='Brand Name' value={brand} onChange={(e) => setbrand(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="Category">Category</label></td>
                                <td>
                                    <select name="Category" id="Category" value={category} onChange={handleCategoryChange}>
                                        <option value="All">All Category</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Appliances">Appliances</option>
                                        <option value="Beauty">Beauty</option>
                                        <option value="Food">Food</option>
                                        <option value="Sports">Sports</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="SubCategory">Sub Category</label></td>
                                <td>
                                    <select name="subCategory" id="subCategory" value={subCategory} onChange={(e) => setsubCategory(e.target.value)}>
                                        {category === 'All' ?
                                            (<option value="N/A">Select a category first</option>) :
                                            (
                                                subCategories[category]?.map((subCategory, index) => (
                                                    <option
                                                        key={index}
                                                        value={subCategory} >
                                                        {subCategory}
                                                    </option>
                                                ))
                                            )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Specifications</label></td>
                                <td><input type="text" placeholder='Enter Specifications' value={specification} onChange={(e) => setspecification(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Per Piece value</label></td>
                                <td><input type="number" placeholder='How much Qty per piece' value={ppv} onChange={(e) => setppv(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Unit</label></td>
                                <td>
                                    <select name="Unit" id="productUnit" value={unit} onChange={(e) => setunit(e.target.value)}>
                                        <option value="pcs">Piece</option>
                                        <option value="kg">Kilogram</option>
                                        <option value="gms">Gram</option>
                                        <option value="mts">Meter</option>
                                        <option value="cm">Centimeter</option>
                                        <option value="ltr">Liter</option>
                                        <option value="ml">Milliliter</option>
                                        <option value="pk">Pack</option>
                                        <option value="box">Box</option>
                                        <option value="dzn">Dozen</option>
                                        <option value="set">Set</option>
                                        <option value="pr">Pair</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Tags</label></td>
                                <td><input type="text" placeholder='Input key words for search' value={tags} onChange={(e) => settags(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Description</label></td>
                                <td><textarea type='text' placeholder='Enter Product Description' value={description} onChange={(e) => setdescription(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Price</label></td>
                                <td><input type="number" placeholder='Price' value={price} onChange={(e) => setprice(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Compare</label></td>
                                <td><input type="number" placeholder='Compare' value={compare} onChange={(e) => setcompare(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Discount</label></td>
                                <td><input type="number" placeholder='Discount' value={discount} onChange={(e) => setdiscount(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Stock</label></td>
                                <td><input type="number" placeholder='Available in Stock' value={stock} onChange={(e) => setstock(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Sales</label></td>
                                <td><input type="number" placeholder='Sales done' value={sales} onChange={(e) => setsales(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Thumbnail</label></td>
                                <td><input type='text' placeholder='Please enter main img link' value={thumbnail} onChange={(e) => setthumbnail(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Images1</label></td>
                                <td><input type='text' placeholder='Please enter img link' value={imgone} onChange={(e) => setimgone(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Images2</label></td>
                                <td><input type='text' placeholder='Please enter img link' value={imgtwo} onChange={(e) => setimgtwo(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Images3</label></td>
                                <td><input type='text' placeholder='Please enter img link' value={imgthree} onChange={(e) => setimgthree(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Images4</label></td>
                                <td><input type='text' placeholder='Please enter img link' value={imgfour} onChange={(e) => setimgfour(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Rate</label></td>
                                <td><input type='number' placeholder='Please enter rating' value={rate} onChange={(e) => setrate(e.target.value)} /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='addtablefoot'>
                                <td className='addproduct'>
                                    <button type="submit" onClick={(e) => submit(e)} className='addSubmit'>Add Product</button>
                                </td>
                                <td className='addproduct'>
                                    <button type="submit" onClick={(e) => clear(e)} className='clearSubmit'>Clear Data</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </main>

        </>
    )
}

export default AddProduct
