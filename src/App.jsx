
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Body/Index/Index'
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'
import AdminRegister from './Components/Admin/AdminRegister/AdminRegister'
import AdminHome from './Components/Admin/AdminHomePage/AdminHome'

function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={Index}/>
    <Route path='/admin' Component={AdminLogin}/>
    <Route path='/adminResgiter' Component={AdminRegister}/>
    <Route path='/adminhome' Component={AdminHome}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
