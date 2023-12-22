import React, { useEffect, useState } from 'react'
import './AddProduct.scss'
// import convertToBase64 from '../../../../base64'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  let Thumbnile="";
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({
    product_name:"",
    category:"",
    description:"",
    price:"",
    size:"",
    stoke:"",
    thumbnile:"",
    images:""
  })
  const GetData=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  const getCategory=async()=>{
    const res=await axios.get("http://localhost:7000/sportstrack/getcategory")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(()=>{
    getCategory()
  },[])

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

  const Upload=async(e)=>{
    e.preventDefault()
  
    Thumbnile=await convertToBase64(e.target.files[0])
    console.log(Thumbnile);
    setVal((pre) => ({ ...pre, thumbnile: Thumbnile }));
  }

  const addProduct = async (e) => {
    try {
        e.preventDefault();

        let formData = new FormData();
        formData.append('product_name', val.product_name);
        formData.append('category', val.category);
        formData.append('description', val.description);
        formData.append('price', val.price);
        formData.append('size', val.size);
        formData.append('stoke', val.stoke);
        formData.append('thumbnile', Thumbnile);
        if (val.images && val.images.length > 0) {
            for (let i = 0; i < val.images.length; i++) {
                formData.append('images', val.images[i]);
            }
        }

        const res = await axios.post("http://localhost:7000/sportstrack/addProduct", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (res.status !== 404) {
            alert("Product Added");
        }
    } catch (error) {
        alert("error", error);
    }
};
  return (
    <div className='add-products-main'>
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
  <h4 className="title">Add New Product!</h4>
  <form onSubmit={addProduct}>

    <div className="field">
      <input id="prodname" placeholder="Product Name" className="input-field" name="product_name" type="text" onChange={GetData} />
    </div>
    <div className='label'><label htmlFor="">Category :</label></div>
    <div className="field">
    <select name="category" id="category"  className="input-field" onChange={GetData}>
     {
      getCat.map((data,index)=>
        <option value={data.category} key={index}>{data.category}</option>
     )
     }
      </select>
    </div>
    <div className="field">
      <input id="description" placeholder="Description About Product" className="input-field" name="description" type="text" onChange={GetData}/>
    </div>
    <div className="field">
      <input id="price" placeholder="Price" className="input-field" name="price" type="text" onChange={GetData}/>
    </div>
    <div className='label'><label htmlFor="">Size :</label></div>
    <div className="field">
      {/* <input id="size" placeholder="Size" className="input-field" name="size" type="text" onChange={GetData}/> */}
      <select name="size" id="" onChange={GetData} className="input-field">
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
    <div className="field">
      <input id="stoke" placeholder="Number of Stoke" className="input-field" name="stoke" type="text" onChange={GetData}/>
    </div>
    <div className="field">
      <input id="thumnile" placeholder="Thumbnile" className="input-field" name="thumbnile" type="file" onChange={Upload}/>
    </div>
    <div className="field">
    <div><label htmlFor="">Images</label></div>
      <input id="image" placeholder="Image" className="input-field" name="images" type="file"  onChange={e => setVal(p => ({...p,[e.target.name]: e.target.files}))}  multiple/>
    </div>
    <button className="btn" type="submit">Add</button>
  </form>
</div>
    </div>
  )
}

export default AddProduct
