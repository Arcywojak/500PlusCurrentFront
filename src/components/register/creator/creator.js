import React from 'react'
import './creator.css'

const Creator = (props) =>{

    return(
        <div id="creator-main-holder">

            <div id="creator-left-holder"></div>
            <div id="help-overlay-logo">
                <a class="logoProper" href="/"><img class="otherProper" src={require('../../../images/logo.png')} /></a>
            </div>

            <div id="creator-right-holder">

                <div id="arrow-exit-holder">     
                    <span>&lt;</span>
                    <p>Powrót</p>
                </div>

            </div>
            
            
        </div>
        
    )
    
}

export default Creator