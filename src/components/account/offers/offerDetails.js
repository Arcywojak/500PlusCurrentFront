import React, {Component} from 'react'
import {connect} from 'react-redux';
import {editUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';
import {removeAll} from '../../../functions/userAccountHelplers';

class offerDetails extends Component {

    static propTypes = {
        editUser: PropTypes.func
    }

     almostDeleteOffer = () => {
        let deleteBlock = document.querySelector('.delete-user-offer-accept');
        deleteBlock.classList.remove('none');
    }

    deleteOffer = () => {
        removeAll();
        const offerId = this.props.offer.id;

        //USUWANIE OFERTY
        //editUser()
    }

    notToDeleteOffer = () => {
        let deleteBlock = document.querySelector('.delete-user-offer-accept');
        deleteBlock.classList.add('none');
    }

render(){
    return (
        <div className="user-offer-details" key={this.props.offer.id}>
            <div className="flying-exit" onClick={removeAll}>
                <img src={exit} alt="cofnij" />
            </div>
            <div className="user-offer-details-img">
                <img src={boyAvatar} alt="zdjęcie"/>
            </div>
            <div className="user-description-of-item">
                <h2 className="with-bottom-line"> {this.props.offer.name} </h2>
                <p className="big-padding">
                    {this.props.offer.description}
                </p>  
                <div className="price-and-url">
                    <div className="url" >
                        Znalezione na: <br/>
                        <a className="scroll-overflow" href="">{this.props.offer.page}</a>
                    </div>
                    <div className="price">
                        Cena: <span>{this.props.offer.price}</span> zł
                    </div>
                </div>
                <form className="delete-user-offer-accept none" onSubmit = {this.deleteOffer}>
                    Na pewno usunąć? <br/>
                    <input type="submit" value="tak" />
                    <input type="button" value="nie"  onClick={this.notToDeleteOffer}/>
                </form>
                <div className="user-offer-details-buttons">
                    <button className="btn purple-btn">
                        <i className="fas fa-shopping-basket icon"></i>ZAKUP
                    </button>
                    <button className="btn purple-btn" onClick={this.almostDeleteOffer}>
                        <i className="fas fa-trash icon"></i>Usuń ofertę
                    </button>
                </div>
            </div>
        </div>
    )
  }
}

export default connect(null, {editUser})(offerDetails);    
