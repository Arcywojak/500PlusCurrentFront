import React from 'react'

const Offer = (props) => {
    return (
        <div className="offer" key={props.offer.id}
    onClick = {()=>{props.changeActualOffer(props.offer.id); props.toggleOfferDetails(true)}}>
            {props.offer.name}
        </div>
    )
}

export default Offer
