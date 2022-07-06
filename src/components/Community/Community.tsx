//section for util imports
import React from "react"
import './Community.css'

//section for component imports
import taco from '../../images/taco.jpg'
import waffle from '../../images/waffle.jpg'
import squid from '../../images/squid.jpg'
import coralinsta from '../../images/instagram-btn.svg';
import dets1 from '../../images/detail01.png'
import dets2 from '../../images/detail02.png'
import dets3 from '../../images/detail03.png'



//section for functional component
const Community: React.FC = () => {

    return(
        <div className="community">

        <div className="topcom">

            <div className="comtitle">
                <h2>MEET OUR<br/>COMMUNITY</h2>
                <p>KNOW MORE</p>
                <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
            </div>

            <div className="instacard taco">
                <h5>@buzzfeedfood</h5>
                <p>It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto 
                <br/>
                <span>69</span><span>14.7k</span>
                </p>
                <img src={dets1} alt="" />
                <div className="cardpic">
                    <img src={taco} alt="" />
                    <img src={coralinsta} alt="" />
                </div>
                <img src={dets2} alt="" />
            </div>

        </div>
        <div className="midcom">
        
            <div className="instacard waffle">
                <h5>@love_food</h5>
                <p>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood
                <br/>
                <span>789</span><span>99.7k</span>
                </p>
                <img src={dets3} alt="" />
                <div className="cardpic">
                    <img src={waffle} alt="" />
                    <img src={coralinsta} alt="" />
                </div>
            </div>
        
        </div>

        <div className="botcom">

            <div className="comp">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
            </div>

            <div className="instacard squid">
                <h5>@buzzfeedfood</h5>
                <p>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)
                <br/>
                <span>152</span><span>18.2k</span>
                </p>
                <div className="cardpic">
                    <img src={squid} alt="" />
                    <img src={coralinsta} alt="" />
                </div>
            </div>
        
        </div>

        </div>
    )
}

export default Community