import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading:false,
    user:null
}

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOADING :
            return {
                ...state,
                isLoading:true
            };
        case USER_LOADED :
            return {
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload
            };
        case LOGIN_SUCCESS :
        case REGISTER_SUCCESS :
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false

            };
        case LOGIN_FAIL :
        case LOGOUT_SUCCESS :
        case AUTH_ERROR :
        case REGISTER_FAIL :

            sessionStorage.removeItem('user_name')
            sessionStorage.removeItem('user_id')
            sessionStorage.removeItem('user_email')

            return {
                ...state,
                token:null,
                isAuthenticated:false,
                user:null,
                isLoading:false
            };

        default: {
            return state;
        }
    }

}