import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const Index = () => {
  return (
    <div>
        <Navbar/>
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
    </div>
  )
}

export default Index
