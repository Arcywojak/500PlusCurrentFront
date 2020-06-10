import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import './login.min.css';
import fb from '../../images/fb.svg'

class Register extends Component {

    state = {
        email:'',
        password:'',
        error:'',
        redirect : null
    }

    componentDidMount(){
        if(sessionStorage.user_name != undefined){   
            this.setState({redirect : true})
        }
        else{
            this.setState({redirect : false}) 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        fetch(`http://vps817819.ovh.net:50/users/?email=${user.email}&password=${user.password}`, {
            method : 'GET'
        })
        .then(response =>{
            return response.json()
        })
        .then(data=>{

            /* Logowanie udało się */
            if(typeof(data) == "object"){
                console.log(data)
            }
            else{
                this.setState({
                    error:'Logowanie nie powiodło się'
                })
    
                setTimeout(() => {
                    if(this.state.error){
                        this.setState({
                            error:''
                        })
                    }
                },3000)
            }
        })
    }

   

    render(){ 

        const errorMessage = this.state.error ? (
            <div className="flying-auth-error-block anim-error">
                {this.state.error}
            </div>
        ) : ('')

        return (
            <main className="container-register">


                {/* jeżeli jesteś zalogowany to karta logowania jest zablokowana, 
                jest to dodatkowe zabezpieczenie jakby ktoś i tak spróbował wpisac url 
                tej strony , bo i tak jeżeli ktoś jest zalogowany to nie widzi tego w menu*/}
                {(this.state.redirect) ? <Redirect to="/"/> : null}
                {errorMessage}

                <form className="register-form login" onSubmit={this.handleSubmit}>
                    <div className="register-form-1st">
                        <div className="text-with-vertical-line">
                            <div className="anim-text-register">
                                <div className="anim-text-register-child b1">
                                    Szybki i nieograniczny spis ofert, które pokochasz!
                                </div>
                                <div className="anim-text-register-child b2">
                                    Znajdź produkty, które pokochasz!
                                </div>
                                <div className="anim-text-register-child b3">
                                    Zarejestruj się, aby poznać nowy wymiar zakupów online!
                                </div>
                                <div className="anim-text-register-child b4">
                                    Szybki i nieograniczny spis ofert, które pokochasz!
                                </div>
                            </div>
                        </div>
                        <p className="register-form-1st-p">
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
                            vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                    </div>
                    <div className="register-form-2nd">
                        <div className="title-with-underline">
                            Zaloguj się!
                        </div>
                        <input className="input-1" type="mail" placeholder="Podaj swój email..." name="email" required
                        onChange={(e) => {this.handleChange(e)}}/>
                        <input className="input-1" type="password" placeholder="Podaj hasło..." name="password" required
                        onChange={(e) => {this.handleChange(e)}}/>
                        <input type="submit" value="Zaloguj się" className="btn purple-btn" />

                        <div className="word-between-lines">
                            lub
                        </div>
                        
                        <div className="btn-fb">
                            <img src={fb} alt="fb"/>
                            <span>Użyj facebooka</span>   
                        </div>
                        <p className="not-important-text">Nie masz konta? <NavLink to="/rejestracja">Zarejestruj się</NavLink></p>
                        
                    </div>
                </form>
            </main>
        )
    }
}

export default Register
