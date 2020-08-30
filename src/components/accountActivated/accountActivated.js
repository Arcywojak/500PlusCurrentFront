import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import './accountActivated.css';

class accountActivated extends Component {

    state = {
        redirect: false
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({
                redirect : true
            })
        }, 5000)
    }

    render(){

        if (this.state.redirect) {
            return <Redirect to='/'/>;
          }
  
        return (
            <div className="account-activeted-container">
                <h1>Hurra!</h1>
                <h1>Twoje konto zostało aktywowane pomyślnie!</h1>
                <div className="big-icon">
                    <i className="far fa-check-circle"></i>
                </div>
                <h2>
                    Teraz możesz w pełni cieszyć się korzyścią jakie płyną 
                    podczas korzystanie z platformy CoZa500Plus.pl!
                </h2>
                <h3>
                    Za chwilę nastąpi automatyczne przekierowanie na stronę główną serwisu...
                </h3>

            </div>
        )
    }   
}

export default accountActivated
