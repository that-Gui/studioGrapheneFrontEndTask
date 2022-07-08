//section for util imports
import React from 'react'
import './Homepage.css'


//import section for components
import Sidenav from '../Sidenav/Sidenav'
import Hero from '../Hero/Hero'
import Community from '../Community/Community'
import Location from '../Location/Location'
import Location2 from '../Location/Location2'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

//section for interfaces



// section for functional component
const Homepage: React.FC = () => {

    const [page, setPage] = React.useState('1');

    const changepage = (number: string) => {
      setPage(number);
    };
    

  return (
    <div className="container">

      
        <Sidenav pagenumber={page} />
    
        <Hero /* change={changepage} *//>
     
        <Community />
          
        <Location/>

        <Location2/>
        
        <Menu/>
 
        <div>
            Recipes
        </div>
        <div>
            contactUs
        </div>
        
        <Footer/>
        

    </div>
  )
}

export default Homepage