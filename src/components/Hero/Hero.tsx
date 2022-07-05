//section for util imports
import React from "react"
import './Hero.css'

//section for component imports
import Coco from '../../images/heroCoco.png'
import stamp from '../../images/stamp@2x.png'

//section for functional component
const Hero: React.FC = () => {
    return(
        <div className="hero">
            <div>
            <img src={stamp} alt="" />
            <img className="heroimg" src={Coco} alt="image of an coconut cocktail" />
            </div>
            <h1>THE BEST FOODIE<br/> EXPERIENCE</h1>
            <h3>NOW IN LONDON</h3>

        </div>
    )
}

export default Hero