import React from 'react'

const Offer = (props) => {
    console.log(props)
    return (
        <div className="offer" key={props.id}
    onClick = {()=>{props.changeActualOffer(props.id); props.toggleOfferDetails(true)}}>
            {props.offer}
        </div>
    )
}

export default Offer
