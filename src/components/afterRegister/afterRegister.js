import React, {Component} from 'react'
import './afterRegister.css'
import a from '../../images/a.png'
import logo from '../../images/logo.svg'
import rocket from '../../images/rocket.png'

class AfterRegister extends Component {

    goToNextBlock = (id) => {
        console.log(id);

        const currentBlock = document.querySelector(`.changing-content#nr${id}`)
        
        const nextBlock = document.querySelector(`.changing-content#nr${Number(id)+1}`)

        currentBlock.classList.add("invisible");
        nextBlock.classList.remove("invisible")
    }

    render(){
        return(
        
            <main>
                <div className="after-register-block">
                    <section className="after-register-block-first">

                        <div className="after-register-fixed-logo">
                            <img src={logo} alt="logo" />
                        </div>
                            
                        <div className="after-register-block-first-inner">

                    
                            <h1>Zaczynamy!</h1>

                            <img src={rocket} alt="rakieta" />

                            <p>
                                Dzięki skonfigurowaniu konta nasz algorytm będzie mógł 
                                lepiej dopasować się w Twoje gusta i jeszcze bardziej 
                                uprzyjemnić Ci zakupy.
                            </p>
                        </div>
                    </section>
                    <section className="after-register-block-second">
                        <button className="back-btn">
                            <i class="fas fa-chevron-left icon"></i>  POWRÓT
                        </button>

                        <div className="after-register-wrapper changing-content" id="nr1">

                            <div className="after-register-block-second-inner shorter" >
                                <h1>Odpowiedz na kilka pytań aby skonfigurować Swoje konto.</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Odpowiedzi na pytania nie są bezpośrednio powiązane z tobą
                                    dzięki czemu nie da się ich dopasować do konkretnego użytkownika.
                                </p>
                            </div>

                            <button className="after-register-btn" id="1" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                DO DZIEŁA!
                            </button>

                            <span className="after-register-span">Skonfiguruj później</span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr2">

                            <div className="after-register-block-second-inner shorter" >
                                <h1>Podaj wymiary</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Odpowiedzi na pytania nie są bezpośrednio powiązane z tobą
                                    dzięki czemu nie da się ich dopasować do konkretnego użytkownika.
                                </p>
                            </div>

                            <button className="after-register-btn" id="2" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                DO DZIEŁA!
                            </button>

                            <span className="after-register-span">Skonfiguruj później</span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr3">

                            <div className="after-register-block-second-inner shorter" >
                                <h1>Odpowiedz na kilka pytań aby skonfigurować Swoje konto.</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Odpowiedzi na pytania nie są bezpośrednio powiązane z tobą
                                    dzięki czemu nie da się ich dopasować do konkretnego użytkownika.
                                </p>
                            </div>

                            <button className="after-register-btn" id="3" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                DO DZIEŁA!
                            </button>

                            <span className="after-register-span">Skonfiguruj później</span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr4">

                            <div className="after-register-block-second-inner shorter" >
                                <h1>Odpowiedz na kilka pytań aby skonfigurować Swoje konto.</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Odpowiedzi na pytania nie są bezpośrednio powiązane z tobą
                                    dzięki czemu nie da się ich dopasować do konkretnego użytkownika.
                                </p>
                            </div>

                            <button className="after-register-btn" id="4" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                DO DZIEŁA!
                            </button>

                            <span className="after-register-span">Skonfiguruj później</span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr5">
                            <div className="changing-content">

                                <div className="after-register-block-second-inner shorter" >
                                    <h1>Odpowiedz na kilka pytań aby skonfigurować Swoje konto.</h1>

                                    <div className="after-register-line"></div>

                                    <p>
                                        Odpowiedzi na pytania nie są bezpośrednio powiązane z tobą
                                        dzięki czemu nie da się ich dopasować do konkretnego użytkownika.
                                    </p>
                                </div>

                                <button className="after-register-btn" id="5" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                    DO DZIEŁA!
                                </button>

                                <span className="after-register-span">Skonfiguruj później</span>

                            </div>
                        </div>

                    </section>

                    
                </div>
            </main>
        )
        
    }
   
}

export default AfterRegister