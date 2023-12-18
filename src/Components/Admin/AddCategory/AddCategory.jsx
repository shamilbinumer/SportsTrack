import React from 'react'
import './Addcategory.scss'

const AddCategory = () => {
  return (
    <div className='add-cat-main'>
         <div className="card">
  <h4 className="title">Add Category!</h4>
  <form>

    <div className="field">
      <input id="category" placeholder="Category" className="input-field" name="category" type="email" />
    </div>
    <div className="field">
      <input id="about-cat" placeholder="About Category" className="input-field-about" name="aboutCategory" type="password" />
    </div>
    <button className="btn" type="submit">Add</button>
  </form>
</div>
    </div>
  )
}

export default AddCategory
