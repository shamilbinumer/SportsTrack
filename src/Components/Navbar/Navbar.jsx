// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const naviagate=useNavigate()
  const [msg,setMsg]=useState("")
  // http://localhost:7000/sportstrack/CustHome
  const value=JSON.parse(localStorage.getItem('customer_token'));
  console.log(value);

  const getName=async()=>{
    const res=await axios.get("http://localhost:7000/sportstrack/CustHome",{
        headers:{Authorization: `Bearer ${value}`},
    })
    // console.log(res.data.msg);
    setMsg(res.data.msg)
  }
  useEffect(()=>{
    getName()
  },[])

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
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#">Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#">About</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" href="#"><i className="fa-solid fa-cart-shopping me-1"></i> Cart</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin'>{msg ? msg : 'Sign'}</Link>
            </li> */}
             <li className="nav-item">
            {msg ? (
              <>
                <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin'><i className="fa fa-user" aria-hidden="true"></i>   {msg}  <button className='logout' onClick={Logout}>Logout</button></Link>
               
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
