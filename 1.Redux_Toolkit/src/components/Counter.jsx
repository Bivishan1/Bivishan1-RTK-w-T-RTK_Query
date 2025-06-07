import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../app/features/counterSlice'


const Counter = () => {
const count = useSelector((state)=>state.value);
const dispatch = useDispatch();
    return (
    <div>
        <h1>Counter</h1>
        <p>Count : {count}</p>
        <button onClick={()=> dispatch(increment()) }>Increment</button>
        <button onClick={()=> dispatch(decrement()) }>Decrement</button>
    </div>
  )
}

export default Counter