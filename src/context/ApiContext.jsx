import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});
  const [country, setCountry] = useState("")
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: country,
      days: '7'
    },
    headers: {
      'X-RapidAPI-Key': 'c82c9e2fc9msha87d8eafa7660d6p156b4fjsn741f2cd57382',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  useEffect(() => {
      async function fetchWeather() {
        try {
          const response = await axios.request(options);
          setApiData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      }
      fetchWeather()
  }, [country]);

  const updateCountry = (newCountry) => {
    setCountry(newCountry);
  };
  const WeatherData = {
    temp : apiData?.current?.temp_c,
    conditionText : apiData?.current?.condition.text,
    wind_mph : apiData?.current?.wind_mph,
    currentDayInfo : apiData?.forecast?.forecastday[0],
    nextDayInfo : apiData?.forecast?.forecastday[1]
  }
  return (
    <ApiContext.Provider value={{ apiData, WeatherData, updateCountry  }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
