
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    {/* <Route path='/' Component={Navbar}/> */}
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
