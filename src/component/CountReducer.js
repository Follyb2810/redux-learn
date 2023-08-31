import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Decrement,Increment} from './redux-react/action'
const CountReducer = () => {
  const counter = useSelector(state=>state.counter)
  const log = useSelector(state=>state.log)
  const dispatch=useDispatch()
    return (
    <div>
    <h1>counter :{counter}</h1>
    {log &&<h1>valuable info cant be see </h1>}
    <button onClick={()=>dispatch(Increment())}>+</button>
    <button onClick={()=>dispatch(Decrement())}>_</button>
    </div>
  )
}

export default CountReducer