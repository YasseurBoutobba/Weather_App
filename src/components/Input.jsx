import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName  } from '../store/actions/reducer';
import { getwather } from '../store/actions/reducer';

const InputBar = () => {
    const [inputValue, setInputValue] = useState('')
    const { countryName } = useSelector(state => state.test)
    const disptach = useDispatch()
    const handelSubmit =   (e) =>{
        e.preventDefault();
        disptach(changeName(inputValue))
    }
    useEffect(()=>{
        disptach(getwather(countryName))
    }, [countryName])
    
    return ( 
        <div>
            <form className='flex gap-4' onSubmit={handelSubmit}>
                <input className=' border-gray-600 border-2 px-4 py-2 rounded-full outline-none' type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
                <button>Submit</button>
            </form>
        </div>
        
     );
}
 
export default InputBar;