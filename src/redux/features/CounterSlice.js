import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
    name:"Counter",
    initialState:{count:0}, 
    reducers:{
        increment : (state,action)=>{
           state.count +=1
        },
        decrement : (state,action)=>{
            state.count -=1
          
        },
        reset : (state,action)=>{
            state.count =0
          
        }
    }


})

export const {increment,decrement,reset} = Counter.actions;
export default Counter.reducer;

