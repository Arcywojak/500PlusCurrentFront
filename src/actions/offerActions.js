/****************** FUNCTIONS ********************//*

@getOffers - pobranie ofert(z parametrem: oferty użytkownika; bez parametru: wszystkie oferty)
@setItemsLoading - pomocnicza funkcja (może jakaś animacja, podczas gdy oferty się ładują?)

*//**************************************************/

import axios from 'axios';
import {GET_OFFERS, OFFERS_LOADING} from './types';
import {returnErrors} from './errorActions';


export const testingRedux = (id) => dispatch => {
    dispatch(setItemsLoading() );

    axios
    .get('http://vps817819.ovh.net/?categories=legginsy')
    .then(res=>{
        console.log(res.data)
        console.log(id)
    })
}

export const getOffers = (id = null,category = null) => dispatch => {

    dispatch(setItemsLoading() );
 
    if (category) { // JEŚLI PODAMY KATEGORIE TO ZNACZY ŻE KTOŚ KLIKNĄŁ W TYPY OFERT 
        let url = 'http://vps817819.ovh.net/?categories='+category
        axios
        .get(url)
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors("Coś poszło nie tak podczas ładowanie ofert")))
    }
   
    else if( !category ){     // JEŚLI NIE DAMY PARAMETRU CATEGORY, POBIERAMY WSZYSTKIE OFERTY
        axios
        .get('http://vps817819.ovh.net/?categories=plynydoprania&fbclid=IwAR3xe63ulOUkjH2uTs5ZcZ0O4hn5j5d7clff8qBNZP5Jxa2Hzzuu4_gXT4g')  //FAKE API
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

    } else if( id != null && category == null){   
        // JEŚLI DAMY PARAMETR ID (użytkownika id, można też jego nazwę czy coś), POBIERAMY TYLKO ULUBIONE OFERTY DANEGO UŻYTKOWNIKA
        //hmm, a może lekko to przerobić i wykorzystać do pobierania pojedyńczej oferty, just saying :)
        axios
        .get(`/api/offers/${id}`)
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    }
    
}

export const setItemsLoading = () => {
    return {
        type:OFFERS_LOADING
    }
}