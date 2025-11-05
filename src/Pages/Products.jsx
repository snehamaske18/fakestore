import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import { Link, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { CartContext } from './CartContext'
import { UserContext } from './UserContext'
function Products() {

    let [products, setproducts]=useState([])

    let [isloading, setloading]=useState(true)


    
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products').then((res)=>{

            res.json().then((result)=>{

                setproducts(result);
                setloading(false)
            })

        })
    },[])


    let {cart, setcart}=useContext(CartContext);

    let {user, setuser}=useContext(UserContext)

    let navigate=useNavigate()

    function addToCart(product){

       if(user==null){
        alert("Plz login first")
        navigate('/register')
       }
       else{
         let newcart=[...cart, product];
        setcart(newcart);

        console.log(cart);
       }
        
    }

  return (
    <div  className='product-container'>
      
      {isloading && <Loading/>}
       {
        products.map((product)=>{

            return (
                <div className='products'  key={product.id}>

                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
                    <h4>{product.price}$</h4>

                    <Link to={`/details/${product.id}`}> Read More...</Link> <br />
                     <button  onClick={()=>{addToCart(product)}}>ADD TO CART</button>
                </div>
            )
        })
       }

    </div>
  )
}

export default Products
