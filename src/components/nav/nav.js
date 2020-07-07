import React, {Component} from 'react';
import HeaderDesktop from './headerDesktop/headerDesktop';
import HeaderMobile from './headerMobile/headerMobile';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
import {loadUser} from '../../actions/authActions';

class Nav extends Component {

    state = {
        mobileHeader:false,
        loggedIn:false,
        user:null
      }

      static propTypes = {
        loadUser: PropTypes.func.isRequired
        }
    
      componentDidMount(){

        /* TEST LOADING USER */

    if(!this.props.isAuthenticated){
        this.props.loadUser();
    }    

        ///////////////////////

      /////// Load User ///////

     //if(!this.props.isAutheticated){

      //  const email = sessionStorage.getItem("user_email");
      //  const name = sessionStorage.getItem("user_name");

      // 0.BACKEND HAVE TO PROVIDE TOKEN
      // 1.GET TOKEN FROM SESSION STORAGE
      // 2.TRY LOGGINING IN WITH TOKEN

      ///  this.props.loadUser( TOKEN );

      // }

        window.addEventListener('resize', () => {
            if(window.innerWidth < 850 || window.innerHeight < 500){this.setState({mobileHeader:true})}
            else{this.setState({mobileHeader:false})}
            }, true);
            window.addEventListener('load', () => {
            if(window.innerWidth < 850 || window.innerHeight < 500) {
                this.setState({mobileHeader:true})
            } else {
                this.setState({mobileHeader:false})
            }
        });

        if(this.props.location.pathname === '/'){
            this.setState({
                landingLogo:true
            })
        } else {
            this.setState({
                landingLogo:false
            })
        }

      }

      componentDidUpdate(prev){
        if(prev.location.pathname !== this.props.location.pathname){
            if(this.props.location.pathname === '/'){
                this.setState({
                    landingLogo:true
                })
            }
            else {
                this.setState({
                    landingLogo:false
                })
            }     
        }     
    }

     

    render(){

        const header = this.state.mobileHeader ? 
        <HeaderMobile landingLogo={this.state.landingLogo}/> 
               : 
        <HeaderDesktop landingLogo={this.state.landingLogo}/>

        return (
            <>
               {header}
            </>
        )
    }
    
}

const mapStateToProps = state => {
    
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {loadUser})(Nav)
