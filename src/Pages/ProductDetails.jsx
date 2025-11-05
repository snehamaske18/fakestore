import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails() {

    let param=useParams()

      let navigate= useNavigate()
    console.log(param);
    
    let [product, setproduct]=useState({})
    
    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${param.id}`).then((data)=>{

            data.json().then((res)=>{

                setproduct(res)

            })
        })
    },[])
  return (
    <div>
      <h1>Product Details</h1>

      <img src={product.image} alt=""   style={{height:'200px'}} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <h5>{product.rating?.rate}</h5>
     
     <button  onClick={()=>{navigate('/product')}}>Back</button>
    </div>


  )
}

export default ProductDetails
