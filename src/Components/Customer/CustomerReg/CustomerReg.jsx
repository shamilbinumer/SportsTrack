import React, { useState } from 'react'
import './Customerreg.scss'
import { Link } from 'react-router-dom'

const CustomerReg = () => {
  let Photo
  const [val,setVal]=useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    personal_address:"",
    state:"",
    district:"",
    pincode:"",
    place:"",
    landmark:"",
    street:"",
    photo:""
  })

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const GetData=(e)=>{
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  const Upload=async(e)=>{
    e.preventDefault()
  
    Photo=await convertToBase64(e.target.files[0])
    console.log(Photo);
  }
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
                 <input type="text"  placeholder='Name' name='name' onChange={GetData}/>
                 <input type="text"  placeholder='Email' name='email' onChange={GetData}/>
              </div>
              <div>
                <input type="password"  placeholder='Password' name='password' onChange={GetData}/>
                <input type="text"  placeholder='Phone' name='phone' onChange={GetData}/>
                </div>
              <div>
                <input type="text"  placeholder='Personal Adress' name='personal_address' onChange={GetData}/>
                <input type="text"  placeholder='State' name='state' onChange={GetData}/>
                </div>
              <div>
                <input type="text"  placeholder='District' name='district' onChange={GetData}/>
                <input type="text"  placeholder='Pincode' name='pincode' onChange={GetData}/>
              </div>
              <div>
                <input type="text"  placeholder='Place' name='place' onChange={GetData}/>
                <input type="text"  placeholder='Landmark' name='landmark' onChange={GetData}/>
              </div>
              <div>
                <input type="text"  placeholder='Street' name='street' onChange={GetData}/>
                <input type="file"  placeholder='Photo' name='photo' onChange={Upload}/>
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
