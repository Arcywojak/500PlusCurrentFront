import React from 'react';
import './userSettings.css';
import '../account.min.css';
import x from '../../../images/exit.png';
import deleteAccount1 from '../../../images/Delete.svg';
import edit from '../../../images/Edit.svg';
import security from '../../../images/Security.svg';

import EditData from './userSettingsChildren/editData';
import Security from './userSettingsChildren/security';
import DeleteAccount from './userSettingsChildren/deleteAccount';
import Activity from './userSettingsChildren/securityChildren/activityOnAccount';

import {changeSecondSection, removeAll} from '../../../functions/userAccountHelplers';


const UserSettings = () => {
    return (
        <div className="user-settings-block">
            <div className="user-settings-first">
                <div className="fixed-when-mobile">
                    <div className="first-text-and-img first EDIT_DATA active" 
                    onClick={() => changeSecondSection('EDIT_DATA')}>
                        <div className="img">
                            <img src={edit} alt="opcja" />
                        </div>
                        <div className="text">
                            Edytuj dane
                        </div>
                    </div>
                    <div className="first-text-and-img first SECURITY"
                    onClick={() => changeSecondSection('SECURITY')}>
                        <div className="img">
                            <img src={security} alt="opcja" />
                        </div>
                        <div className="text">
                            Bezpieczeństwo
                        </div>
                    </div>
                    <div className="first-text-and-img first DELETE_ACCOUNT"
                    onClick={() => changeSecondSection('DELETE_ACCOUNT')}>
                        <div className="img">
                            <img src={deleteAccount1} alt="opcja" />
                        </div>
                        <div className="text" >
                            Usuń konto
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-settings-second">
                <div className="flying-exit" onClick={removeAll}>
                    <img src={x} alt="wróć" />
                </div>
                <div className="second EDIT_DATA active">
                    <EditData />
                </div>
                <div className="second SECURITY none">
                    <Security />
                </div>
                <div className="second ACTIVITY none">
                    <Activity/>
                </div>

                <div className="second DELETE_ACCOUNT none">
                    <DeleteAccount />
                </div>
            </div>
        </div>
    )
}

export default UserSettings
