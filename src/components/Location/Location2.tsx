//section for util imports
import React from "react"
import './Location.css'
import { useInView } from 'react-intersection-observer'


//section for component imports


//section for interface
interface IChangable { 
    change: (number: string) => void;
  }

//section for functional component
const Location2: React.FC<IChangable> = (props) => {
    
    const { ref, inView } = useInView();

    if(inView){props.change('3')};
    
    return(
        <div className="location" ref={ref}>

        <div className="locleg">
            <h2>LOCATION</h2>
            <p>12 Upper St. Martin’s Lane<br/> WC2H 9FB, London</p>
        </div>

        <div className="ting">
            <iframe src="https://my.atlistmaps.com/map/f1d2ec37-8603-4c82-a002-2afa1fd7ff0a?share=true" allow="geolocation" width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen>
            </iframe>
        </div>

      </div>
    )
}

export default Location2