import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import ThemeProvider from './Pages/ThemeContext.jsx'
import CartProvider from './Pages/CartContext.jsx'
import Cart from './Pages/Cart.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import UserProvider from './Pages/UserContext.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
let router=createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/> ,
    children:[
      {
       index:true,
        element:<Home/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'product',
        element:<Products/>
      },
      {
        path:'details/:id',
        element:<ProductDetails/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      }
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
<UserProvider>
   <CartProvider>
   <ThemeProvider>
  <RouterProvider  router={router}></RouterProvider>
  </ThemeProvider>
 </CartProvider>
</UserProvider>
)
