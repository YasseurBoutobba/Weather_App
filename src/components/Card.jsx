import { ApiContext } from '../context/ApiContext';
import React, { useContext, useState } from 'react';
const Card = ({hour , temp, condition} = props) => {
    return ( 
        <div className="card  font-poppins px-6 py-4 w-fit text-center border-gray-300 border-2 rounded-[20px]">
            <p className=" font-medium text-gray-800 text-xl">{hour}</p>
            <h1 className=" text-4xl text-gray-500 font-medium my-4">{parseInt(temp)}°</h1>
            <p className=" font-medium text-gray-400 text-lg">{condition}</p>
        </div>
     );
}
 
export default Card;