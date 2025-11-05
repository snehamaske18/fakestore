import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div>
      
      <h1>Registration Page</h1>


<form action="" style={{width:'500px', margin:'auto'}}  className='form-control'  >

<label htmlFor="">UserName</label>
    <input className='form-control' type="text" name="" id=""   /> <br />

    <label htmlFor="">Email</label>
    <input className='form-control' type="text" name="" id=""   /> <br />

    <label htmlFor="">Address</label>
    <input className='form-control' type="text" name="" id=""   /> <br />

 <label htmlFor="">Mobile No</label>
    <input className='form-control' type="text" name="" id=""   /> <br />
<label htmlFor="">Password</label>
    <input type="password" className='form-control'  name="" id="" />

    <br />
    <button >Register</button>
</form>


      <h4>If You are alredy registred Plz <Link to={'/login'}>Login</Link></h4>
    </div>
  )
}

export default Register
