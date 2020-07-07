/****************** FUNCTIONS ********************//*

@getChildren - załadowanie dodanych wcześniej dzieci użytkownika
@getPreferences - załadowanie ulubionych ofert użytkownika
@deletePreferences - usuniecie oferty z ulubionych
@deleteChild - usunięcie dziecka ze swojego konta
@addChild - Dodanie dziecka do swojego konta
@addPreference - Dodanie oferty do ulubionych - TO_DO

*//**************************************************/

import axios from 'axios';
import {
    GET_CHILDREN,
    GET_PREFERENCES,
    DELETE_CHILD,
    DELETE_PREFERENCE,
    ADD_CHILD,
    ADD_PREFERENCE
} from './types'

import {returnErrors} from "./errorActions";

export const getChildren = (id, userEmail) => dispatch => {

    const URL = `http://vps817819.ovh.net:50/children/?parent_id=
                ${id}&parent_email=${userEmail}`

    axios.get(URL)
         .then(res => {
             dispatch({
                 type: GET_CHILDREN,
                 payload: res.data
             })
         })
         .catch(err => dispatch(returnErrors("AAA")))
    
}

export const getPreferences = (id, userEmail) => dispatch => {

    const URL = `http://vps817819.ovh.net:50/preferences/?id=
                ${id}&email=${userEmail}`

    axios.get(URL)
         .then(res => {
             dispatch({
                 type: GET_PREFERENCES,
                 payload: res.data
             })
         })
         .catch(err => dispatch(returnErrors("AAA")))
    
}

export const deleteChild = (kidId, userEmail) => dispatch => {

    const URL = `http://vps817819.ovh.net:50/children/?child_id=
                ${kidId}&parent_email=${userEmail}`

    axios.delete(URL)
         .then(res => {
             dispatch({
                 type: DELETE_CHILD,
                 payload: kidId
             })
         })
         .catch(err => dispatch(returnErrors("AAA")))
    
}

export const deletePreference = (preferenceId, userEmail) => dispatch => {

    const URL = `http://vps817819.ovh.net:50/children/?child_id=
    ${preferenceId}&parent_email=${userEmail}`

    axios.delete(URL)
         .then(res => {
             dispatch({
                 type: DELETE_PREFERENCE,
                 payload: preferenceId
             })
         })
         .catch(err => dispatch(returnErrors("AAA")))
    
}

export const addChildren = (user_id, user_email, kid_name, kid_age) => dispatch => {

    const URL = `http://vps817819.ovh.net:50/children/?parent_id=
                ${user_id}&name=${kid_name}&age=
                ${kid_age}&interests=Zabawa&parent_email=${user_email}`

    const kid = {
        parent_id : user_id,
        name: kid_name,
        age: kid_age,
        interests: "Zabawa"
    }

    axios.post(URL)
         .then(res => {
             dispatch({
                 type: GET_CHILDREN,
                 payload: kid
             })
         })
         .catch(err => dispatch(returnErrors("AAA")))
    
}

/* TO_DO
export const addPreference = (id, userEmail) => dispatch => {

    const URL = `http://vps817819.ovh.net:50/children/?parent_id=
                ${id}&parent_email=${userEmail}`

    axios.get(URL)
         .then(res => {
             dispatch({
                 type: GET_CHILDREN,
                 payload: res.data
             })
         })
         .catch(err => dispatch(returnErrors("AAA")))
    
}
*/