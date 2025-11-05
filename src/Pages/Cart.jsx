import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import './Product.css'
function Cart() {

    let {cart, setcart}=useContext(CartContext)

function remove(product){


    let filteredata=cart.filter((v)=>{
        return  (v!=product)
    })

    setcart(filteredata);
    console.log(filteredata);
    
  
    

}

  return (
    <div  style={{display:'flex'}}>
      
      {
         cart.map((product, index)=>{

            return (
                <div className='products'  key={product.id}>

                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
                    <h4>{product.price}$</h4>

                    <Link to={`/details/${product.id}`}> Read More...</Link> <br />
                    <button  onClick={()=>{remove(product)}}>REMOVE</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Cart
