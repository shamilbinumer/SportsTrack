import React, { useEffect, useState } from 'react'
import './AdminHome.scss'
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';



const AdminHome = () => {
    const [msg,setMsg]=useState("")
    const value=JSON.parse(localStorage.getItem('admin_token'));
    const getName=async()=>{
        const res=await axios.get("http://localhost:7000/sportstrack/home",{
            headers:{Authorization: `Bearer ${value}`},
        })
        setMsg(res.data.msg)
    }

    useEffect(()=>{
        getName() 
    },[])
  return (
    <div className='adminHomePageMain'>
        {/* <h1>{msg}</h1>     */}
        <div className="display-username">
            <p>{msg}</p>
        </div>

    </div>
  )
}

export default AdminHome
