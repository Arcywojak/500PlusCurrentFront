import React from 'react'
import './forMedia.min.css'
import media from '../../images/media.svg'
import social from '../../images/social.svg'

const ForMedia = () => {
    return (
        <main>
            <div class="texts-media">
                <div class="tekst1">
                    <h1>Dla Mediów</h1>
                </div>
                <div class="tekst2">
                    <h3>
                        Prowadzisz bloga, stronę lub jesteś dziennikarzem? Skorzystaj z
                        naszych grafik promocyjnych wysokiej jakości.
                    </h3>
                </div>
            </div>
            <div class="logo2144">
                <img src={media} alt="Screen"/>
            </div>
            <a download href="dla-mediow.zip">
                <h1 class="with-icon text1 download">
                    <i class="fas fa-file-archive icon"></i>
                    Pobierz paczkę zip z materiałami
                </h1>
            </a>

            <section class="stay-in-touch">
                <div class="logo2143">
                    <img src={social} alt="Screen"/>
                </div>
                <div class="stay-in-touch inner">
                    <h1>Pozostańmy w kontakcie!</h1>
                    <h3>Aby być zawsze na bieząco z serwisem<br/>Śledź nas na Social Media.</h3>
                    <h1>
                        <a href="https://www.facebook.com/Co-Za-500-Plus-111069843646022/">
                            <i class="fab fa-facebook icon"></i>Facebook.com/coza500plus</a></h1>
                    <h1>
                        <a href="https://www.instagram.com/coza500plus/?hl=pl">
                            <i class="fab fa-instagram icon"></i>
                            Instagram.com/coza500plus
                        </a>
                    </h1>
                </div>
            </section>

        </main>
    )
}

export default ForMedia
