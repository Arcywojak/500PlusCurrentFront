import React from 'react';
import './contact.min.css';
import a from '../../images/a.png';

const contact = () => {
    return (
        <main>
            <div className="contact-block">
                <div className="contact-block-zero">
                    <h1>KONTAKT</h1>
                    <h2>ZADAJ NAM PYTANIE!</h2>
                </div>
                <div className="contact-block-inner">
                    <form className="contact-block-first">
                        <div className="contact-block-two-short-inputs">
                            <input type="text" className="contact-block-input" name="name" placeholder="Imię"/>
                            <input type="text" className="contact-block-input" name="name" placeholder="Nazwisko"/>
                        </div>
                        <input type="mail" className="contact-block-input" placeholder="E-mail"/>
                        <textarea className="contact-block-textarea" placeholder="Wiadomość"></textarea>

                        <button className="contact-btn"><i class="fas fa-paper-plane icon"></i>Wyślij</button>
                    </form>
                    <div className="contact-block-second">
                        <div className="contact-block-second-child">
                            <div className="contact-block-second-child-img">
                                <img src={a} alt="osoba" />
                            </div>  
                            <div className="contact-block-second-child-text">
                                <i class="fas fa-envelope icon"></i>    osoba1@coza500plus.pl
                            </div>
                        </div>
                        <div className="contact-block-second-child">
                            <div className="contact-block-second-child-img">
                                <img src={a} alt="osoba" />
                            </div>  
                            <div className="contact-block-second-child-text">
                                <i class="fas fa-envelope icon"></i>    osoba2@coza500plus.pl
                            </div>
                        </div>
                        <div className="contact-block-second-child">
                            <div className="contact-block-second-child-img">
                                <img src={a} alt="osoba" />
                            </div>  
                            <div className="contact-block-second-child-text">
                                <i class="fas fa-envelope icon"></i>   osoba3@coza500plus.pl
                            </div>
                        </div>
                        <div className="contact-block-second-child">
                            <div className="contact-block-second-child-img">
                                <img src={a} alt="osoba" />
                            </div>  
                            <div className="contact-block-second-child-text">
                                <i class="fas fa-envelope icon"></i> osoba4@coza500plus.pl
                            </div>
                        </div>
                    </div>  
                </div>
            </div>   
        </main>
    )
}

export default contact
