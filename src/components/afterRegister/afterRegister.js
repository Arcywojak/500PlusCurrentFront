import React, {Component} from 'react'
import './afterRegister.css'
import a from '../../images/a.png'
import logo from '../../images/logo.svg'
import rocket from '../../images/rocket.png'
import blocks from '../../images/blocks.svg';
import rack from '../../images/rack.svg';
import list from '../../images/list.svg';

import pants from '../../images/pants.svg';
import pantsWhite from '../../images/pantsWhite.svg';
import tShirt from '../../images/tShirt.svg';
import tShirtWhite from '../../images/tShirtWhite.svg';
import cap from '../../images/cap.svg';
import capWhite from '../../images/capWhite.svg';
import shoes from '../../images/shoes.svg';
import shoesWhite from '../../images/shoesWhite.svg';
import {Redirect, Link} from 'react-router-dom'

class AfterRegister extends Component {

    state = {
        imagesOfCards: [
            {
                "active": tShirtWhite,
                "disabled": tShirt
            },
            {
                "active": pantsWhite,
                "disabled": pants
            },
            {
                "active": shoesWhite,
                "disabled": shoes
            },
            {
                "active": capWhite,
                "disabled": cap
            }
        ],
        redirect : null,
        idBlock : 0   /* potrzebne do cofania kart */
    }


    componentDidMount(){
        if(sessionStorage.user_name == undefined || sessionStorage.user_name == null){   
           this.setState({redirect : true})
        }
        else{   
            this.setState({redirect : false})
        }
    }
    goToNextBlock = (idBlock, idImg=null) => {

        console.log(idBlock)
        const currentBlock = document.querySelector(`.changing-content#nr${idBlock}`)
        this.setState({
            idBlock : parseInt(idBlock)
        })
        
        const nextBlock = document.querySelector(`.changing-content#nr${Number(idBlock)+1}`)

        currentBlock.classList.add("invisible");
        nextBlock.classList.remove("invisible")

        if(idImg !== null){
            const currentImage = document.querySelector(`.changing-main-img#nr${idImg}`)
        
            const nextImage = document.querySelector(`.changing-main-img#nr${Number(idImg)+1}`)

            currentImage.classList.add("invisible");
            nextImage.classList.remove("invisible")
        }
    }

    goToPrevBlock = () =>{

        /* jeżeli jest równe 0 to oznacza, że użytkownik jest na samym początku i chce wyjść z tej strony */
        if(this.state.idBlock != 0){

            let {idBlock} = this.state 
            const currentBlock = document.getElementsByClassName(`changing-content`)[idBlock]
            const prevBlock = document.getElementsByClassName(`changing-content`)[idBlock-1]

            currentBlock.classList.add("invisible");
            prevBlock.classList.remove("invisible")

            this.setState({
                idBlock : idBlock-1
            })
        }
        else{
            this.setState({
                redirect: true
            })
        }
    }

    changeInput = (id) => {

        console.log(this.state.imagesOfCards, id)

        const previousInput = document.querySelector(".changing-input.active");
        const currentInput = document.querySelector(`.changing-input#nr${id}`);

        if(previousInput === currentInput){
            return;
        }

        const previousCard = document.querySelector(`.after-register-card.active`);
        const currentCard = document.querySelector(`.after-register-card#nr${id}`);

        if(previousInput){
            previousInput.classList.add("invisible");
            previousInput.classList.remove("active");

            previousCard.classList.remove("active");
            console.log(previousCard.id.charAt(2))
            previousCard.childNodes[0].src = this.state.imagesOfCards[Number(previousCard.id.charAt(2))-1].disabled;
        }

        console.log(currentCard, currentCard.id)

        currentCard.classList.add("active");

        console.log(this.state.imagesOfCards[id-1])
        currentCard.childNodes[0].src = this.state.imagesOfCards[id-1].active;// iD

        currentInput.classList.remove("invisible");
        currentInput.classList.add("active");
    }

