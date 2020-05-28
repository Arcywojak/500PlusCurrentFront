import React from 'react'
import {Link} from 'react-router-dom'
import fav from '../../images/fav.png'
import share from '../../images/share.png'
import not_hot from '../../images/not-hot.png'
import './offers.css'


const OfferCard = ({item}) =>{
    return(
        <div class="outside-item" key={item._id}>
            <div class="single-item" >
                <div className="item-image-area">
                    <div className="item-flying-images">
                        <div className="item-flying-image-child">
                            <img src={fav} alt="fav"/>
                        </div>
                        <div className="item-flying-image-child">
                            <img src={share} alt="share"/>
                        </div>
                        <div className="item-flying-image-child">
                            <img src={not_hot} alt="hot"/>
                        </div>
                    </div>
                    <div className="item-main-image">
                         <img src={item.image} alt="zdjęcie"/>
                    </div>        
                </div>
                

                <h2>{item.description}</h2>
                <div class="normal-text blue-text"> {item.price}</div>

                        <Link to={"/oferty/"+item._id}>
                            <button class="btn">Przejdź do oferty</button>
                        </Link>
            </div>
        </div>
    )
}

export default OfferCard