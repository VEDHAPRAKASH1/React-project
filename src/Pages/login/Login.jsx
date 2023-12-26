import './Login.css'
import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import { LoginUser } from '../../services/UserApi';
import { UserContext } from '../../context/UserProvider'
import { useContext } from "react";

const Login = () => {

  const {logIn} = useContext(UserContext);

  const navigate = useNavigate();

  const [formData,setFormData] = useState(
    {
      email : "",
      password : ""
    }
  )

  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await LoginUser(formData);
    if(success!=null)
    {
      logIn(success);
      navigate('/');
    }
  }

  return (
    <div className='login-flex login-body'>
      <Paper elevation={24} className='login-flex login-paper' style={{background:'transparent'}}>
        
        <AccountCircleSharpIcon fontSize='large' className='login-icon'/>

        <form className='login-form login-flex' onSubmit={handleSubmit}>

          <input type='email' className='login-input' placeholder='Email' name='email' onChange={handleChange} required/>
          
          <input type='password' className='login-input' placeholder='Password' name='password' onChange={handleChange} required/>

          <Button variant="contained" type='submit' className='login-submit' style={{backgroundColor:'rgb(18, 80, 252)'}}>Login</Button>

          <Link to='/forgetPassword' className='login-remove-decoration login-forg'>Forget Password?</Link>

          <p>Not having an account <Link to='/signUp' className='login-remove-decoration login-sign'>sign up</Link></p>
        </form>
      </Paper>
    </div>
  )
}

export default Login