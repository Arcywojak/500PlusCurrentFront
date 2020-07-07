import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
import './login.css';
import fb from '../../images/fb.svg'

class Login extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired
    }

    state = {
        email:'',
        password:'',
        error:'',
        redirect : null
    }

    componentDidUpdate(prevProps){

        const {error} = this.props;

        console.log(this.state.error)

        if(error !== prevProps.error || ( error && this.state.error === '') ){

            this.setState({
                error:'Logowanie nie powiodło się'
            })

        }
        
    }

    componentDidMount(){
        if(sessionStorage.user_name !== undefined){   
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

        console.log("submit")

        this.setState({
            error:''
        })

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(user);
    }

   

    render(){ 

        const errorMessage = this.state.error ? (
            <div className="flying-auth-error-block anim-error">
                {this.state.error}
            </div>
        ) : ('')

        return (
            <main className="container-register">

                {(this.props.isAuthenticated) ? <Redirect to="/"/> : null}

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
                        <input className="input-1" type="email" placeholder="Podaj swój email..." name="email" required
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

const mapStateToProps = state => {
 
    return {
        isAuthenticated:state.auth.isAuthenticated,
        error: state.error.msg
    }
}

export default connect(mapStateToProps, {login})(Login);
