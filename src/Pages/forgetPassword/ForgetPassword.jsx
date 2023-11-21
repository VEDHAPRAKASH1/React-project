import React from 'react'
import Paper from '@mui/material/Paper';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css'

const ForgetPassword = () => {
  const navigate = useNavigate();
  
  const HandleSubmit = (event) => {
      event.preventDefault();
      if(event.target.newPassword.value === event.target.confirmPassword.value)
      {
        navigate('/login');
      }
      else
      {
        /*error dialog*/
      }
  }
  
  return (
    <div className='forget-flex forget-body'>
      <Paper elevation={24} className='forget-flex forget-paper'  style={{backgroundColor:'transparent'}}>
        
        <AccountCircleSharpIcon fontSize='large' className='forget-icon'/>

        <form className='forget-flex forget-form' onSubmit={HandleSubmit}>

          <input type='text' className='forget-input' placeholder='Username' spellCheck='false' required/>
          
          <input type='password' className='forget-input' placeholder='New Password' required name='newPassword'/>

          <input type='password' className='forget-input' placeholder='Confirm Password' required name='confirmPassword'/>
          
          <Button variant="contained" type='submit' className='forget-submit'>Login</Button>
        </form>
      </Paper>
    </div>
  )
}

export default ForgetPassword