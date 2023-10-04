import { configureStore } from "@reduxjs/toolkit";
import managerReducer from "./actions/reducer"
export const store = configureStore({
    reducer:{
        test : managerReducer
    }
})