import React, { useEffect, useState } from 'react'
import './Cart.scss'
import Navbar from '../../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';

const Cart = () => {
  const {id}=useParams()
  const [totalPrice,setTotalPrice]=useState(0)
  const [getPrdct,setProdct]=useState([])
  const getPrdctDetails=async()=>{
    const res=await axios.get(` http://localhost:7000/sportstrack/getCartProduct/${id}`)
    // console.log(res.data);
    setProdct(res.data)
    console.log(getPrdct);
  }
  useEffect(()=>{
    getPrdctDetails()
  },[])

  useEffect(() => {
    const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price), 0);
    setTotalPrice(totalPriceSum);
  }, [getPrdct]);

  const qty = (e, index) => {
    const selectedQuantity = parseInt(e.target.value, 10);
    const productPrice = getPrdct[index].price;
    if (!isNaN(productPrice)) {
      const updatedPrice = selectedQuantity * productPrice;
      console.log(updatedPrice);
      const updatedGetPrdct = [...getPrdct];
      updatedGetPrdct[index].price = updatedPrice;
      setProdct(updatedGetPrdct);
    } else {
      console.error('Invalid product price:', productPrice);
    }
  };

  const BuyNow=(e)=>{
    e.preventDefault()
      alert("Order Placed")
  }

  return (
    <div className='cart-main'>
      <Navbar/>
      <div className="back">
        <Link className='back-btn' to='/'>Back</Link>
      </div>

      <div className="display-ietm-main">
        <div className="display-ietm-left">
            <div><h3>Items In Cart</h3></div>
            <div className="ul"></div>
           {
            getPrdct.map((data,index)=> <div className="details-main" key={index}>
            <div className="details-image-section">
              <div className="image"><img src={data.banner} alt="" /></div>
            </div>
            <div className="details-details-section">
              <p className="item-name">{data.product_name}</p>
              <p className="description">{data.description}</p>
              <p className='size'>Size : {data.size}</p>
              <select name="" id=""  onChange={(e) => qty(e, index)}>
                <option value="1">Qty : 1</option>
                <option value="2">Qty : 2</option>
                <option value="3">Qty : 3</option>
                <option value="4">Qty : 4</option>
                <option value="5">Qty : 5</option>
                <option value="6">Qty : 6</option>
                <option value="7">Qty : 7</option>
                <option value="8">Qty : 8</option>
              </select>
            <div className='price-div'>
              <span className='price'>₹ {data.price}</span>
              <span className='og-price'><strike>₹ 699</strike></span>
            </div>
            <RiDeleteBin5Fill className='delete' />
            </div>
          </div>)
           }
        </div>
        <div className="line"></div>
        <div className="display-ietm-right">
          <p className='order-summery'>Order Summery</p>
          <table>
            <tr>
              <td>Total price (Inc GST)</td>
              <td>₹  {totalPrice ? totalPrice : 0}</td>
            </tr>
            {/* <tr>
              <td>Discount</td>
              <td className='discout-price'>₹ 200</td>
            </tr> */}
            <tr>
              <td>Estimated Delivery Fee</td>
              <td>₹ 99</td>
            </tr>
          </table>
          <div className="table-ul"></div>
          <table>
            <tr>
              <td className='total-text'>Total</td>
              <td className='total-text'>₹ {totalPrice ? totalPrice + 99 : 99}</td>
            </tr>
          </table>

          <button onClick={BuyNow}> <FaShoppingCart /> Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
