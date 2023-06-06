import React from 'react'
import './card.css';
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {FiSend} from "react-icons/fi";

function Card({username,image,id}) {
  return (
    <div>
        <h1 className='user'>{username}</h1>
        <h3 className='id'>{id}</h3>
        <img
        src={image} alt="error" />
        <div className='icon'>
            <AiOutlineHeart/>
            <FaRegComment/>
            <FiSend/>
        </div>
    </div>
    
  )
}

export default Card