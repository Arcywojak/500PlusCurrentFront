import React from 'react'
import './footer.css'
import fb from '../../images/facebook.svg';
 
function Footer() {
    return (
        <footer>
        <div className="footer-inner-1st">
            <div className="footer-inner-1st-column">
                <h3>Section 1</h3>
                <a href="/">Home</a>
                <a href="/o-nas">O Nas</a>
                <a href="/logowanie">Zaloguj się</a>
                <div className="footer-icons">
                    <img src={fb} alt="fb" />
                    <img src={fb} alt="fb" />
                    <img src={fb} alt="fb" />
                </div>              
            </div>
            <div className="footer-inner-1st-column">
                <h3>O nas</h3>
                <a href="/kontakt"> Kontakt</a>
                <a href="/o-nas" > O Nas</a>
                <a href="#"> Dołącz do Nas</a>
                <a href="#"> Nasza Misja</a>        
            </div>
            <div className="footer-inner-1st-column">
                <h3>Informacje</h3>
                <a href="/regulamin" >Regulamin </a>
                <a href="#"> Polityka Prywatności  </a>
                <a href="/bezpieczenstwo"> Bezpieczeństwo  </a>
                <a href="#">Wytyczne dla społeczności</a>
            </div>
        </div>
 
        <div className="footer-inner-break-line">
 
        </div>
        <div className="footer-inner-2nd">
            <div className="footer-inner-2nd-1st">
                Ⓒ 2020 <a href="/">coza500plus.pl</a>
            </div>
            <div className="footer-inner-2nd-2nd">
                TWOJE Zakupy, po prostu...
            </div>
        </div>
    </footer>
    );
  }
 
  export default Footer;