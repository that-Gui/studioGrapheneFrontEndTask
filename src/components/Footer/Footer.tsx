//section for util imports
import React from "react"
import './Footer.css'

//section for component imports
import li from '../../images/Linkedin-icon.svg'
import tw from '../../images/twitter-icon.svg'
import ig from '../../images/instagram-icon.svg'


//section for functional component
const Footer: React.FC = () => {
    
    return(

        <div className="footer">

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
                <h2>THIS IS THE<br/>LOGO</h2>
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