import React, { useEffect, useState } from 'react'
import './Cart.scss'
import Navbar from '../../Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';

const Cart = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  // const [price,setPrice]=useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [getPrdct, setProdct] = useState([])

  // const [count,setCount]=useState(0)
  const getPrdctDetails = async () => {
    const res = await axios.get(` http://localhost:7000/sportstrack/getCartProduct/${id}`)
    setProdct(res.data)

  }
  useEffect(() => {
    getPrdctDetails()
  }, [])



  useEffect(() => {
    const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price), 0);
    setTotalPrice(totalPriceSum);
  }, [getPrdct]);


  const BuyNow = async (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm("Are you sure you want to proceed to checkout?");
    if (userConfirmed) {
      try {

        // console.log(res.data);
        await axios.delete(`http://localhost:7000/sportstrack/delAlltProduct/${id}`);
        alert("Order Placed");
        navigate("/")
      } catch (error) {
        console.error("Error deleting products:", error);
      }
    }
  };

  const delCartPrdct = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this product from the cart?");
    if (userConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:7000/sportstrack/delCartProduct/${id}`);
        console.log(res.data);
        if (res) {
          alert("Product deleted");
        } else {
          alert("Product not deleted");
        }
        getPrdctDetails();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };


  const handleQuantityChange = (productId, newQuantity) => {
    const updatedGetPrdct = getPrdct.map((product) => product._id === productId ? { ...product, quantity: newQuantity, price: product.price * newQuantity, } : product);
    console.log(updatedGetPrdct[0]);
    setProdct(updatedGetPrdct);
  };


  return (
    <div className='cart-main'>
      <Navbar />
      <div className="back">
        <Link className='back-btn' to='/'>Back</Link>
      </div>
      <div><h3 className='main-heading'>Items In Cart</h3></div>
      <div className="display-ietm-main">

        <div className="display-ietm-left">

          <div className="ul"></div>
          {getPrdct.length === 0 ? (
            <>
              <p className="no-items-message">No items in the cart</p>
              <div className='shpDiv'><Link className='shp-now-btn' to='/'>Shop Now</Link></div>
            </>
          ) : (
            <>
              {getPrdct.map((data, index) => (
                <div className="details-main" key={data._id}>
                  <div className="details-image-section">
                    <div className="image"><img src={data.banner} alt="" /></div>
                  </div>
                  <div className="details-details-section">
                    <p className="item-name">{data.product_name}</p>
                    <p className="description">{data.description}</p>
                    <p className='size'>Size : {data.size}</p>
                    <select
                      name=""
                      id=""
                      onChange={(e) => handleQuantityChange(data._id, parseInt(e.target.value))}
                      value={data.quantity}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Qty: {i + 1}
                        </option>
                      ))}
                    </select>
                    <div className='price-div'>

                      <span className='price'>₹ {data.price}</span>
                      <span className='og-price'><strike>₹ 699</strike></span>
                    </div>
                    <button className='delBtn' onClick={() => delCartPrdct(data._id)}> <RiDeleteBin5Fill className='delete' /></button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="line"></div>
        <div className="display-ietm-right">
          <p className='order-summery'>Order Summery</p>
          <table>
            <tr>
              <td className='td'>Total price (Inc GST)</td>
              <td>₹  {totalPrice ? totalPrice : 0}</td>
            </tr>
            {/* <tr>
              <td>Discount</td>
              <td className='discout-price'>₹ 200</td>
            </tr> */}
            <tr>
              <td>Estimated Delivery Fee</td>
              <td>₹ 99</td>
            </tr>
          </table>
          <div className="table-ul"></div>
          <table>
            <tr>
              <td className='total-text' id='td'>Total</td>
              <td className='total-text'>₹ {totalPrice ? totalPrice + 99 : 99}</td>
            </tr>
          </table>

          <button onClick={BuyNow}> <FaShoppingCart /> Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
