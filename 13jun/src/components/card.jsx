import React from 'react'
import './card.css';
// import {AiOutlineHeart} from "react-icons/ai";
// import {FaRegComment} from "react-icons/fa";
// import {FiSend} from "react-icons/fi";

function Card({username,image,rating}) {
  return (
    <div>
        <h1 className='user'>{username}</h1>
        <h3 className='id'>Rating:{rating}</h3>
        <img
        src={image} alt="error" />
        <div className='icon'>
            {/* <AiOutlineHeart/> */}
            {/* <FaRegComment/>
            <FiSend/> */}
            <button className='book'>book now</button>
        </div>
    </div>
    
  )
}

export default Card