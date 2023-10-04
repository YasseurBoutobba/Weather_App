import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const getwather = createAsyncThunk(
    "manager/getweather",
    async (country) => {
        try {
            const data = await axios.request({
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
                params: {
                  q: country,
                  days: '3'
                },
                headers: {
                  'X-RapidAPI-Key': 'c82c9e2fc9msha87d8eafa7660d6p156b4fjsn741f2cd57382',
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
              })
              return data.data
        }catch(err){
            throw err
        }
    }
)

const initialState = {
    countryName : '',
    weather : {},
    isLoading : false , 
    showWeather : false ,


}
const managerReducer = createSlice({
    name : 'manager',
    initialState,
    reducers : {
        changeName :  (state,action) => {
            state.countryName  = action.payload
        },
    },
    extraReducers : {
        [getwather.pending] : (state,action) => {
            state.isLoading = true
            state.showWeather = false
        },
        [getwather.fulfilled] : (state,action) => {
            state.weather = action.payload
            state.isLoading = false
            state.showWeather = true
            console.log(action)
            console.log(state.weather)
        },
        [getwather.rejected] : (state, action ) =>{
            state.isLoading = false
            state.showWeather = false
            console.error(action.payload)
        }
    }

})

export default managerReducer.reducer
export const {changeName} = managerReducer.actions