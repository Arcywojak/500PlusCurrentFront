/****************** FUNCTIONS ********************//*

@tokenConfig - Sprawdza czy jest token, jeśli jest, dodaje go do headera
@loadUser - załadowanie użytkownika (jeśli token jest poprawny)
@register - rejestrowanie użytkownika
@login - wylogowanie użytkownika
@logout - wylogowanie użytkownika (usunięcie tokena z localStorage)

////////////////   TO_DO:    /////////////////
 - edytowanie usera (dodawanie, usuwanie ofert i dzieci, zmiana danych, usuwanie konta)

*//**************************************************/

import axios from 'axios';
import {returnErrors} from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

// setup config/header and token
export const tokenConfig = getState => {
    const token = getState().auth.token;

    //Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    //if token, add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({type:USER_LOADING});
   

    axios
    .get( '/api/auth/user', tokenConfig(getState)) //ZMIENIC NA ODPOWIEDNI ROUTE
    .then(res => dispatch({
        type: USER_LOADED,
        payload:res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status) );
        dispatch({
            type: AUTH_ERROR
        })
    })
};

export const register = ({name, email, password, img}) => dispatch => {
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    //parse values into string
    const body = JSON.stringify({name, email, password, img})

    axios
    .post('/api/users', body, config) //ZMIENIC NA ODPOWIEDNI ROUTE
    .then(res => dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    })
    )
    .catch(err => {dispatch(
        returnErrors(err.response.data, err.response.status, REGISTER_FAIL)
        );
        dispatch({
            type:REGISTER_FAIL
        });
    })
};

//export const editUser = 

export const login = ({email, password}) => dispatch => {
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    };

    const body = JSON.stringify({email, password});

    axios
    .post('/api/auth', body, config)
    .then(res => dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {dispatch(
        returnErrors(err.response.data, err.response.status, LOGIN_FAIL)
        );
        dispatch({
            type:LOGIN_FAIL
        });
    })
}

export const logout = () => {
    return{
        type:LOGOUT_SUCCESS
    }
};

export const deleteUser = (id) => (dispatch, getState) => {

    logout();

    //zapytanie usuwajacy usera

};

export const editUser = (id) => (dispatch, getState) => {


    //zapytanie edytujące usera

};