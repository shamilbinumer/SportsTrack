import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import './ProductDetailsCustomer.scss'
import { PiShoppingCartFill } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";

const ProductDetailsCustomer = () => {
    // let Size=""
    const [size,setSize]=useState("")
    const {id}=useParams()
    const [getProducts,setProduct]=useState({
        product_name:"",
        category:"",
        description:"",
        price:"",
        size:"",
        banner:"",
        images:[]
    })

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:7000/sportstrack/getProduct/${id}`)
        setProduct(res.data)
        // console.log(getProducts);
    }
  
    useEffect(()=>{
        getProduct()
    },[])

    const selectSize=(e)=>{
        setSize(e.target.value);
        console.log(size);
    }

    const addToCart = async () => {
        try {
            if (!size) {
                alert("Please select a size");
                return;
              }
          const res = await axios.post("http://localhost:7000/sportstrack/addToCart", {...getProducts,size:size});
          console.log(res.data);
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Error adding product to cart. Please try again.");
        }
      };
  return (
    <div className='ProductDetailsCustomerMain'>
        <Navbar/>
        <div className="ProductDetailsMain">
            <div className="ProductDetailsLeft">
                <div className="images-main">
                    <div className="image">
                        {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[0]} alt="" />)}
                    </div>
                    <div className="image">
                    {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[1]} alt="" />)}
                    </div>
                </div>
                <div className="images-main">
                    <div className="image">
                    {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[2]} alt="" />)}
                    </div>
                    <div className="image">
                    {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[3]} alt="" />)}
                    </div>
                </div>
                
            </div>
            <div className="ProductDetailsRight">
                <p className="prod_name">{getProducts.product_name}</p>
                <h3 className="prod_discription">{getProducts.description}</h3>
                <p className="og_price"><strike>₹ 899</strike></p>
                <span className="price">₹ {getProducts.price}</span>
                <div className='select_size'>
                    {/* <p>Select Size</p> */}
                    <select name="size" id="" onChange={selectSize}>
                        <option className='option'>Select Size</option>
                        <option className='option' name='xs' value="xs">XS</option>
                        <option className='option' name='s' value="s">S</option>
                        <option className='option' name='m' value="m">M</option>
                        <option className='option' name='l' value="l">L</option>
                        <option className='option' name='xl' value="xl">XL</option>
                        <option className='option' name='xxl' value="xxl">XXL</option>
                    </select>
                </div>
                <div className="btns">
                    <button className='addToCartBtn' onClick={addToCart}>ADD TO CARD <PiShoppingCartFill /></button>
                    <button className='WhishListBtn'>ADD RO WISHLIST <FaHeartCirclePlus /></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetailsCustomer
