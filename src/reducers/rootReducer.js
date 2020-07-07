import {combineReducers} from 'redux';
import authReducer from './authReducer'; 
import offerReducer from './offerReducer'; 
import errorReducer from './errorReducer'; 
import userDataReducer from './userDataReducer';

export default combineReducers({
    auth: authReducer,
    userData: userDataReducer,
    offer: offerReducer,
    error: errorReducer
})