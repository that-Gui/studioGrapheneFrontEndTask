//section for util imports
import React from "react"
import './Location.css'

//section for component imports
import map from '../../images/fakemap.png'


//section for functional component
const Location: React.FC = () => {

    return(
        <div className="location">

            <div className="locleg">
                <h2>LOCATION</h2>
                <p>12 Upper St. Martin’s Lane<br/> WC2H 9FB, London</p>
            </div>

            <img src={map} alt="fake map screenshot" />
            
        </div>
    )
}

export default Location