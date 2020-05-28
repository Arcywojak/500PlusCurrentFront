import React, {Component} from 'react'
import kreski from '../../../../../images/jakiesKreski.svg';
import a from '../../../../../images/a.png';
import exit from '../../../../../images/exit.png';
import {removeAll} from '../../../../../functions/userAccountHelplers';
import {tab} from '../../../../../functions/activityOnAccountHELPER';
import {deleteTab} from '../../../../../functions/activityOnAccountHELPER';

class activityOnAccount extends Component {

   

    render(){

        return (
            <div className="activity-block">
                <div className="flying-exit" >
                    <img src={exit} alt="wyjście" 
                    onClick={()=>{removeAll('LOGOUT_ACTIVITY')}}/>
                </div>
                <h2 className="activity-h2">
                    Czy chcesz usunąć to urządzenie?
                </h2>
                <img src={a} alt="urządzenie" className="activity-img"/>
                <h3 className="activity-h3">
                    (Nazwa urządzenia)
                </h3>
                <p className="activity-paragraph">
                    Usunięcie tego urządzenia z konta spowoduje
                    wylogowanie z Twojego konta na tym urządzeniu.
                </p>
                <p className="activity-paragraph lighter-text">
                    (Ta operacja nie jest permamentna)
                </p>
                <div className="settings-buttons-wrapper">
                    <button className="settings-button" 
                    onClick={()=> {deleteTab(); removeAll('LOGOUT_ACTIVITY')}}>
                        Tak
                    </button>
                    <button className="settings-button">Nie</button>
                </div>
            </div>
        )
    } 
}

export default activityOnAccount
