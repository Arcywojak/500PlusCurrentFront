import React from "react"
import  './offers.css'

const CategoryCard = ({text, picture, getOffers, API_id, onChangeFunc}) =>{

    return( 
        <div class="single-type">
            <input type="radio" id={text} name="type" onChange={()=>{onChangeFunc(text)}}/>
            <label class="single-type-label" id={text} for={text} onClick={()=>{getOffers(null,API_id)}} >
                <h3>{text}</h3>
                <img  class="categoryImg" src={require(`../../images/categoryIcons/${picture}`)} alt="logo kategorii produktów" id={text+"img"}/>
            </label>
        </div>
    )
}

export default CategoryCard