import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './ProductDetailsAdmn.scss'

const ProductDetailsAdmn = () => {
    const {id}=useParams()
    const [getpProduct,setProduct]=useState([])

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:7000/sportstrack/getProduct/${id}`)
        // console.log(res.data);
        setProduct(res.data)
        console.log(getpProduct.images[0]);
    }
  
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div className='ProductDetailsAdmnMain'>
        <div className="backBtn">
            <Link className='back_btn' to='/prooood'>Back</Link>
        </div>
      <div className="left_Right_main">
      <div className="ProductDetailsAdmnLeft">
        <div className="images-main">
            <div className="prod-image">
                <img src={getpProduct.images[0]} alt="" />
            </div>
            <div className="prod-image">
                <img src={getpProduct.images[1]} alt="" />
            </div>
        </div>
        <div className="images-main">
            <div className="prod-image">
                <img src={getpProduct.images[2]} alt="" />
            </div>
            <div className="prod-image">
                <img src={getpProduct.images[3]} alt="" />
            </div>
        </div>
      </div>
      <div className="ProductDetailsAdmnRight"></div>
      </div>
    </div>
  )
}

export default ProductDetailsAdmn
