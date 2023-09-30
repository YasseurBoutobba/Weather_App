import { ApiContext } from '../context/ApiContext';
import React, { useContext, useState } from 'react';

const InputBar = () => {
    const {  updateCountry } = useContext(ApiContext);
    const [inputValue, setInputValue] = useState('')
    const handelSubmit = (e) =>{
        e.preventDefault();
        updateCountry(inputValue)
    }
    
    return ( 
        <div>
            <form className='flex gap-4 ' onSubmit={handelSubmit}>
                <input className=' border-gray-600 border-2 p-2 rounded-full outline-none ' type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
                <button>Submit</button>
            </form>
        </div>
        
     );
}
 
export default InputBar;