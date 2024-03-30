import { useState } from 'react'
import './App.css'
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import Body from "./components/Body"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div  className='Body'>
      <Body/>
      </div>
      <div className="footer"> 
      <Footer/>
      </div>
    </>
  )
}

export default App
