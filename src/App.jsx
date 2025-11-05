import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Pages/Products'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './Pages/ThemeContext'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './Pages/CartContext'
import { UserContext } from './Pages/UserContext'
function App() {
 
let {theme, settheme}=useContext(ThemeContext);
let bg={}

let {cart}=useContext(CartContext)
if(theme=='light'){
bg={
  backgroundColor:'white',
  color:'black'
}

}
else{
  bg={
     backgroundColor:'black',
  color:'white'

  }
}


let {user}=useContext(UserContext)
  return (
    <div  style={bg}>
   
   <nav> 
    <h3>FakeStore</h3>

    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Products</Link>
      <Link  to={'/cart'}><ShoppingCartIcon /><sup style={{color:'red'}}>{cart.length}</sup> </Link>
      {theme=='light'? <ToggleOffIcon onClick={()=>{settheme('dark')}}></ToggleOffIcon > : <ToggleOnIcon  onClick={()=>{settheme('light')}}></ToggleOnIcon> }
       
    <Link to={'/register'}>{user==null? 'Register': user }</Link>
  
    </div>
   </nav>

   <Outlet/>
    </div>
  )
}

export default App
