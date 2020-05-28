import React, {Component} from 'react'
import '../userSettings.css';
import a from '../../../../images/jakiesKreski.svg';
import {changeSecondSection} from '../../../../functions/userAccountHelplers';

class Security extends Component {

  render(){

    return (
        <div className="fade-in">
            <div className="security-block">
                <div className="security-block-child" onClick={ () => {changeSecondSection('ACTIVITY', false)}}>
                    <div className="security-block-child-1st">
                        <img src={a} alt="aktywność" />
                    </div>
                    <div className="security-block-child-2nd" >
                        <h2>Aktywność na koncie</h2>
                        <p>Sprawdź miejsca i urządzenia  powiązane z twoim kontem.</p>
                    </div>
                </div>
                <div className="security-block-child  margin">
                    <div className="security-block-child-1st">
                        <img src={a} alt="aktywność" />
                    </div>
                    <div className="security-block-child-2nd">
                        <h2>Option 2</h2>
                        <p>lorem ipsum dolor sit asd asdas amet blah blah blah.</p>
                    </div>
                </div>
                <div className="security-block-child">
                    <div className="security-block-child-1st">
                        <img src={a} alt="aktywność" />
                    </div>
                    <div className="security-block-child-2nd">
                        <h2>Option 2</h2>
                        <p>lorem ipsum dolor sit amet blah blah blah.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Security
