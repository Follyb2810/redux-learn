import {createStore} from 'redux'
// ! store
export const counter =(state=0,action)=>{
  switch(action.type){
    case "Increment":
     return state+1;
     case "decrement":
     return state-1;
     default:
       return state
  }
}
// ! Action
export const Increment =()=>{
    return {
        type:'Increment'
    }
}
export const Decrement =()=>{
    return {
        type:'decrement'
    }
}
// ! dispatch
let store = createStore(counter)
store.subscribe(()=>console.log(store.getState()))
store.dispatch(Increment())