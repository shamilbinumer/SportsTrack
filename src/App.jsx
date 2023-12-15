
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Body/Index/Index'
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'
import AdminRegister from './Components/Admin/AdminRegister/AdminRegister'

function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={Index}/>
    <Route path='/admin' Component={AdminLogin}/>
    <Route path='/adminResgiter' Component={AdminRegister}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
