import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loading() {
  return (
    <div  style={{margin:'auto'}}>
      <Spinner animation="grow" />
    </div>
  )
}

export default Loading
