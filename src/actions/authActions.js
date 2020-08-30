/****************** FUNCTIONS ********************//*

@tokenConfig - Sprawdza czy jest token, jeśli jest, dodaje go do headera
@loadUser - załadowanie użytkownika (jeśli token jest poprawny)
@register - rejestrowanie użytkownika
@login - logowanie użytkownika
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
    REGISTER_FAIL,
    CLEAR_ERRORS
} from '../actions/types';

import {AUTH_BASE_URL} from './_BASE_URL';

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

    const email = sessionStorage.getItem("user_email");
    const password = sessionStorage.getItem("user_password");
    
   
    if(email && password){

        const URL = `${AUTH_BASE_URL}?email=${email}&password=${password}`

        axios
        .get(URL) 
        .then(res => {console.log("SUCCESS", email, password);
            dispatch({
                type: USER_LOADED,
                payload:res.data
            });
            dispatch({
                type:CLEAR_ERRORS,
                payload:res.data
             });
        })
        .catch(err => {
            dispatch(returnErrors("Nie udało się załadować użytkownika") );
            dispatch({
                type: AUTH_ERROR
            })
        })

    }
    
};

export const register = ({name, email, password}) => dispatch => {

   /* const config = {
        headers:{
            "Content-type":"application/json"
        }
    }*/

    //parse values into string
    //const body = JSON.stringify({name, email, password})

    const URL = `${AUTH_BASE_URL}?username=${name}&email=${email}&password=${password}`

    axios
    .post(URL)
    .then(res => {

     

            sessionStorage.setItem('user_name', res.data.username)
            sessionStorage.setItem('user_id', res.data.id)
            sessionStorage.setItem('user_email', res.data.email)

            dispatch({
            type:CLEAR_ERRORS,
            payload:res.data
            })

            dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
            })
    
    })
    .catch(err => {dispatch(
        returnErrors("Rejestracja nie powiodła się!")
        );
        dispatch({
            type:REGISTER_FAIL
        });
    })
};

export const login = ({email, password}) => dispatch => {

   /* const config = {
        headers:{
            "Content-type":"application/json"
        }
    };*/

    //const body = JSON.stringify({email, password});

    const URL = `${AUTH_BASE_URL}?email=${email}&password=${password}`

    axios
    .get(URL)
    .then(res => {

        console.log(res.data)

        /*Login success */
      
            sessionStorage.setItem('user_name', res.data.username)
            sessionStorage.setItem('user_id', res.data.id)
            sessionStorage.setItem('user_email', res.data.email)
            sessionStorage.setItem('user_password', password)

            dispatch({
            type:CLEAR_ERRORS,
            payload:res.data
            })

            dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
            })

      

    })
    .catch(err => {

        dispatch(
        returnErrors("Logowanie nie powiodło się!")
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