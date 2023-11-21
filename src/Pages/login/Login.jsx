import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import './Login.css'

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div className='login-flex login-body'>
      <Paper elevation={24} className='login-flex login-paper' style={{background:'transparent'}}>
        
        <AccountCircleSharpIcon fontSize='large' className='login-icon'/>

        <form className='login-form login-flex' onSubmit={handleSubmit}>

          <input type='text' className='login-input' placeholder='Username' spellCheck='false' required/>
          
          <input type='password' className='login-input' placeholder='Password' required/>

          <Button variant="contained" type='submit' className='login-submit' style={{backgroundColor:'rgb(18, 80, 252)'}}>Login</Button>

          <Link to='/forgetPassword' className='login-remove-decoration login-forg'>Forget Password?</Link>

          <p>Not having an account <Link to='/signUp' className='login-remove-decoration login-sign'>sign up</Link></p>
        </form>
      </Paper>
    </div>
  )
}

export default Login