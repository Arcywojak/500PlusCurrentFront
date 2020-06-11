import React from 'react'

const Interest = (props) => {
    console.log(props)
    return (
        <div className="offer" key={props.id}>
            {props.offer}
        </div>
    )
}

export default Interest