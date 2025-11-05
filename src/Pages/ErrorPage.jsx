import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

   let {error}= useRouteError()
   console.log(error);
   
  return (
    <div>
      

      <h1>Error Page</h1>

    </div>
  )
}

export default ErrorPage
