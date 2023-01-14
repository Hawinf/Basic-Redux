import {counterReducer }  from './counterReducer';
import authReducer  from './authReducer'
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    counterReducer,
    authReducer
})

export default rootReducer;