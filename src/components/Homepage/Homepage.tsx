//section for util imports
import React from 'react'
import './Homepage.css'


//import section for components
import Hero from '../Hero/Hero'
import Community from '../Community/Community'
import Location from '../Location/Location'
import Location2 from '../Location/Location2'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

// section for functional component
const Homepage: React.FC = () => {

    /* const [section, setSection] = React.useState();

    const changePage = (page: number) => setSection(page); */

  return (
    <div className="container">
        
        <Hero />
     
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