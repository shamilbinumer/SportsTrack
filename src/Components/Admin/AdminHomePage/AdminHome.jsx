import React, { useEffect, useState } from 'react'
import './AdminHome.scss'
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';



const AdminHome = () => {
    const navigate=useNavigate()
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

    const Logout=(e)=>{
        e.preventDefault();
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            localStorage.clear();
           navigate("/admin")
        }
    }
  return (
    <div className='adminHomePageMain'>
      <div className="header-main">
      <div className="header-left">
        <Link to='/admin' className='back-btn'>Back</Link>
      </div>
       <div className="header-right">
       <div className="display-username">
            <span><i className="fa fa-user" aria-hidden="true"></i>{msg} <button onClick={Logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button></span>
        </div>
       </div>
      </div>

      <div className="hero">
        <div className="hero-left">
          <h4>Category</h4>
          <div className="cat-ithems">
            <table>
              <tr>
                <th><span>Category 1</span></th>
                <td><Link className='edit-btn'>Edit</Link><Link className='delete-btn'>Delete</Link></td>
              </tr>
            </table>
          </div>
          <div className="cat-ithems">
          <table>
              <tr>
                <th><span>Category 2</span></th>
                <td><Link className='edit-btn'>Edit</Link><Link className='delete-btn'>Delete</Link></td>
              </tr>
            </table>
          </div>
          <div className="cat-ithems">
          <table>
              <tr>
                <th><span>Category 3</span></th>
                <td><Link className='edit-btn'>Edit</Link><Link className='delete-btn'>Delete</Link></td>
              </tr>
            </table>
          </div>
          <div className="add-cat-section">
            <Link className='add-cat-btn' to='/addCategory'>Add New Category <i className="fa fa-plus" aria-hidden="true"></i></Link>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>

    </div>
  )
}

export default AdminHome
