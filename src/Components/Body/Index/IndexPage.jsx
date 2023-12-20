import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './Index.scss'
import { Link } from 'react-router-dom'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
// import './index.js'

const IndexPage = () => {
  return (
    <div className='index-page-main'>
        <Navbar/>
        <div className="banner">
        <div className="banner-content">
          <h1>Sports Track.</h1>
          <div className="ul"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nemo nobis quasi vel! Vel in, iste pariatur odio inventore hic officia eius et. Sit suscipit quaerat, ex quis vitae blanditiis.</p>
          <Link className='order-btn'>Order Now</Link>
        </div>
        </div>

    

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./../../../../public/Frame 427321129.avif" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./../../../../public/Frame 427321139.avif" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./../../../../public/Frame 427321191.avif" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <TfiAngleLeft  className='angle'/>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <TfiAngleRight className='angle'/>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="category-main">
      <div className="cat-heading">
        <h3>Lets Choose Your Choice</h3>
        <div className="cat-ul"></div>
      </div>
      <div className="ctgry-list">
        <div className="ctgry-images">
          <img src="../../../../public/kids.jpg" alt="" />
          </div>
        <div className="ctgry-images">
          <img src="../../../../public/gym.jpg" alt="" />
          </div>
        <div className="ctgry-images">
          <img src="../../../../public/men (1).jpg" alt="" />
          </div>
        <div className="ctgry-images">
          <img src="../../../../public/sports.jpg" alt="" />
          </div>
        <div className="ctgry-images">
          <img src="../../../../public/winter.jpg" alt="" />
          </div>
        <div className="ctgry-images">
          <img src="../../../../public/women.jpg" alt="" />
          </div>
      </div>
       
    </div>

    <div className="categoreis-products">
     <div className="cat-product-heading">
     <h3>Kids Collection</h3>
      <div className="cat-ul"></div>
     </div>
  
    <div className="collection-cards">
    <Link className='link'>
      <div className="Card"><div className="prdct-thumnalil"><img src="../../../../public/sports.jpg" alt="" /></div>
     <div className="card-details">
     <p className='item-title'>Title</p>
     <div><span className="prdct-description">Description of the product</span></div>
    <div className="prices">
    <div><p className='price'>₹ 299</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
      </Link>
    </div>
    
    </div>
    <div className="categoreis-products">
     <div className="cat-product-heading">
     <h3>Womens Collection</h3>
      <div className="cat-ul"></div>
     </div>
     <div className="collection-cards">
     <Link className='link'>
      <div className="Card"><div className="prdct-thumnalil"><img src="../../../../public/sports.jpg" alt="" /></div>
     <div className="card-details">
     <p className='item-title'>Title</p>
     <div><span className="prdct-description">Description of the product</span></div>
    <div className="prices">
    <div><p className='price'>₹ 299</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
      </Link>
    </div>
    </div>
    <div className="categoreis-products">
     <div className="cat-product-heading">
     <h3>Men Collection</h3>
      <div className="cat-ul"></div>
     </div>
     <div className="collection-cards">
     <Link className='link'>
      <div className="Card"><div className="prdct-thumnalil"><img src="../../../../public/sports.jpg" alt="" /></div>
     <div className="card-details">
     <p className='item-title'>Title</p>
     <div><span className="prdct-description">Description of the product</span></div>
    <div className="prices">
    <div><p className='price'>₹ 299</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
      </Link>
    </div>
    </div>
<Footer/>
 {/* <script src='./index.js'></script> */}
    </div>
  )
}

export default IndexPage
