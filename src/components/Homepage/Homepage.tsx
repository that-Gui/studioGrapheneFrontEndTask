//section for util imports
import React from 'react'
import './Homepage.css'

//import section for components
import Navbar from '../Navbar/Navbar'
import Sidenav from '../Sidenav/Sidenav'
import Hero from '../Hero/Hero'
import Community from '../Community/Community'
/* import Location from '../Location/Location' */
import Location2 from '../Location/Location2'
import Menu from '../Menu/Menu'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

//section for interfaces

// section for functional component
const Homepage: React.FC = () => {
  const [page, setPage] = React.useState('0')

  const changepage = (number: string) => {
    return setPage(number)
  }

  return (
    <div className='container'>
      <Navbar />

      <Sidenav pagenumber={page} />

      <Hero change={changepage} />

      <Community change={changepage} />

      <Location2 change={changepage} />

      <Menu change={changepage} />

      <Contact change={changepage} />

      <Footer change={changepage} />
    </div>
  )
}

export default Homepage
