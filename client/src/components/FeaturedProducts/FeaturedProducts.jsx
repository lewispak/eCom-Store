import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Card from '../Card/Card';

import "./featuredProducts.scss";

const FeaturedProducts = ({type}) => {

  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(
          import.meta.env.REACT_APP_API_URL + "/products?populate=*", 
          {
            headers: {
              Authorization: "bearer " + import.meta.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data)
      } catch (err){
        console.log(err)
      }
    };
    fetchData();
  },[])

  console.log(data)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>

      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>  
  );
};

export default FeaturedProducts