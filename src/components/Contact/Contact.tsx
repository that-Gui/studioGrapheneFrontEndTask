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
                <h3 id='contwith'>WITH US</h3>
                <div className="txtp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
            </div>
           
            <div className="contactform">
                
                <img src={dets2} id='dts2' alt="" />
                
                <form>
           
                <label>NAME<br/><input type="text" name="name" placeholder='Name' /></label>
               
             
                <label>SURNAME<br/><input type="text" name="surname" placeholder='Surname' /></label>
               
             
                <label>PHONE<br/><input type="number" name="phone" placeholder='Phone'/></label>
               
         

                <label>EMAIL ADDRESS<br/><input type="email" name="email" placeholder='Email'/></label>

                <label>EXPERIENCE<br/>
                <select>
                    <option>Select</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>

                
                <label> WHERE DID YOU HEAR ABOUT US?<br/>
                <select>
                    <option>Select</option>
                    <option value="mango">Mango</option>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                </select>
                </label>


                <input type="submit" value="SEND" className='formbtn'/>

                </form>

            </div>
        
        </div>
  )
}

export default Contact