import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import './ProductDetailsCustomer.scss'
import { PiShoppingCartFill } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";

const ProductDetailsCustomer = () => {
    const [size,setSize]=useState("")
    const {id}=useParams()
    const [getProducts,setProduct]=useState([])

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:7000/sportstrack/getProduct/${id}`)
        // console.log(res.data);
        setProduct(res.data)
        // console.log(getProducts.images[0]);
        console.log(getProducts);
    }
  
    useEffect(()=>{
        getProduct()
    },[])

    const selectSize=(e)=>{
        setSize((pre) => ({...pre,size: { ...pre.size, [e.target.name]: e.target.value },}));
        console.log(size);
    }

    // const addToCart=async(e)=>{
    //     const res=await axios.post("http://localhost:7000/sportstrack/addToCart",{...getProduct,...size})
    //     console.log(res.data);
    // }
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
                    <button className='addToCartBtn'>ADD TO CARD <PiShoppingCartFill /></button>
                    <button className='WhishListBtn'>ADD RO WISHLIST <FaHeartCirclePlus /></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetailsCustomer
