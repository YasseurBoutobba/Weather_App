import { ApiContext } from '../context/ApiContext';
import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { format } from 'date-fns';

const Cards = () => {
    const { WeatherData } = useContext(ApiContext)
    const currentHour = new Date().getHours();
    let Hours = undefined; 
    let NewHours = []

    const getDate = (date) =>{
        return format(new Date(date), 'ha');
    }
    if(WeatherData) {
        if (currentHour >= 12 && WeatherData.nextDayInfo) {
            Hours = [...WeatherData.currentDayInfo.hour, ...WeatherData.nextDayInfo.hour];

            NewHours = Hours.filter((e ,i )=>{
                if(i >= currentHour && i<= currentHour+12 && (currentHour - i)%2 === 0) return true
                return false
            })
            console.log(NewHours)
        } else if (WeatherData.currentDayInfo) {
            Hours = WeatherData.currentDayInfo.hour;

            NewHours = Hours.filter((e ,i )=>{
                if(i > currentHour && i<= currentHour+12 && (currentHour - i)%2 === 0) return true
                return false
            })
            console.log(NewHours)
        }
    }
    


    return ( 
        <div className=' flex gap-3'>
            { Hours && NewHours.map((e, i)=>{
                if(i === 0){
                    return (<Card hour={"NOW"} temp={NewHours[i].temp_c} condition={NewHours[i].condition.text} />)
                }
                return (<Card hour={getDate(NewHours[i].time)} temp={NewHours[i].temp_c} condition={NewHours[i].condition.text} />)
            }) 
            }
        </div>
     );
}
 
export default Cards;