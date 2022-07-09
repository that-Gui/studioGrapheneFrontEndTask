//section for util imports
import React from "react"
import './Sidenav.css'

//section for component imports


//section for props interface
interface ppn{
    pagenumber: string
}

//section for functional component
const Sidenav: React.FC<ppn> = (props) => {


    if(props.pagenumber === '1'){
        return(
        <div className="sidenav">
    
               <ul>
                <li className="strike">09</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
               </ul>
       
            </div>
    )}
    else if(props.pagenumber === '2'){
        return(
        <div className="sidenav">
    
               <ul>
                <li>----</li>
                <li className="strike">02</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>

               </ul>
       
            </div>
    )}
    else if(props.pagenumber === '3'){
        return(

            <div className="sidenav">
    
               <ul>
                <li>----</li>
                <li>----</li>
                <li className="strike">03</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
               </ul>
       
            </div>
    )}  
    else if(props.pagenumber === '4'){
        return(

            <div className="sidenav">
    
               <ul>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li className="strike">04</li>
                <li>----</li>
                <li>----</li>
               </ul>
       
            </div>
    )}
    else if(props.pagenumber === '5'){
        return(

            <div className="sidenav">
    
               <ul>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li className="strike">05</li>
                <li>----</li>
               </ul>
       
            </div>
        )  
    }
    else if(props.pagenumber === '6'){
        return(

            <div className="sidenav">
    
               <ul>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li className="strike">06</li>
               </ul>
       
            </div>
        )  
    }
    else  return (
        <div className="sidenav">
    
               <ul>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
                <li>----</li>
               </ul>
       
            </div>
    )
}

export default Sidenav