//section for util imports
import React from 'react'
import './App.css'

//section for component imports
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'

//section for functional components
const App: React.FC = () => {
  
//  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      
      <Navbar/>

      <Homepage/>

    </div>
  )
}

export default App
