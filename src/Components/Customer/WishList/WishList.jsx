import React from 'react'
import './WishList.scss'
import { Link } from 'react-router-dom'

const WishList = () => {
  return (
    <div className='whishlist-main'>
     <div className="backBtn"><Link className='back-btn' to='/'>Back</Link></div>
     <h3 className='mainHeading'>Wishlist</h3>
     <div className="cards-main">
        <div className="cards">
        <Link className='link'>
         <div className="Card"><div className="prdct-thumnalil"><img src="" alt="" /></div>
     <div className="card-details">
     <p className='item-title'>sefsef</p>
     <div><span className="prdct-description">ssdsd</span></div>
    <div className="prices">
    <div><p className='price'>₹ 299</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
       </Link>
        </div>
        <div className="cards">
        <Link className='link'>
         <div className="Card"><div className="prdct-thumnalil"><img src="" alt="" /></div>
     <div className="card-details">
     <p className='item-title'>sefsef</p>
     <div><span className="prdct-description">sdfsf</span></div>
    <div className="prices">
    <div><p className='price'>₹ 299</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
       </Link>
        </div>
     </div>
    </div>
  )
}

export default WishList
