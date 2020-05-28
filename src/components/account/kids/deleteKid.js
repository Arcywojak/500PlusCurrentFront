import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeAll} from '../../../functions/userAccountHelplers';
import {editUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg'
import './kids.min.css';

class DeleteKid extends Component {

    static propTypes = {
        editUser : PropTypes.func
    }    

    deleteKid = () => {
        removeAll();

        //  const userId = this.props.userId;
        // const deletedKidId = this.props.kid.id;
  
          //this.props.editUser();
      }

    render(){

        

    return (
        <div className="delete-kid-block" onSubmit={this.deleteKid}>
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
