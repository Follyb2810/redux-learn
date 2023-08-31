import CounterReducer from "./counter";
import LoggedReducer from "./LoggedIn";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
    counter:CounterReducer,
    log:LoggedReducer
})

export default RootReducer