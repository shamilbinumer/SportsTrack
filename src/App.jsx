
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Body/Index/Index'
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'
import AdminRegister from './Components/Admin/AdminRegister/AdminRegister'
import AdminHome from './Components/Admin/AdminHomePage/AdminHome'
import AdminFrgtPwd from './Components/Admin/AdminFrgtPwd/AdminFrgtPwd'
import AddCategory from './Components/Admin/AddCategory/AddCategory'
import AddProduct from './Components/Admin/AddProduct/AddProduct'


function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={Index}/>
    <Route path='/admin' Component={AdminLogin}/>
    <Route path='/adminResgiter' Component={AdminRegister}/>
    <Route path='/adminhome' Component={AdminHome}/>
    <Route path='/adminFrgtPwd' Component={AdminFrgtPwd}/>
    <Route path='/addCategory' Component={AddCategory}/>
    <Route path='/addProduct' Component={AddProduct}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
