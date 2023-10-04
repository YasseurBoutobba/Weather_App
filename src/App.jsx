import { useContext, useEffect, useState } from 'react'

import Card from './components/Card';
import InputBar from './components/Input';
import HoursCards from './components/HoursCards';
import Today from './components/Today';
import OtherDays from './components/OtherDays';
import { useSelector,useDispatch } from 'react-redux';
import { changeName } from './store/actions/reducer';
import { getwather } from './store/actions/reducer';
function App() {
  const {countryName, showWeather, weather, isLoading } = useSelector(state => state.test)
  const disptach = useDispatch()
  
  

  return (
    <main className=' flex flex-col bg-gray-200 items-center justify-center h-screen w-screen'>

      <InputBar />
      {showWeather && 
      <div className=' bg-gray-50 rounded-3xl grid gap-y-8 grid-cols-3 grid-rows-2 w-fit max-w-[70%] h-[500px] mt-4'>
        <div className=' p-10 h-fit col-start-1 col-end-3 '>
          <Today />
        </div>
        <div className='p-10   col-start-1 col-end-3'>
          <HoursCards  />
        </div>
        <div className=' font-poppins p-6 bg-gray-400/40 rounded-3xl col-start-3 col-end-3 row-start-1 h-fit'>
          <OtherDays />
        </div>
      </div>}
     
    </main>
  )
}

export default App
