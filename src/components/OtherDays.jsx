import React, { useContext, useState } from 'react';
import { BsDroplet, BsWind } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Card from './Card';

const OtherDays = () => {
    const { weather} = useSelector(state => state.test)
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'

    const forecastDay = weather?.forecast.forecastday

    const style = {
        border : '2px solid rgb(156, 163, 175)',
        minWidth : "200px",
        padding: '4px'
    }
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const currentDay = currentDate.getDay()
    const cuurentThreeDays = []
    for(let i = 0; i < 3; i++){
        cuurentThreeDays.push(weekDays[(currentDay + i) % 7])
    }

    return ( 
        <div >
            <h1 className=' text-center capitalize text-2xl font-medium mb-4 '>{greeting}</h1>
            <p className=' text-center font-roboto text-xl font-medium mb-4'>{formattedTime}</p>
            <p className=' text-left font-medium text-lg mb-4'>Other Days Forcast</p>
            <div className=' flex flex-wrap  items-center justify-center gap-2'>
                {forecastDay.map((e, i)=>{
                    return(<Card style={style} hour={cuurentThreeDays[i]} temp={forecastDay[i]?.day?.avgtemp_c} condition={forecastDay[i]?.day.condition.text}   />)
                })}
            </div>
            
        </div>
        
     );
}
 
export default OtherDays;