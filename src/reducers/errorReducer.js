import { CLEAR_ERRORS, GET_ERRORS } from "../actions/types";

const initialState = {
    msg:{},
    status:null,
    id:null
}

export default function(state = initialState, action) {
    switch(action.type){
        case CLEAR_ERRORS:
            return {
                ...state,
                msg:{},
                status:null,
                id:null
            }
        case GET_ERRORS:
            return {
                ...state,
                msg:action.payload.msg,
                status:action.payload.status,
                id:action.payload.id
            }

        default: {
            return state
        }
    }
}