    render(){
        
        return(
        
            <main>

                {/* ta strona powinna być widoczna tylko dla świeżo zarejestrowanych użytkowników */}
                {(this.state.redirect) ? <Redirect to="/"/> : null}


                <div className="after-register-block">
                    <section className="after-register-block-first">

                        <div className="after-register-fixed-logo">
                            <img src={logo} alt="logo" />
                        </div>
                            
                        <div className="after-register-block-first-inner">

                    
                            <h1>Zaczynamy!</h1>

                            <div className="after-register-block-first-inner-img">

                                <img src={rocket} alt="rakieta" class="changing-main-img" id="nr1"/>
                                <img src={blocks} alt="klocki"  class="changing-main-img invisible" id="nr2"/>
                                <img src={rack} alt="wieszak" class="changing-main-img invisible" id="nr3"/>
                                <img src={list} alt="lista" class="changing-main-img invisible" id="nr4"/>


                            </div>

                            <p>
                                Dzięki skonfigurowaniu konta nasz algorytm będzie mógł 
                                lepiej dopasować się w Twoje gusta i jeszcze bardziej 
                                uprzyjemnić Ci zakupy.
                            </p>
                        </div>
                    </section>
                    <section className="after-register-block-second">
                        <button className="back-btn" onClick={this.goToPrevBlock}>
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
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                DO DZIEŁA!
                            </button>

                            <Link to='/'>
                                <span className="after-register-span">Skonfiguruj później</span>
                            </Link>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr2">

                            <div className="after-register-block-second-inner longer" >
                                <h1>Podaj wymiary</h1>

                                <div className="after-register-line"></div>

                                <p>
                                Wymiary użytkownika są niezbędne dla poprawnego 
                                dobrania produktów takich jak ubrania.
                                </p>

                                <div className="after-register-inputs">
                                    <div className="after-register-input-wrapper">
                                        <label htmlFor="1">Wzrost:</label>
                                        <input 
                                            id="1"
                                            type="text"
                                            className="after-register-input"
                                            placeholder="170 CM"/>
                                    </div>

                                    <div className="after-register-input-wrapper">
                                        <label htmlFor="2">Obwód bioder:</label>
                                        <input 
                                            id="2" 
                                            type="text" 
                                            className="after-register-input" 
                                            placeholder="170 CM"/>
                                    </div>

                                    <div className="after-register-input-wrapper">
                                        <label htmlFor="3">Obwód talii:</label>
                                        <input 
                                            id="3" 
                                            type="text" 
                                            className="after-register-input" 
                                            placeholder="170 CM"/>
                                    </div>
                                </div>
                            </div>

                            <button className="after-register-btn" id="2" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                DALEJ
                            </button>

                            <span 
                            className="after-register-span" 
                            id="2" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                            Pomiń
                            </span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr3">

                            <div className="after-register-block-second-inner longer" >
                                <h1>Podaj swoje rozmiary</h1>

                                <div className="after-register-line"></div>

                                <p>
                                Rozmiary użytkownika są niezbędne dla poprawnego dobrania 
                                produktów takich jak ubrania.
                                </p>

                                <div className="after-register-card-wrapper">
                                    <div className="after-register-card" id="nr1" 
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={tShirt} alt="góra" id="nr1" />
                                        <span id="nr1">Góra</span>
                                    </div>
                                    <div className="after-register-card" id="nr2"
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={pants} alt="góra" id="nr2" />
                                        <span id="nr2" >Spodnie</span>
                                    </div>
                                    <div className="after-register-card" id="nr3"
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={shoes} alt="góra" id="nr3" />
                                        <span id="nr3" >Buty</span>   
                                    </div>
                                    <div className="after-register-card" id="nr4"
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={cap} alt="góra" id="nr4" />
                                        <span id="nr4" >Głowa</span>
                                    </div>
                                </div>

                                <div className="after-register-inputs third-section">
                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr1">
                                            <label htmlFor="g">Rozmiar góry:</label>
                                            <input 
                                                id="g" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="S/M/L/XL"/>
                                    </div>

                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr2">
                                            <label htmlFor="s">Rozmiar spodni:</label>
                                            <input 
                                                id="s" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="40"/>
                                    </div>

                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr3">
                                            <label htmlFor="3">Rozmiar buta:</label>
                                            <input 
                                                id="3" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="42"/>
                                    </div>

                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr4">
                                            <label htmlFor="3">Rozmiar kapelusza/czapki:</label>
                                            <input 
                                                id="3" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="42"/>
                                    </div>
                                </div>

                            </div>

                            <button className="after-register-btn" id="3" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                Dalej
                            </button>

                            <span 
                                className="after-register-span" 
                                id="3" 
                                onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                Pomiń
                            </span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr4">

                            <div className="after-register-block-second-inner longer" >
                                <h1>Interesujące Cię tematy</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Dzięki nim będziemy w stanie dobrać produkty 
                                    najbardziej pasujące do ciebie i twojej rodziny.
                                </p>

                                <div className="after-register-tag-wrapper">
                                    <h3>Po prostu zaznacz interesujące tagi.</h3>

                                    <div className="after-register-tag-wrapper-inner">
                                        <div className="inner-scroll">
                                        
                                            <input id="sport1" type="checkbox" />
                                            <label htmlFor="sport1">Sport</label>

                                            <input id="sport2" type="checkbox" />
                                            <label htmlFor="sport2">Sport</label>

                                            <input id="sport3" type="checkbox" />
                                            <label htmlFor="sport3">Sport</label>

                                            <input id="sport4" type="checkbox" />
                                            <label htmlFor="sport4">Sport</label>

                                            <input id="sport5" type="checkbox" />
                                            <label htmlFor="sport5">Sport</label>

                                            <input id="sport6" type="checkbox" />
                                            <label htmlFor="sport6">Sport</label>

                                            <input id="sport7" type="checkbox" />
                                            <label htmlFor="sport7">Sport</label>

                                            <input id="sport8" type="checkbox" />
                                            <label htmlFor="sport8">Sport</label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            

                            <button className="after-register-btn" id="4" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                DALEJ
                            </button>

                            <span className="after-register-span">Pomiń</span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr5">
                            <div className="changing-content">

                                <div className="after-register-block-second-inner shorter" >
                                    <h1>Gotowe</h1>

                                    <div className="after-register-line"></div>

                                    <p>
                                    Teraz możesz w pełni korzystać z możliwości serwisu CoZa500Plus.pl!
                                    </p>
                                </div>

                                <button className="after-register-btn" id="5">
                                    Ok
                                </button>

                            </div>
                        </div>

                    </section>

                    
                </div>
            </main>
        )
        
    }
   
}

export default AfterRegister