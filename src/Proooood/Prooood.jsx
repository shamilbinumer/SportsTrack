import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Prooood = () => {
  const [prod, setProd] = useState([]);
  const { category } = useParams();

  const getProd = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/sportstrack/getCatWiseProducts/${category}`);
      setProd(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProd();
  }, [category]);

  return (
    <div>
      {prod.map((data, index) => (
        <h1 key={index}>{data.product_name}</h1>
      ))}
    </div>
  );
};

export default Prooood;
