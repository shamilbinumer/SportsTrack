import React, { useState } from 'react'
import './EditCategory.scss'
import { Link } from 'react-router-dom'

const EditCategory = () => {
    const [val,setVal]=useState({
        category:"",
        aboutCategory:""
    })
    const GetData=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }
  return (
    <div className='Edit-Category-main'>
        <div className="header-main">
      <div className="header-left">
        <Link to='/adminhome' className='back-btn'>Back</Link>
      </div>
       {/* <div className="header-right">
       <div className="display-username">
            <span><i className="fa fa-user" aria-hidden="true"></i>{msg} <button onClick={Logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button></span>
        </div>
       </div> */}
      </div>
         <div className="card">
  <h4 className="title">Edit Category!</h4>
  <form>

    <div className="field">
      <input id="category" placeholder="Category" className="input-field" name="category" type="text" onChange={GetData}/>
    </div>
    <div className="field">
      <input id="about-cat" placeholder="About Category" className="input-field-about" name="aboutCategory" type="text" onChange={GetData} />
    </div>
    <button className="btn" type="submit">Edit</button>
  </form>
</div>
    </div>
  )
}

export default EditCategory
