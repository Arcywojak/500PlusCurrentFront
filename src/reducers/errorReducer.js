import { CLEAR_ERRORS, GET_ERRORS } from "../actions/types";

const initialState = {
    msg:''
}

export default function(state = initialState, action) {
    switch(action.type){
        case CLEAR_ERRORS:
            return {
                ...state,
                msg:''
            }
        case GET_ERRORS:
            return {
                ...state,
                msg: action.payload
            }

        default: {
            return state
        }
    }
}