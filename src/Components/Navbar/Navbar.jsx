// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";



const Navbar = () => {
 const [id,setId]=useState("")
  const naviagate=useNavigate()
  const navigateItself=useNavigate()
  const [msg,setMsg]=useState("")
  const value=JSON.parse(localStorage.getItem('customer_token'));

  const gotoCartOrWishList=(e)=>{
    e.preventDefault()
    if(msg.length===0){
      alert ("Please Login")
      navigateItself("/CustomerLogin")
    }
  }

  const getName=async()=>{
    const res=await axios.get("http://localhost:7000/sportstrack/CustHome",{
        headers:{Authorization: `Bearer ${value}`},
    })
    // console.log(res.data);
    setMsg(res.data.msg)
    setId(res.data.id)
  }
  useEffect(()=>{
    getName()
  },[])
  // console.log(id);
 

  const Logout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      localStorage.clear();
      naviagate("/")

    }
  };
  return (
    <div className='navbar-main'>
    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#"><i className="fa-solid fa-shop me-2"></i> <strong>SPORTS TRACK</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className=" input-group-text  text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" className="form-control"  style={{ color: "#7a7a7a" }} />
            <button className="btn text-white">Search</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block">
            <div className="input-group">
              <span className="sss input-group-text  text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className="form-control" style={{color:"#7a7a7a"}} />
              <button className="btn text-white">Search</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            {/* <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase active"  to='/'>Products</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#">Services</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase active" to={`/myOreder/${id}`}>My Orders</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase active" to={`/whishList/${id}`} onClick={gotoCartOrWishList}><i className="fa-solid fa-cart-shopping me-1"></i><FaRegHeart className='wishlist-icon' /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase active" to={`/cart/${id}`} onClick={gotoCartOrWishList}><i className="fa-solid fa-cart-shopping me-1"></i> <BsCart3 className='cartIcon' /></Link>
            </li>
             <li className="nav-item">
            {msg ? (
              <>
                <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin'><FiUser className='cartIcon' />  {msg}  <button className='logout' onClick={Logout}>Logout</button></Link>
               
              </>
            ) : (
              <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin'>Sign in</Link>
            )}
          </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
