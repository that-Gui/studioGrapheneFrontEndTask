//section for util imports
import React from "react"
import './Community.css'
import { useInView } from 'react-intersection-observer'


//section for component imports
import taco from '../../images/taco.jpg'
import waffle from '../../images/waffle.jpg'
import squid from '../../images/squid.jpg'
import coralinsta from '../../images/instagram-btn.svg';
import dets1 from '../../images/detail01.png'
import dets2 from '../../images/detail02.png'
import dets3 from '../../images/detail03.png'
import heart from '../../images/heartsvg.svg'
import chat from '../../images/chatsvg.svg'
import { IChangable } from '../../Types/Types'


//section for interface


//section for functional component
const Community: React.FC<IChangable> = (props) => {

    const { ref, inView } = useInView();

    if(inView){
        props.change('2')
       
    };
    
    return(
        <div className="community" ref={ref}>

        <div className="topcom">

            <div className='comtitle'>

                
                <h3>MEET OUR<br/>COMMUNITY</h3>
                <div className="comline"></div>
                <p className="combtn">KNOW MORE</p>
                <p id="topp">LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
            
            </div>

            <div className={inView ? 'taco anime2' : 'taco'}>

                <div className="cardpic">
                    <img src={taco} id='cdpi' alt="" />
                    <img src={coralinsta} id='coin1' alt="" />
                </div>

                <img src={dets2} id='dets2' alt="" />
                
                <div className="cardtxt">
                    <h5>@buzzfeedfood</h5>
                    <p>It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto</p>

                    <div className="likes">
                        <img src={chat} alt="" />
                        <span>69</span>
                        <img src={heart} alt="" />
                        <span>14.7k</span>
                    </div>
                    
                </div>

                <img src={dets1} id='dets1' alt="" />
            
            </div>

        </div>

        <div className='midcom'>
        
            <div className={inView ? 'waffle anime3': 'waffle'}>

            <div className="cardtxt2">
                <h5>@love_food</h5>
                <p>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood</p>
                <div className="likes">
                    <img src={chat} alt="" />
                    <span>789</span>
                    <img src={heart} alt="" />
                    <span>99.7k</span>
                </div>    
            </div>

                <img src={dets3} id="dets3" alt="" />
                
                <div className="cardpic2">
                    <img src={waffle} id="cdpi2" alt="" />
                    <img src={coralinsta} id='coin2' alt="" />
                </div>
                
            </div>
        
        </div>

        <div className="botcom">

            <div className="botcomp">
            <div className="comp">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
            </div>
            </div>

            <div className={inView ? 'anime4 squid':'squid'}>

                <div className="cardtxt2">
                    <h5>@buzzfeedfood</h5>
                    <p>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
                    <div className="likes">
                        <img src={chat} alt="" />
                        <span>152</span>
                        <img src={heart} alt="" />
                        <span>18.2k</span>
                    </div>
                </div>

                <div className="cardpic2">
                    <img src={squid} id="cdpi3" alt="" />
                    <img src={coralinsta} id='coin3'  alt="" />
                </div>

            </div>
        
        </div>

        </div>
    )
}

export default Community