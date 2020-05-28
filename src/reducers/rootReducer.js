import {combineReducers} from 'redux';
import authReducer from './authReducer'; 
import offerReducer from './offerReducer'; 
import errorReducer from './errorReducer'; 

export default combineReducers({
    auth: authReducer,
    offer: offerReducer,
    error: errorReducer
})