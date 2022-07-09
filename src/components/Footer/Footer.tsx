//section for util imports
import React from "react"
import './Footer.css'
import { useInView } from 'react-intersection-observer'

//section for component imports
import li from '../../images/Linkedin-icon.svg'
import tw from '../../images/twitter-icon.svg'
import ig from '../../images/instagram-icon.svg'
import { IChangable } from '../../Types/Types'


//section for interface


//section for functional component
const Footer: React.FC<IChangable> = (props) => {
    
    const { ref, inView } = useInView();

    if(inView){props.change('6')};
    
    return(
        
        <div className="footer" ref={ref}>
            

            <div className="footerfive">
                <div>
                    <h5>SECTION</h5>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                </div>
                <div>
                    <h5>SECTION</h5>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                </div><div>
                    <h5>SECTION</h5>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                </div><div>
                    <h5>SECTION</h5>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                </div>
                <div>
                    <h5>SECTION</h5>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                    <p>subSection</p>
                </div>
            </div>
            <div className="footerlogo">
                <h2>THIS IS THE<br/><span>LOGO</span></h2>
            </div>
            <div className="footercopy">
            <p>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>  
            </div>
            <div className="footersocial">
                <img src={ig} alt="" />
                <img src={tw} alt="" />
                <img src={li} alt="" />
            </div>
            

        </div>
    )
}

export default Footer