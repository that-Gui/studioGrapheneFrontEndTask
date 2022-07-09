//section for util imports
import React from 'react'
import './Contact.css'
import { useInView } from 'react-intersection-observer'

//section for component imports
import dets2 from '../../images/detail02.png'


//section for interfaces
import { IChangable } from '../../Types/Types'


//section for functional component
const Contact: React.FC<IChangable> = (props) => {

    const { ref, inView } = useInView();
    
    if(inView){props.change('5')};

  
    return (
  
        <div className='contact' ref={ref}>
            
            <div className="contacttxt">
                <div className="ctline"></div>
                <h3>COLLABORATE</h3>
                <h3>WITH US</h3>
                <div className="txtp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
            </div>
           
            <div className="contactform">
                
                <img src={dets2} id='dts2' alt="" />
                
                <form>
                <label> NAME: <input type="text" name="name" /></label>

                <label> SURNAME: <input type="text" name="surname" /></label>

                <label> PHONE: <input type="number" name="phone" /></label>

                <label> EMAIL ADDRESS: <input type="email" name="email" /></label>

                <label> EXPERIENCE:
                <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>

                
                <label> WHERE DID YOU HEAR ABOUT US?: 
                <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>

                <label> after 2nd drop down: <input type="text" name="name" /></label>

                <input type="submit" value="SEND" />

                </form>

            </div>
        
        </div>
  )
}

export default Contact