//section for util imports
import React from "react"
import './Menu.css'
import axios from 'axios';

//section for component imports


//section for functional component
const Menu: React.FC = () => {

    const [food, setFood] = React.useState([]);

    React.useEffect(() => {
    
    axios.get(`https://studiographene-exercise-api.herokuapp.com/foods`).then((response) =>{
      setFood(response.data)}).catch((err) =>
        console.log(err));
    }, []);
    
    return(

        <div className="menu">

            <div className="menutitle">
                <h3>OUR MENU</h3>
                <p>KNOW MORE</p>
            </div>

            <div className="starters">
                <h3>STARTERS</h3>
            </div>

            <div className="mains">
                <h3>MAIN COURSES</h3>
            </div>

            <div className="side">
                <h3>SIDES</h3>
            </div>
            
            <div className="desserts">
                <h3>DESSERTS</h3>
            </div>

        </div>
    )
}

export default Menu