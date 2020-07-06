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
    children: [],
    preferences: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CHILDREN:
            return {
                ...state,
                children: action.payload
            };
        case GET_PREFERENCES:
            return {
                ...state,
                preferences: action.payload
            }
        case DELETE_CHILD:
            return {
                ...state,
                children: state.children.filter(child => child.id !== action.payload) 
            }
        case DELETE_PREFERENCE:
            return {
                ...state,
                preferences: state.preferences.filter(preference => preference.id !== action.payload)

            }
        case ADD_CHILD:
            return {
                ...state,
                children: [...state.children, action.payload]
            }
        case ADD_PREFERENCE:
            return {
                ...state,
                preferences: [...state.preferences, action.payload]
            }
        default: {
            return state;
        }
    }

}