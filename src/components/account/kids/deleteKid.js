import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeAll} from '../../../functions/userAccountHelplers';
import {editUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg'
import './kids.min.css';
import {Redirect} from 'react-router-dom';

class DeleteKid extends Component {


    state={
        redirect : false
    }
    static propTypes = {
        editUser : PropTypes.func
    }    

    deleteKid = () => {

        fetch(`http://vps817819.ovh.net:50/children/?child_id=${this.props.kid.id}&parent_email=${sessionStorage.getItem('user_email')}`, {
            method : "DELETE"
        })
        .then(response =>{
            return response.json()
        })
        .then(data=>{
            
            if(data == 'Child deleted properly'){
                /*this.props.reRender()
                removeAll()*/
            }
            else{

                /* BŁAD ZAPYTANIA */
                console.log(data)
            }
        })
        

        //  const userId = this.props.userId;
        // const deletedKidId = this.props.kid.id;
  
          //this.props.editUser();
      }

    render(){

        

    return (
        <div className="delete-kid-block" onSubmit={this.deleteKid}>

            {(this.state.redirect) ? <Redirect to="moje-konto"/> : null}

            <div className="flying-exit" onClick={removeAll}>
                <img src={exit} alt="usuń"/>
            </div>
            <img className="img" src={boyAvatar} alt="dziecko" />
            <h2>{this.props.kid.name}</h2>
            <h3>Usunąć członka rodziny?</h3>
            
            <button className="btn purple-btn" onClick={this.deleteKid}>Usuń</button>
            
        </div>
    )
  }
}

const mapStateToProps = state => {
   return{
   //     userId: state.auth.user.id
    }
}

export default connect(mapStateToProps, {editUser})(DeleteKid);
