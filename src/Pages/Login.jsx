import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'
function Login() {

  let {user, setuser}= useContext(UserContext);
let navigate=useNavigate()

  function handlesubmit(event){
event.preventDefault();
navigate('/')

  }

  return (
    <div>
      
      <h1>Login Form</h1>

<form action="" style={{width:'500px', margin:'auto'}}  className='form-control'  onSubmit={handlesubmit}>

<label htmlFor="">UserName</label>
    <input className='form-control' type="text" name="" id=""  onChange={(event)=>{setuser(event.target.value)}} /> <br />

<label htmlFor="">Password</label>
    <input type="password" className='form-control'  name="" id="" />

    <br />
    <button  >Login</button>
</form>
      <h4>If You are not  registred Plz <Link to={'/register'}>Register</Link></h4>
    </div>
  )
}

export default Login
