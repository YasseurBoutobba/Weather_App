import React, { useContext, useEffect, useState } from 'react';
import { BsDroplet, BsWind } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Today = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() +1).padStart(2, '0'); // Month is 0-based
    const year = currentDate.getFullYear();
    const { weather } = useSelector(state => state.test)
    const todayWeather = {
        temp: weather.current.temp_c,
        textCondition : weather.current.condition.text,
        windMhp : weather.current.wind_mhp,
        humidity : weather.current.humidity
    }
    return ( 
        <div className='relative'>
            <p className=' font-poppins font-bold  text-center text-lg text-gray-700'>{`${day}.${month}.${year}`}</p>
            <div className='  text-center '>
                <h1 className=' font-roboto text-gray-500 text-[90px] font-bold'>{todayWeather.temp}°</h1>
                <p className='font-poppins text-gray-400 text-4xl font-normal'>{todayWeather.textCondition}</p>
                <div className=' font-poppins font-normal text-base text-gray-500 w-fit absolute top-[50%] right-[-60px] translate-y-[-50%] flex flex-col gap-2'>
                    <div className=' flex gap-2 '>
                        <BsWind />   
                        <span >{todayWeather.windMhp} mhp</span> 
                    </div>
                    <div className=' flex gap-2 '>
                        <BsDroplet />
                        <span >{todayWeather.humidity} %</span> 
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Today;