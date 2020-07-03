// ZMIENIĆ TO JAK REAGUJĄ DANE NA DANY TYP AKCJI

import {
    GET_CHILDREN,
    GET_PREFERENCES,
    DELETE_CHILD,
    DELETE_PREFERENCE,
    ADD_CHILD,
    ADD_PREFERENCE
} from '../actions/types'

const initialState = {
    children: null,
    preferences: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CHILDREN:
            return {
                ...state
            };
        case GET_PREFERENCES:
            return {
                ...state
            }
        case DELETE_CHILD:
            return {
                ...state
            }
        case DELETE_PREFERENCE:
            return {
                ...state
            }
        case ADD_CHILD:
            return {
                ...state
            }
        case ADD_PREFERENCE:
            return {
                ...state
            }
        default: {
            return state;
        }
    }

}