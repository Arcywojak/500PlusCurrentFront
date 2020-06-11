import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import exit from '../../../images/x.png';
import  mars from '../../../images/mars-solid.svg';
import venus from '../../../images/venus-solid.svg';
import boyAvatar from '../../../images/Boy Avatar.svg';
import plusCircle from '../../../images/plusCircle.svg';
import {removeAll} from '../../../functions/userAccountHelplers';
import './kids.min.css';


class KidDetails extends Component {

    state = {
        name: this.props.kid.name,
        height:this.props.kid.height,
        age:this.props.kid.age,
        shoeSize:this.props.kid.shoeSize,
        gender:this.props.kid.gender,
        color:this.props.kid.favColor,
        valuesFromAccount: true,
        error:''
    }

    componentDidUpdate(){
            if(this.state.valuesFromAccount){

        this.setState({
            name: this.props.kid.name,
            height:this.props.kid.height,
            age:this.props.kid.age,
            shoeSize:this.props.kid.shoeSize,
            gender:this.props.kid.gender,
            color:this.props.kid.favColor,
            valuesFromAccount: false
        })
      }
    }

    toggleValueFromAccount = () => {
        this.setState({
            valuesFromAccount: !this.state.valuesFromAccount
        })
    }

    static propTypes = {
        editUser : PropTypes.func
    } 

     changeValueWithInput = (e) => {

    //    this.toggleValueFromAccount();

        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.name)

    //    this.toggleValueFromAccount();
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

                console.log(this.state.error)

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

            

        //edit kid
        //this.props.editUser();
        }
    }

    submitEditing = () =>{

        let {name, age} = this.state
        let {id} = this.props.kid


        

        fetch(`http://vps817819.ovh.net:50/children/?child_id=${id}&name=${name}&age=${age}&interests=Zabawa&parent_email=${sessionStorage.getItem('user_email')}`, {
            method : "PUT"
        })
        .then(response =>{
            return response.json()
        })
        .then(data=>{
            
            if(data == "Child updated properly"){
                removeAll()
            }

            /* BŁAD ZAPYTANIA */
            else{
                console.log(data)
            }
        })
    }


render(){

    const genderImg = this.props.kid.gender === 'm' ? (
        <img src={mars} alt="chłopiec" />
    ) : (
        <img src={venus} alt="dziewczynka" />
    )

    const errorMessage = this.state.error ? (
        <div className="flying-auth-error-block anim-error adding-kid">
            {this.state.error}
        </div>
    ) : ('')

    return (
        <div className="edit-child-block">

            {errorMessage}

            <form onSubmit={this.handleSubmit}>
                <div className="flying-exit" >
                    <img src={exit} alt="wyjście" 
                    onClick={removeAll}/>
                </div>
                <h2>Zmień dane dziecka</h2>
                    <div className="kid-img img-inside-img">
                        <img src={boyAvatar} alt="Skarb"/>   
                        <img className="img-on-img" src={plusCircle} alt="Skarb"/> 
                    </div>
                    
                
                    <div className="edit-child-text grid">
                        <input className="kid-text-input" type="text" placeholder="Imię"
                        value={this.state.name}
                        name="name"
                        onChange={(e) => {this.changeValueWithInput(e)}}/>
                        <div className="gender-img">
                            {genderImg}
                        </div>
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
                             onChange={(e) => {this.changeValueWithInput(e)}}
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
                        <input className="input-color" type="text"
                        value={this.state.color} 
                        onChange={(e)=>this.changeValueWithInput(e)}
                        name="color"
                        />            
                    </div>
                </div>

                <div className="add-kid-input-sex">
                    <div>
                        <input name="sex" id="male" type="radio"/>
                        <label className="first-label" htmlFor="male" id="m"
                        onClick={(e) => {this.changeFavouriteGender(e)}}
                        >Chłopiec</label>
                    </div>
                    <div>
                        <input name="sex" id="female" type="radio"/>
                        <label className="second-label" htmlFor="female" id="k"
                        onClick={(e) => {this.changeFavouriteGender(e)}}
                        >Dziewczynka</label>
                    </div>
                </div>

                <button className="btn purple-btn" onClick={this.submitEditing}>
                   Zapisz
                </button>
            </form>   
        </div>
    )
  }
}

const mapStateToProps = state => {
      return{
    //      user: state.auth.user
      }
  }

export default connect(mapStateToProps, {editUser})(KidDetails)
