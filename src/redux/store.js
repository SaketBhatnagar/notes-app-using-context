import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../redux/features/CounterSlice"

export const store = configureStore({
    reducer:{
        counter : CounterReducer
    }
})