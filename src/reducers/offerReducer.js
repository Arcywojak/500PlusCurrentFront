import {GET_OFFERS, OFFERS_LOADING} from '../actions/types';

const initialState = {
    offers: [],
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_OFFERS:
            return {
                ...state,
                offers:action.payload,
                loading:false
            };

        case OFFERS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}