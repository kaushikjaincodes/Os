import './App.css'
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import Body from "./components/Body"

function App() {

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
