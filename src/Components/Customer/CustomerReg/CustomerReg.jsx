import React from 'react'
import './Customerreg.scss'
import { Link } from 'react-router-dom'

const CustomerReg = () => {
  return (
    <div className='CustomerReg-main'>
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
              <div>
                 <input type="text"  placeholder='Name' name='name'/>
                 <input type="text"  placeholder='Email' name='email'/>
              </div>
              <div>
                <input type="password"  placeholder='Password' name='password'/>
                <input type="text"  placeholder='Phone' name='phone'/>
                </div>
              <div>
                <input type="text"  placeholder='Personal Adress' name='personal_address'/>
                <input type="text"  placeholder='State' name='state'/>
                </div>
              <div>
                <input type="text"  placeholder='District' name='district'/>
                <input type="text"  placeholder='Pincode' name='pincode'/>
              </div>
              <div>
                <input type="text"  placeholder='Place' name='place'/>
                <input type="text"  placeholder='Landmark' name='landmark'/>
              </div>
              <div>
                <input type="text"  placeholder='Street' name='street'/>
                <input type="file"  placeholder='Photo' name='photo'/>
              </div>
            <Link className='iHaveAccount' to='/CustomerLogin'>I Have Account</Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReg
