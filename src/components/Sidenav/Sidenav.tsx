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
    
console.log('props', props);

if (props.pagenumber === '1'){
return(
    
        <div className="sidenav">

           <ul>
            <li>1</li>
            <li>---</li>
            <li>---</li>
            <li>---</li>
            <li>---</li>
            <li>---</li>
           </ul>
   
        </div>
    )}else if(props.pagenumber === '2'){
        return(

            <div className="sidenav">
    
               <ul>
                <li>---</li>
                <li>2</li>
                <li>---</li>
                <li>---</li>
                <li>---</li>
                <li>---</li>
               </ul>
       
            </div>
        )  
    }else if(props.pagenumber === '3'){
        return(

            <div className="sidenav">
    
               <ul>
                <li>---</li>
                <li>---</li>
                <li>3</li>
                <li>---</li>
                <li>---</li>
                <li>---</li>
               </ul>
       
            </div>
        )  
    }else  return (
        <div className="sidenav">
    
               <ul>
                <li>---</li>
                <li>---</li>
                <li>---</li>
                <li>---</li>
                <li>---</li>
                <li>---</li>
               </ul>
       
            </div>
    )
}

export default Sidenav