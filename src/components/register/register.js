import React, {Component} from 'react';
import './register.min.css';
import fb from '../../images/fb.svg'
import {Link, Redirect} from 'react-router-dom';

class Register extends Component {



    //pomoc w testach
    componentDidMount(){
        window.helpDel = this.helpDel
    }

    state = {
        name:'',
        email:'',
        password:'',
        repPassword:'',
        error:'',
        accepted_policy : [false, false],
        redirect : false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    //  ustawianie czy wymagane pola 'akceptuje blabla' są oba znaznaczone
    handlePolicy = (e) =>{
        let help = [...this.state.accepted_policy]
        help[e] = (this.state.accepted_policy[e] == false) ? true : false
        this.setState({
            accepted_policy : help
        })
    }

    helpDel = (email, password) =>{
        fetch(`http://vps817819.ovh.net:50/users/?email=${email}&password=${password}`, {
            method: "DELETE"
        })
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            console.log(data)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        let reg_mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let result_mail = this.state.email.match(reg_mail)

        let reg_others = /(<|>|`|~|-|'|")/

        // proste sprawdzenie poprawności formatu maila
        if(result_mail == null){
            this.setState({
                error:'Podano zły format emaila',
                name: ''
            })

            setTimeout(() => {
                if(this.state.error){
                    this.setState({
                        error:''
                    })
                }
            },3000)
        }

        //proste sprawdzenie poprawności nazwy użytkownika (symboliczna ochrona przed XSS)
        else if(this.state.name.match(reg_others) != null || this.state.password.match(reg_others) != null){
            this.setState({
                error:'Podano niedozwolone znaki <>`~-"\'',
            })

            setTimeout(() => {
                if(this.state.error){
                    this.setState({
                        error:''
                    })
                }
            },3000)
        }

        //sprawdzenie czy dwa hasła są takie same
        else if(this.state.password != this.state.repPassword){
            this.setState({
                error:'Podane hasła nie są identyczne',
            })

            setTimeout(() => {
                if(this.state.error){
                    this.setState({
                        error:''
                    })
                }
            },3000)
        }
        else{
            const user = {
                name:this.state.name,
                email: this.state.email,
                password: this.state.password,
            }
    
            //sprawdzenie czy oba pola 'zgadzam się na warunki umowy blabla' są odznaczone
            if(this.state.accepted_policy[0] && this.state.accepted_policy[1]){
    
                console.log(user)
                fetch(`http://vps817819.ovh.net:50/users/?email=${user.email}&password=${user.password}&username=${user.name}`, {
                    method: 'POST'
                })
                .then(response=>{
                    return response.json()
                })
                .then(data=>{
                    
                    if(typeof(data) == "object"){
                        sessionStorage.setItem('user_name', data.username)
                        sessionStorage.setItem('user_id', data.id)
                        sessionStorage.setItem('user_email', data.email)

                        this.setState({
                            redirect : true
                        })
                    }
    
                    // BŁĄD albo 404 albo user istnieje czyli rejestracja nie udała się
                    else{
                        this.setState({
                            error:'Coś poszło nie tak'
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
            else{
                this.setState({
                    error:'Proszę zaznaczyć politykę prywatności'
                })
    
                setTimeout(() => {
                    if(this.state.error){
                        this.setState({
                            error:''
                        })
                    }
                },3000)
            }
        }
        

        

        /*if(!this.state.error){
            this.setState({
                error:'Koronawirus zabije nas wszystkiech'
            })

            setTimeout(() => {
                if(this.state.error){
                    this.setState({
                        error:''
                    })
                }
            },3000)
        }*/
            
        
    }



    render(){ 

        const errorMessage = this.state.error ? (
            <div className="flying-auth-error-block anim-error">
                {this.state.error}
            </div>
        ) : ('')

        return (
            <main className="container-register">

                {errorMessage}

                {/* To jest przekierowanie do strony po-rejestracji, jeżeli rejestracja powiodła się */}
                {(this.state.redirect) ? <Redirect to="/po-rejestracji"/> : null}

                <form className="register-form" onSubmit={this.handleSubmit}>
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
                            Zarejestruj się!
                        </div>

                        {/* dodaj required do inputów, ja przy testach musiałem to usunąć */}
                        <input className="input-1" type="text" placeholder="Podaj swój nick/pseudonim..." name="name"
                         onChange={(e) => this.handleChange(e)}/>
                        <input className="input-1" type="mail" placeholder="Podaj swój email..." name="email"
                         onChange={(e) => this.handleChange(e)}/>
                        <input className="input-1" type="password" placeholder="Podaj nowe hasło..." name="password"
                         onChange={(e) => this.handleChange(e)}/>
                        <input className="input-1" type="password" placeholder="Powtórz hasło..." name="repPassword"
                         onChange={(e) => this.handleChange(e)}/>
                        <div className="captcha-fb-block">
                            <div className="captcha">
                                -CAPTCHA-
                            </div>
                            <div className="btn-fb">
                            <img src={fb} />
                            <span>Użyj facebooka</span>
                             
                            </div>
                        </div>
                        <div className="checkbox-and-text">
                            <div className="register-checkbox">
                                <input className="register-checkbox" type="checkbox" name="regulations" onClick={()=>{this.handlePolicy(0)}}/>
                            </div>
                            <div className="text">
                                <p>Akceptuje warunki umowy bla bla bla bla bal</p>
                            </div>
                        </div>
                        <div className="checkbox-and-text">
                            <div className="register-checkbox">
                                <input className="register-checkbox" type="checkbox" name="receive-not" onClick={()=>{this.handlePolicy(1)}}/>
                            </div>
                            <div className="text">
                                <p>Akceptuje warunki umowy bla bla bla bla bal asd sad asd asd as asd asd as</p>
                            </div>
                        </div>
                        <input type="submit" value="Zarejestruj się" className="btn purple-btn" />
                        <p className="not-important-text register">Masz już konto? <Link to="/logowanie">Zaloguj się</Link></p>
                    </div>
                </form>
            </main>
        )
    }
}

export default Register
