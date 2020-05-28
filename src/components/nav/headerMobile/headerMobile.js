import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import landingLogo from '../../../images/logo.svg';    
import logo from '../../../images/logo.png';

class headerMobile extends Component {

    handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger-active');
        navigation.classList.toggle('navigation-active');
    }
    
    render() {

        let LOGO = this.props.landingLogo ? 
        (<img class="header-logo-mobile landing" src={landingLogo}/>) : 
        (<img class="header-logo-mobile other" src={logo}/>)

    return (
        
        <header>  
        <div className="header-mobile">
            <a className="logo-mobile-a">
                {LOGO}
            </a>
            <button className="hamburger ham1" onClick={this.handleClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner "></span>
                </span>
            </button>
        <nav className="navigation nav1">
        <ul className="navigation-list">
            <li className="navigation-item"><NavLink to="/rejestracja">Załóż konto</NavLink></li>
            <li className="navigation-item"><NavLink to="/logowanie">Zaloguj się</NavLink></li>
            <div className="break-line"></div>
            <li className="navigation-item"><NavLink to="/">Home</NavLink></li>
            <li className="navigation-item"><NavLink to="/o-nas">O nas</NavLink></li>
            <li className="navigation-item"><NavLink to="/kontakt">Kontakt</NavLink></li>
            <div className="break-line"></div>  
            <li className="navigation-item"><NavLink to="/a">Cos tam</NavLink></li>
            <li className="navigation-item"><NavLink to="/b">Lorem</NavLink></li>
            <li className="navigation-item"><NavLink to="/c">Ipsum</NavLink></li>                    
        </ul>
        </nav> 
        </div>
        <div className="filler-mobile"></div>
    </header>   
        
            
        
    )
}
}

export default headerMobile
