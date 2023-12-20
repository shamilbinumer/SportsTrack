import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './Index.scss'
import { Link } from 'react-router-dom'
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

    <div className="category-main">
      <div className="cat-heading">
        <h3>Lets Choose Your Choice</h3>
        <div className="cat-ul"></div>
      </div>
      <div className="ctgry-list">
        <div className="ctgry-images"> <img src="../../../../public/men (1).jpg" alt="" /></div>
        <div className="ctgry-images"><img src="../../../../public/gym.jpg" alt="" /></div>
        <div className="ctgry-images"><img src="../../../../public/kids.jpg" alt="" /></div>
        <div className="ctgry-images"><img src="../../../../public/sports.jpg" alt="" /></div>
        <div className="ctgry-images"><img src="../../../../public/winter.jpg" alt="" /></div>
        <div className="ctgry-images"><img src="../../../../public/women.jpg" alt="" /></div>
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
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Footer/>
 {/* <script src='./index.js'></script> */}
    </div>
  )
}

export default IndexPage
