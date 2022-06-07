import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';

import "./rating.css"

const StarRating = () => {

    const [rating,setRating] = useState(null);


  return (

    <div>
        {[...Array(3)].map((star, i) =>{
            const ratingValue = i+1;


            return(
            <label>
                <input type="radio" name="rating" value={ratingValue} onClick={()=> setRating(ratingValue)}/>
                <FaStar className='star' color={ratingValue <= rating ? "#ffc107":"e4e5e9"} style={{fontSize:"35px",paddingRight:"10px"}}/>  
            </label> 
            );
        })}
    </div>
  )
}

export default StarRating;