//section for util imports
import React from "react"
import './Hero.css'

//section for component imports
import Coco from '../../images/heroCoco.png'
import stamp from '../../images/stamp.png'

//section for functional component
const Hero: React.FC = () => {
    
    return(

        <div className="hero">
            
            <img className="heroimg" src={Coco} alt="image of an coconut cocktail" />
            <img src={stamp} alt="foodie logo" />
            <h1>THE BEST FOODIE<br/> EXPERIENCE</h1>
            <h4>NOW IN LONDON</h4>
            <div className="sidebtn">
            <p>REQUEST INFO</p>
            </div>

        </div>
    )
}

export default Hero