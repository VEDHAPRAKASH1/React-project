import './SignUp.css' 
import React , {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import { registerUser } from '../../services/UserApi';
const SignUp = () => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
      username : "",
      email : "",
      password : ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await registerUser(formData);
        if(success)
        {
          navigate('/login');
        }
        else
        {
          alert("Account already exist with this email");
        }
    }

    const handleChangeEvent = (event) => {
      const {name , value} = event.target;
      setFormData({
        ...formData,
        [name] : value
      })
    }

  return (
    <div className='signUp-flex signUp-body'>
      <Paper elevation={24} className='signUp-flex signUp-paper' style={{background:'transparent'}}>
        
        <AccountCircleSharpIcon fontSize='large' className='signUp-icon' />

        <form className="signUp-flex signUp-form" onSubmit={handleSubmit}>

          <input type='text' className='signUp-input' placeholder='Username' name="username" spellCheck='false' onChange={handleChangeEvent} required/>
          
          <input type='email' className='signUp-input' placeholder='Email' name="email" onChange={handleChangeEvent} required/>
          
          <input type='password' className='signUp-input' placeholder='Password' name="password" onChange={handleChangeEvent} required/>

          <Button variant="contained" type='submit' className='signUp-submit'>Sign up</Button>

          <p>Already having an account <Link to='/login' className='signUp-remove-decoration'>login</Link></p>

        </form>
      </Paper>
    </div>
  )
}

export default SignUp