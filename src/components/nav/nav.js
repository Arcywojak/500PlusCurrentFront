import React, {Component} from 'react';
import HeaderDesktop from './headerDesktop/headerDesktop';
import HeaderMobile from './headerMobile/headerMobile';

class nav extends Component {

    state = {
        mobileHeader:false,
        loggedIn:false,
        user:null
      }
    
      componentDidMount(){
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

export default nav
