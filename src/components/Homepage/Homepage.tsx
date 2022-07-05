//section for util imports
import React from 'react'
import './Homepage.css'


//import section for components
import Hero from '../Hero/Hero'

// section for functional component
const Homepage: React.FC = () => {
  return (
    <div className="container">
        
        <h1>Homepage</h1>
        <div>
            <Hero/>
        </div>
        <div>
            Community
        </div>
        <div>
            Location
        </div>
        <div>
            Menu
        </div>
        <div>
            Recipes
        </div>
        <div>
            contactUs
        </div>
        <div>
            footer
        </div>

    </div>
  )
}

export default Homepage