import React from 'react'
import './Cart.scss'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='cart-main'>
      <Navbar/>
      <div className="back">
        <Link className='back-btn'>Back</Link>
      </div>
    </div>
  )
}

export default Cart
