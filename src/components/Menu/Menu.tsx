//section for util imports
import React from "react"
import './Menu.css'
import axios from 'axios';
import { useInView } from 'react-intersection-observer'


//section for component imports
import { IChangable } from '../../Types/Types'

//section for response interface
interface resobj {
    title: string,
    description: string,
    price: string,
    type: string,
    id: string
  }



//section for functional component
const Menu: React.FC<IChangable> = (props) => {

    const { ref, inView } = useInView();

    if(inView){props.change('4')};
    
    const [food, setFood] = React.useState([]);
    
    React.useEffect(() => {
        
        axios.get(`https://studiographene-exercise-api.herokuapp.com/foods`).then((response) =>{
            setFood(response.data)})
            .catch((err) => console.log(err));
        }, []);
        
        return(
            
            <div className="menu" ref={ref}>

            <div className="menutitle">
                <h3 id='menutt'>OUR MENU</h3>
                <div className="menuline"></div>
                <p>KNOW MORE</p>
            </div>
            
            <div className='starters'>

                <div className={inView ? 'slidedup3' : 'slidedown2'}>
                    <h3>STARTERS</h3>
                    {food.filter( (ele: resobj) => ele.type == 'starters').map( (filteredFoods: resobj) => 
                        <div className="starterm" key={filteredFoods.id}>
                            <h5>{filteredFoods.title}</h5>
                            <p>{filteredFoods.description}</p>
                            <p><span>{`£`}{filteredFoods.price}</span></p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mains">
                <div className={inView ? 'slidedown2' : 'slidedup3'}>
                    <h3>MAIN<br/>COURSES</h3>
                    {food.filter( (ele: resobj) => ele.type == 'main_courses').map( (filteredFoods: resobj) => 
                    <div className="starterm" key={filteredFoods.id}>
                        <h5>{filteredFoods.title}</h5>
                        <p>{filteredFoods.description}</p>
                        <p><span>{`£`}{filteredFoods.price}</span></p>
                    </div>
                    )}
                </div>
            </div>

            <div className="side">
                <div className={inView ? 'slidedup3' : 'slidedown2'}>
                    <h3>SIDES</h3>
                    {food.filter( (ele: resobj) => ele.type == 'sides').map( (filteredFoods: resobj) => 
                        <div className="starterm" key={filteredFoods.id}>
                            <h5>{filteredFoods.title}</h5>
                            <p>{filteredFoods.description}</p>
                            <p><span>{`£`}{filteredFoods.price}</span></p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="desserts">
                <div className={inView ? 'slidedown2' : 'slidedup3'}>
                <h3>DESSERTS</h3>
                {food.filter( (ele: resobj) => ele.type == 'desserts').map( (filteredFoods: resobj) => 
                    <div className="starterm" key={filteredFoods.id}>
                        <h5>{filteredFoods.title}</h5>
                        <p>{filteredFoods.description}</p>
                        <p><span>{`£`}{filteredFoods.price}</span></p>
                    </div>
                )}
                </div>
            </div>

        </div>
    )
}

export default Menu