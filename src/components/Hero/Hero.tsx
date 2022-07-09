//section for util imports
import React from "react"
import './Hero.css'
import { useInView } from 'react-intersection-observer'


//section for component imports
import Coco from '../../images/heroCoco.png'
import stamp from '../../images/stamp.png'
import { IChangable } from '../../Types/Types'


//section for interface


//section for functional component
const Hero: React.FC<IChangable> = (props) => {

    const { ref, inView } = useInView();

    if(inView){props.change('1')};
    
    return(
        
        <div className="hero" ref={ref}>
            <div className="heroimgs">
                <img  className="logoimg" src={stamp} alt="foodie logo"/>
                <img className="heroimg" src={Coco} alt="image of an coconut cocktail" />
            </div>
            <div className="herotext">
                <h1>THE BEST FOODIE<br/><span> EXPERIENCE</span></h1>
                <h4>NOW IN LONDON</h4>
            </div>
            <div className="sidebtn">
                <p>REQUEST INFO</p>
            </div>
        </div>
    )
}

export default Hero