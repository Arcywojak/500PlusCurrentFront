import React, {Component    } from 'react'
import {connect} from 'react-redux';
import a from '../../../../images/a.png';
import '../userSettings.min.css';
import PropTypes from 'prop-types';
import {deleteUser} from '../../../../actions/authActions';

class DeleteAccount extends Component {


    state ={
        passwords : [null, null]
    }

    handleInput = (e, id) =>{
        
        let help = [...this.state.passwords]
        help[id] = e.target.value
        this.setState({
            passwords : help
        }, ()=>{console.log(this.state.passwords)})
    }
    handleDelete = () => {

        let {passwords} = this.state

        if(passwords[0] == passwords[1]){

            fetch(`http://vps817819.ovh.net:50/users/?email=${sessionStorage.getItem('user_email')}&password=${passwords[0]}`, {
                method : "DELETE"
            })
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                console.log(data)
            })
        }
        else{
            console.log("podane hasła nie są identyczne")
        }
    }

    static propTypes = {
        deleteUser: PropTypes.func
    }

render() {
    
    return (
        <div className="delete-account fade-in">
            <h2>Usuwanie konta</h2>
            <div className="change-data-input-and-label">
                <label className="change-data-label" htmlFor="username">Hasło</label>
                <input className="change-data-input" type="password" id="password" onChange={(e)=>{this.handleInput(e, 0)}}/>
            </div>
            <div className="change-data-input-and-label">
                <label className="change-data-label" htmlFor="username">Powtórz hasło</label>
                <input className="change-data-input" type="password" id="repeatPassword" onChange={(e)=>{this.handleInput(e, 1)}}/>
            </div>
            <h2>Czy na pewno chcesz nas opuścić?</h2>
            <div>
                <img src={a} alt="Na pewno?" />
            </div>
            <button onClick={this.handleDelete} className="btn purple-btn">Usuń konto</button>
        </div>
    )
   }
}

const mapStateToProps = state => {
    return {
     //   userId: state.auth.user.id
    }
}

export default connect(mapStateToProps, {deleteUser})(DeleteAccount);
