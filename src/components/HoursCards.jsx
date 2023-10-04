import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

const HoursCards = () => {
    const currentHour = new Date().getHours();
    let Hours = undefined; 
    let NewHours = []
    const { weather } = useSelector(state => state.test)
    const WeatherData = {
        currentDayInfo: weather.forecast.forecastday[0],
        nextDayInfo: weather.forecast.forecastday[1]
    }
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
        } else if (WeatherData.currentDayInfo) {
            Hours = WeatherData.currentDayInfo.hour;

            NewHours = Hours.filter((e ,i )=>{
                if(i >= currentHour && i<= currentHour+10 && (currentHour - i)%2 === 0) return true
                return false
            })
        }
    }
    
    const style = {
        border : '2px solid rgb(156, 163, 175)'
    }

    return ( 
        <div className='flex  gap-2'>
            { Hours && NewHours.map((e, i)=>{
                if(i === 0){
                    return (<Card style={style} hour={"NOW"} temp={NewHours[i].temp_c} condition={NewHours[i].condition.text} />)
                }
                return (<Card hour={getDate(NewHours[i].time)} temp={NewHours[i].temp_c} condition={NewHours[i].condition.text} />)
            }) 
            }
        </div>
     );
}
 
export default HoursCards;