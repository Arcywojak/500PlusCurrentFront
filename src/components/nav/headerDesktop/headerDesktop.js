import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import landingLogo from '../../../images/logo.svg';    
import logo from '../../../images/logo.png';
import notif from '../../../images/notif.png';
import './headerDesktop.css';


class Header extends Component {
    state = {
        mobileHeader:false,
        user:'',
        landingLogo:false
    }

    
    

    HandleClickOpenNot = (event = '') => {
        let opt = document.querySelector('.notification-list.N2');
        let not = document.querySelector('.notification-list.N1');
        let helpWithHover2 = document.querySelector('.help-with-hover2');
        not.classList.toggle('none');
        if( event === 'MOUSEOVER' ){
            helpWithHover2.classList.remove('none');
          } else {
            helpWithHover2.classList.add('none'); 
          }
        if(!opt.classList.contains('none')){
            opt.classList.toggle('none');    
        }
    }
    HandleClickOpenOpt = (event = '') => {
        let helpWithHover1 = document.querySelector('.help-with-hover1');
        let opt = document.querySelector('.notification-list.N2');
        let not = document.querySelector('.notification-list.N1');
        opt.classList.toggle('none');
        //helpWithHover.classList.toggle('none');

        if( event === 'MOUSEOVER' ){
           helpWithHover1.classList.remove('none');
         } else {
           helpWithHover1.classList.add('none'); 
         }
        if(!not.classList.contains('none')){
            not.classList.toggle('none');    
        }
    }


render() {   

  let LOGO = this.props.landingLogo ? 
        (<img className="landing" src={landingLogo}/>) : 
        (<img className="other" src={logo}/>)

  const deskopLoggedIn =(
    <nav className="header-right in">
                <a className="basic-nav" href="#contact">HOME</a>
                <a className="basic-nav" href="#home">O NAS</a>
                <a className="basic-nav" href="#contact">KONTAKT</a>
                <div onMouseOut={this.HandleClickOpenOpt} onMouseOver={()=>{this.HandleClickOpenOpt('MOUSEOVER')}}
                    className="basic-nav user-options" href="#contact">KONTO
                    <div class="help-with-hover1 none"></div>
                    <div className="notification-list N2 none">
                        <ul>
                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>
                           
                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>

                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>

                            <li className="notification-item-line"></li>

                            <li className="notification-item-link">
                                <a href="">Co innego</a>
                            </li>

                            <li className="notification-item-link">
                                <a href="">Co innego</a>
                            </li>

                            <li className="notification-item-line"></li>

                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>

                            
                        </ul>
                    </div>
                    </div>
                   
                    <div className="notification"
                    onMouseOut={this.HandleClickOpenNot} onMouseOver={()=>{this.HandleClickOpenNot('MOUSEOVER')}}>
                        <div className="open-notification">
                            <img src={notif} alt="bell"/>
                        </div>
                        <div class="help-with-hover2 none"></div>
                        <div className="notification-list N1 none">
                            <ul>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Oferty</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Bachory</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Cos jeszcze</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Cos jeszcze</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Oferty</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Oferty</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
  ) ;
  const deskopLoggedOut= (
    <nav className="header-right out">
        <NavLink className="basic-nav" exact to="/" >HOME</NavLink>
        <NavLink className="basic-nav" exact to="o-nas" >O NAS</NavLink>
        <NavLink className="basic-nav" exact to="kontakt">KONTAKT</NavLink>
        <NavLink className="basic-nav" exact to="logowanie">ZALOGUJ SIĘ</NavLink>
    </nav>
  )
  
  //SPRAWDZENIE CZY ZALOGOWANY
  const isLoggedDeskop = this.state.loggedIn ? (deskopLoggedIn) : (deskopLoggedOut)
  /////////////////////////////  

    return ( 
        <header>
            <div className="header">
            <NavLink exact to="/" className="logo">
                {LOGO}
            </NavLink>
                {isLoggedDeskop}
            </div>
            <div className="filler"></div>
        </header>
    )
}
  }
  
  export default Header;