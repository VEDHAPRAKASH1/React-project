import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    }

  return (
    <div className='signUp-flex signUp-body'>
      <Paper elevation={24} className='signUp-flex signUp-paper' style={{background:'transparent'}}>
        
        <AccountCircleSharpIcon fontSize='large' className='signUp-icon' />

        <form className="signUp-flex signUp-form" onSubmit={handleSubmit}>

          <input type='text' className='signUp-input' placeholder='Username' spellCheck='false' required/>
          
          <input type='email' className='signUp-input' placeholder='Email' required/>
          
          <input type='password' className='signUp-input' placeholder='Password' required/>

          <Button variant="contained" type='submit' className='signUp-submit'>Sign up</Button>

          <p>Already having an account <Link to='/login' className='signUp-remove-decoration'>login</Link></p>

        </form>
      </Paper>
    </div>
  )
}

export default SignUp