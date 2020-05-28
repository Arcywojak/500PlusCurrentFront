import React from 'react'
import './about.min.css'
import screen2 from '../../images/screen2.svg'
import school from '../../images/school.svg'
import image from '../../images/image.svg'
import image1 from '../../images/image1.svg'
import done from '../../images/done.svg'
import image2 from '../../images/image2.svg'
import baby from '../../images/baby.svg'
const About = () => {
    return (

        
        <div>
            <div class="text1-2">
                <div class="tekst1">
                        <h1>Czym jest CoZa500Plus.pl?</h1>
                </div>
                <div class="tekst2">
                    <h3>Naszym zadaniem jest zapewnienie Tobie, przeciętnemu konsumentowi wygodnego i szybkiego narzędzia dającego dostęp do ofert spersonalizowanych specjalnie dla ciebie.</h3>
                </div>
            </div>
            <div class="logo2137">
                <img src={screen2} alt="Screen"/>
            </div>

            <section class="grid purples why-start">
                <div class="inner">
                    <div class="circle">
                    <img src={school} alt="Screen"/>
                    </div>
                    <div>
                        <h1>Dlaczego warto zacząć?</h1>
                        <h3>
                            Naszym priorytetem jest, było i będzie zapewnienie uzytkownikowi jak
                            największego komfortu podczas korzystania z naszego serwisu.
                        </h3>
                    </div>
                </div>
            </section>

            <div class="tekst3-about">
                <h1>Pozwalamy zadbać o finanse i rozsądnie wydawać pieniądze.</h1>
                <h3>
                    Dzięki CoZa500Plus zyskujesz spokój, oszczędność i czas,<br/>
                    decyduj o maksymalnych cenach.
                </h3>
            </div>
            <div class="logo2138">
                <img src={image} alt="Screen"/>
            </div>

                <div class="tekst4-about">
                    <h1>
                        Oferty szyte na miare.
                    </h1>
                    <h3>
                        Wystarczą podstawowe dane takie jak wiek, wzrost czy ulubiony kolor,<br/>
                        aby nasze algorytmy stanęły na wysokości zadania.
                    </h3>
                    <div class="logo2139">
                        <img src={image1} alt="Screen"/>
                    </div>

                    <div class="tekst4-about">
                        <h1>
                            Z nami zapewnisz sobie i swojej rodzinie<br/>
                            To co najlepsze.
                        </h1>
                        <h3>
                            Zabawki, ubrania czy inne produkty dobierane są według twoich preferencji<br/>
                            Dzięki temu mozesz kupować bez ryzyka ze produkt nie zgadza sie z twoim gustem.
                        </h3>
                        <div class="logo2140">
                            <img src={baby} alt="Screen"/>
                        </div>        
                    </div>

                <div class="tekst4-about">
                    <h1>
                        Bezpieczne, szybkie i przyjemne zakupy dla całej twojej rodziny. <br/>
                        Po prostu... 
                    </h1>
                    <h3>
                        Dzięki CoZa500Plus zyskujesz spokój, oszczędność i czas,<br/>
                        decyduj o maksymalnych cenach
                    </h3>
                    <div class="logo2141">
                        <img src={done} alt="Screen"/>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default About
