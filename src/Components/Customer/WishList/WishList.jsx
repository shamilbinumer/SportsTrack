import React, { useEffect, useState } from 'react';
import './WishList.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const WishList = () => {
    const { id } = useParams();
    const [getPrdct, setProdct] = useState([]);

    const getPrdctDetails = async () => {
        const res = await axios.get(`http://localhost:7000/sportstrack/getCartProduct/${id}`);
        setProdct(res.data);
        console.log(getPrdct);
    };

    useEffect(() => {
        getPrdctDetails();
    }, []);

    return (
        <div className='whishlist-main'>
            <div className="backBtn"><Link className='back-btn' to='/'>Back</Link></div>
            <h3 className='mainHeading'>Wishlist</h3>
            <div className="cards-main">
                {
                    getPrdct.map((data, index) => (
                        <div className="cards" key={index}>
                            <Link className='link'>
                                <div className="Card">
                                    <div className="prdct-thumnalil"><img src={data.banner} alt="" /></div>
                                    <div className="card-details">
                                        <p className='item-title'>{data.product_name}</p>
                                        <div><span className="prdct-description">{data.description}</span></div>
                                        <div className="prices">
                                            <div><p className='price'>₹ {data.price}</p></div>
                                            <div><strike><p className='og-price'>₹ 799</p></strike></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default WishList;
