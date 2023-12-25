import React, { useState } from 'react'
import './CustomerLogin.scss'
import { Link } from 'react-router-dom'
const CustomerLogin = () => {
    const [val,setVal]=useState({
        email:"",
        password:""
    })
    const GetData=()=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }
    
  return (
    <div className='cus-login'>
        <div className="CustRegMain">
        <div className="CustRegLeft">
          <Link className='backBtn' to='/'>Back</Link>
          <div className="CusRegLeftContent">
            <h1>Sports Track.</h1>
            <div className="ul"></div>
            <h2>Let's go!</h2>
            <p>Create an account once and log all Decathlon sites and partners in one click!</p>
          </div>
        </div>
        <div className="CustRegRight">
          <h2>Sign Up</h2>
          <div className="formMainDiv">
            <form action="">
            
                 <div><input type="text"  placeholder='Email' name='name' onChange={GetData}/></div>
                 <div><input type="password"  placeholder='password' name='password' onChange={GetData}/></div>
             
             <div> <button className='resgiter-btn'>Login</button></div>
            <Link className='iHaveAccount' to='/custemerReg'>New Customer ?</Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerLogin
