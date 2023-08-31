const LoggedReducer=(state = false,action)=>{
    switch(action.type){
        case "Sign_In":
         return true
         default:
         return state
    }
}


export default LoggedReducer