import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const counterSlice = createSlice({

    name : 'counter',
    initialState : { id : 1, value: 0 },

    reducers : {
        increment : (state) => {
            state.value += 1;
        }  ,

        decrement : (state) => {
            state.value -= 1;
        }
    }});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;