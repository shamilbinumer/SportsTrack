import React from 'react'
import './AddProduct.scss'

const AddProduct = () => {
  return (
    <div className='add-products-main'>
       <div className="card">
  <h4 className="title">Add New Product!</h4>
  <form>

    <div className="field">
      <input id="prodname" placeholder="Product Name" className="input-field" name="product_name" type="text" />
    </div>
    <div className="field">
      <input id="category" placeholder="Category" className="input-field" name="category" type="text" />
    </div>
    <div className="field">
      <input id="description" placeholder="Description About Product" className="input-field" name="description" type="text" />
    </div>
    <div className="field">
      <input id="price" placeholder="Price" className="input-field" name="price" type="text" />
    </div>
    <div className="field">
      <input id="size" placeholder="Size" className="input-field" name="size" type="text" />
    </div>
    <div className="field">
      <input id="stoke" placeholder="Number of Stoke" className="input-field" name="stoke" type="text" />
    </div>
    <div className="field">
      <input id="image" placeholder="Image" className="input-field" name="image" type="file" />
    </div>
    <button className="btn" type="submit">Add</button>
  </form>
</div>
    </div>
  )
}

export default AddProduct
