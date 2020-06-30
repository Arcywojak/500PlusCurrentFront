import React from "react"
import  './offers.css'

const CategoryCard = ({text, picture, getOffers, API_id, onChangeFunc}) =>{

    return( 
        <div className="single-type">
            <input type="radio" id={text} name="type" onChange={()=>{onChangeFunc(text)}}/>
            <label className="single-type-label" id={text} htmlFor={text} onClick={()=>{getOffers(null,API_id)}} >
                <h3>{text}</h3>
                <img  className="categoryImg" src={require(`../../images/categoryIcons/${picture}`)} alt="logo kategorii produktów" id={text+"img"}/>
            </label>
        </div>
    )
}

export default CategoryCard