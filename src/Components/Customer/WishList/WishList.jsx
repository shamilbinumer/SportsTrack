import React from 'react'
import './WishList.scss'
import { Link } from 'react-router-dom'

const WishList = () => {
  return (
    <div className='whishlist-main'>
     <div className="backBtn"><Link className='back-btn' to='/'>Back</Link></div>
     <h3 className='mainHeading'>Wishlist</h3>
    </div>
  )
}

export default WishList
