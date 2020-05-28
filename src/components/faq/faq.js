import React from 'react';
import './faq.css'
import Faq from '../../images/faq.svg';
import PlusFaq from '../../images/PlusFaq.svg';


const toggleHiddenContent = (e) => {

    let hiddenBlock = e.target.parentNode.parentNode.nextElementSibling

    hiddenBlock.classList.toggle('shown');

    e.target.parentNode.classList.toggle('rotate-img');
}

const faq = () => {
    return (
        <main className="faq-container">
            <h1 className="faq-h1">
                Często zadawane pytania
            </h1>
            <p className="faq-paragraph">
                Masz jakieś pytanie? Prosimy sprawdzić zbiór często zadawanych pytań który znajduje się poniżej.
            </p>

            <img className="faq-image" src={Faq} alt="najczęściej-zadawane-pytania"/>

            <p className="faq-paragraph">
                Po prostu kliknij na interesujące cię pytanie aby przeczytać odpowiedź.
            </p>
            <h1 className="faq-h1">
            <i class="far fa-file-alt icon"></i>&nbsp;  Ogólne informacje
            </h1>
            
            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            Czym jest CoZa500Plus.pl?
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        CoZa500Plus.pl to nowoczesna platforma e-commerce mająca
                        za cel ułatwienie i jeszcze większe spersonalizowanie zakupów.
                    </p>         
                </div>
            </div>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            Czy CoZa500Plus.pl jest powiązane z rządem/partiami politycznymi?
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                    Platforma CoZa500Plus.pl nie jest w żaden sposób
                     powiązana z jakąkolwiek partią polityczną ani 
                     ruchem społecznym.<br/> 
                     Nazwa serwisu jest zbieżna z programem "Rodzina 500+".
                    </p>         
                </div>
            </div>
            
            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            Skąd brane są oferty?
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        Oferty zbierane są z wielu sklepów internetowych
                        za pomocą naszego algorytmu. <br/> Ich personalizacja
                         odbywa się z pomocą sortowania kategorii na podstawie tagów.
                    </p>         
                </div>
            </div>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            Dla kogo jest CoZa500Plus.pl?
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed erat lorem, maximus am, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus ac c sapien id, blandit posuere 
                        odio. Suspendisse faucibus in leo ut viverra.
                    </p>         
                </div>
            </div>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed erat lorem, maximus ac sapien id, blandit posuere 
                            odio. Suspendisse faucibus in leo ut viverra.
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed erat lorem, maximus am, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus ac c sapien id, blandit posuere 
                        odio. Suspendisse faucibus in leo ut viverra.
                    </p>         
                </div>
            </div>

            <h1 className="faq-h1">
                <i class="fas fa-shopping-cart icon"></i>&nbsp;Pytania odnośnie zakupów
            </h1>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed erat lorem, maximus ac sapien id, blandit posuere 
                            odio. Suspendisse faucibus in leo ut viverra.
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed erat lorem, maximus am, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus ac c sapien id, blandit posuere 
                        odio. Suspendisse faucibus in leo ut viverra.
                    </p>         
                </div>
            </div>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed erat lorem, maximus ac sapien id, blandit posuere 
                            odio. Suspendisse faucibus in leo ut viverra.
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed erat lorem, maximus am, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus ac c sapien id, blandit posuere 
                        odio. Suspendisse faucibus in leo ut viverra.
                    </p>         
                </div>
            </div>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed erat lorem, maximus ac sapien id, blandit posuere 
                            odio. Suspendisse faucibus in leo ut viverra.
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed erat lorem, maximus am, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus ac c sapien id, blandit posuere 
                        odio. Suspendisse faucibus in leo ut viverra.
                    </p>         
                </div>
            </div>

            <div className="unfolding-content-block">
                <div className="unfolding-content-block-main">
                    <div className="unfolding-content-block-main-image">
                        <img src={PlusFaq} alt="plus" onClick={(e)=>{toggleHiddenContent(e)}}/>
                    </div>
                    <div className="unfolding-content-block-main-text">
                        <h3>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed erat lorem, maximus ac sapien id, blandit posuere 
                            odio. Suspendisse faucibus in leo ut viverra.
                        </h3>  
                    </div>
                </div>
                <div className="unfolding-content-block-content">
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed erat lorem, maximus am, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus acm, maximus ac c sapien id, blandit posuere 
                        odio. Suspendisse faucibus in leo ut viverra.
                    </p>         
                </div>
            </div>

        </main>
    )
}

export default faq
