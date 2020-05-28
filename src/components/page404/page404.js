import React from 'react'
import './page404.min.css'
import img404 from '../../images/404.svg'

const Page404 = () => {
    return (
        <main className="container-404">
            <div className="title-404">
                <h2>404 - Nie znaleziono takiej strony!</h2>
            </div>
            <div className="h3-404">
                <h3>Sprawdź czy poprawnie wpisałaś/łeś adres URL i spróbuj ponownie lub wróć na stronę główną.</h3>
            </div>
            <div className="img-404">
                <img src={img404} alt="Screen"/>
            </div>
            <div className="h1-404">
                <h1>Ups</h1>
            </div>
        </main>
    )
}

export default Page404
