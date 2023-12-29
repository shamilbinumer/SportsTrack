import React from 'react'
import './Cart.scss'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Cart = () => {
  // http://localhost:7000/sportstrack/getCartProduct/65892142bf1bf84652a499c2
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
            <div className="details-main">
              <div className="details-image-section">
                <div className="image"><img src="" alt="" /></div>
              </div>
              <div className="details-details-section">
                <p className="item-name">ITEM</p>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <select name="" id="">
                  <option value="1">Qty : 1</option>
                  <option value="2">Qty : 2</option>
                  <option value="3">Qty : 3</option>
                  <option value="4">Qty : 4</option>
                  <option value="5">Qty : 5</option>
                  <option value="6">Qty : 6</option>
                  <option value="7">Qty : 7</option>
                  <option value="8">Qty : 8</option>
                </select>
              <div className='price-div'>  <span className='price'>₹ 499</span>
                <span className='og-price'><strike>₹ 699</strike></span></div>
              </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="display-ietm-right"></div>
      </div>
    </div>
  )
}

export default Cart
