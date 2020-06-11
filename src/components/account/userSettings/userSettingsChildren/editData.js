import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editUser} from '../../../../actions/authActions';
import PropTypes from 'prop-types';
import a from '../../../../images/a.png';
import plusCircle from '../../../../images/plusCircle.svg';
import '../userSettings.min.css';

class EditData extends Component{


    state = {
        name : null,
        email : null,
        newPasswords : [null, null],
        password : null
    }
     handleSubmit = (e) => {
        e.preventDefault();

       

            let {name, email, newPasswords, password} = this.state
            let changedProperty = null
            let changed_value = null

            if(name != "" || name != null){
                changedProperty = 'username'
                changed_value = name
            }
            else if(email != "" || email != null){
                changedProperty = 'email'
                changed_value = email
            }
            else if((newPasswords[0] != "" || newPasswords[0] != null) && (newPasswords[1] != "" || newPasswords[1] != null ) && (newPasswords[0] == newPasswords[1]) ){
                changedProperty = 'password'
                changed_value = newPasswords[0]
            }

            fetch(`http://vps817819.ovh.net:50/users/?changed_property=${changedProperty}&email=${sessionStorage.getItem('user_id')}}&password=${password}&confirm_password=${password}&new_${changedProperty}=${changed_value}`, {
                method : "PUT"
            })
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                console.log(data)
            })



        
    }

    handleInput = (e, name, id=null) =>{
        
        if(id == null){
            this.setState({
                [name] : e.target.value
            },()=>{console.log(this.state)})
        }
        else{
            let help = [...this.state.newPasswords]
            help[id] = e.target.value
            this.setState({
                newPasswords : help
            })
        }
    }

    static propTypes = {
        editUser: PropTypes.func
    }

render(){
    return (
        <form className="edit-data fade-in" onSubmit={this.handleSubmit}>
            <h2>Twoje dane</h2>
            <div className="img-inside-img">
                <img src={a} alt="Ja" />
                <img className="img-on-img" src={plusCircle} alt="zmień"/>
            </div>
            <div className="change-data-block">
                <div className="change-data-first">
                    <img src={a} alt="dane"/>

                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="username">Nazwa</label>
                        <input className="change-data-input" type="text" id="username" onChange={(e)=>{this.handleInput(e,'name')}}/>
                    </div>

                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userEmail">E-mail</label>
                        <input className="change-data-input" type="text" id="userEmail" onChange={(e)=>{this.handleInput(e,'email')}}/> 
                    </div>
                </div>

                <div className="change-data-line"></div>

                <div className="change-data-second">
                    <img src={a} alt="hasło"/>

                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userPass">Hasło</label>
                        <input className="change-data-input" type="text" id="userPass" onChange={(e)=>{this.handleInput(e,'password')}}/>
                    </div>
                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userNewPass">Wpisz nowe hasło</label>
                        <input className="change-data-input" type="text" id="userNewPass" onChange={(e)=>{this.handleInput(e,'password', 0)}}/>     
                    </div>
                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userEmail">Powtórz nowe hasło</label>
                        <input className="change-data-input" type="text" id="userNewPassRep" onChange={(e)=>{this.handleInput(e,'password', 1)}}/> 
                    </div>
                </div>
            </div>
            <button className="btn purple-btn" onClick={this.handleSubmit}>Zmień dane</button>
        </form>
    )
  }
}

const mapStateToProps = state => {
    return {
  //      user: state.auth.user
    }
}

export default connect(mapStateToProps, {editUser})(EditData)
