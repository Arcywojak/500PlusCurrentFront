import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addKid, editUser} from '../../../actions/authActions';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';
import PropTypes from 'prop-types';
import plusCircle from '../../../images/plusCircle.svg';
import {removeAll} from '../../../functions/userAccountHelplers';
import './kids.min.css';


class AddKid extends Component {

    state = {
        name:'',
        height:'100',
        age:10,
        shoeSize:20,
        gender:'',
        color:'Czerwony'
    }

    static propTypes = {
        editUser : PropTypes.func
    } 

     changeValueWithInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

     changeValueWithButton = (e, sign, name) => {
        e.preventDefault();

        if(sign === '+') {
            let value = ++e.target.previousElementSibling.value;
            switch(name){
                case 'HEIGHT':
                    this.setState({
                        height: value
                    }); break;
                case 'AGE':
                    this.setState({
                        age: value
                    }); break;
                case 'SHOE_SIZE':
                    this.setState({
                        shoeSize: value
                    }); break;
                    
                default: break;
            }

        } else if (sign ==='-') {
            let value = e.target.nextElementSibling.value;
            
            if(value > 1) {
                value--;
                switch(name){
                    case 'HEIGHT':
                        this.setState({
                            height: value
                        }); break;
                    case 'AGE':
                        this.setState({
                            age: value
                        }); break;
                    case 'SHOE_SIZE':
                        this.setState({
                            shoeSize: value
                        }); break;  

                    default: break;

                }
            }
        }
    }
     changeFavouriteColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }
     changeFavouriteGender = (e) => {
        this.setState({
            gender: e.target.id
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.error){

            const newKid = {
            name: this.state.name,
            height: this.state.height,
            age: this.state.age,
            shoeSize: this.state.shoeSize,
            color: this.state.color,
            gender: this.state.gender
            }

            const {name, height, age, shoeSize, color} = newKid;

            if(name==='' || height<=0 || age<=0 || shoeSize<=0 || color===''){
                this.setState({
                    error: "Pola nie mogę być puste lub zerowe!"
                })

                setTimeout(() => {
                    if(this.state.error){
                        this.setState({
                            error:''
                        })
                    }
                },3000)
            } else {
                console.log(newKid);
            }

        //add new kid
        //this.props.editUser();
        }
    }

render(){

    const errorMessage = this.state.error ? (
        <div className="flying-auth-error-block anim-error adding-kid">
            {this.state.error}
        </div>
    ) : ('')

    return (
        <div className="add-child-block">

            {errorMessage}

            <form onSubmit={this.handleSubmit}>
                <div className="flying-exit" >
                    <img src={exit} alt="wyjście" 
                    onClick={removeAll}/>
                </div>
                <h2>Dodaj nowego członka</h2>
                    <div className="kid-img img-inside-img">
                        <img src={boyAvatar} alt="Skarb"/>   
                        <img className="img-on-img" src={plusCircle} alt="Skarb"/> 
                    </div>
                    
                
                    <div className="edit-child-text">
                        
                        <input className="kid-text-input" type="text" placeholder="Imię" name="name"
                        value={this.state.name}
                        onChange={(e) => {this.changeValueWithInput(e)}}/>

                    </div>
                <div className="child-F-grid">
                    <div className="edit-child-text">
                        Wzrost: [CM] <br/>
                        <div className="input-number">
                            <button 
                            onClick={(e) => {this.changeValueWithButton(e, '-', 'HEIGHT')}}
                            >-</button>
                            <input type="number" 
                             value={this.state.height}
                             onChange={(e) => {this.changeValueWithInput(e, 'HEIGHT')}}
                             name="height"
                            />
                            <button 
                            onClick={(e) => {this.changeValueWithButton(e, '+', 'HEIGHT')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Wiek: <br/>
                        <div className="input-number">
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '-', 'AGE')}}
                            >-</button>
                            <input type="number"
                            value={this.state.age}
                            onChange={(e) => {this.changeValueWithInput(e)}} 
                             name="age"
                            />
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '+', 'AGE')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Rozmiar buta: <br/>
                        <div className="input-number">
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '-', 'SHOE_SIZE')}}
                            >-</button>
                            <input type="number" 
                            value={this.state.shoeSize}
                            onChange={(e) => {this.changeValueWithInput(e)}}
                            name="shoeSize"
                            />
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '+', 'SHOE_SIZE')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Kolor: <br/>
                        <select name="favColor" id="favColor" className="input-select"
                        onChange={(e)=> {this.changeFavouriteColor(e)}}>
                        <option value="Czerwony">Czerwony</option>
                        <option value="Żólty">Żólty</option>
                        <option value="Zielony">Zielony</option>
                        <option value="Pomarańczowy">Pomarańczowy</option>
                        <option value="Niebieski">Niebieski</option>
                        <option value="Granatowy">Granatowy</option>
                        <option value="Fioletowy">Fioletowy</option>
                        <option value="Różowy">Różowy</option>
                        <option value="Czarny">Czarny</option>
                        <option value="Brązowy">Brązowy</option>
                        <option value="Biały">Biały</option>
                        </select>
                        
                    </div>
                </div>

                <div className="add-kid-input-sex">
                    <div>
                        <input name="sex" id="m" type="radio" onChange={(e) => {this.changeFavouriteGender(e)}}/>
                        <label className="first-label" htmlFor="m">Chłopiec</label>
                    </div>
                    <div>
                        <input name="sex" id="k" type="radio" onChange={(e) => {this.changeFavouriteGender(e)}}/>
                        <label className="second-label" htmlFor="k">Dziewczynka</label>
                    </div>
                </div>

                <button className="btn purple-btn">
                   Zapisz
                </button>
            </form>   
        </div>
    )
  }
}

const mapStateToProps = state => {
      return{
         user: state.auth.user
      }
  }

export default connect(mapStateToProps, {editUser})(AddKid);
