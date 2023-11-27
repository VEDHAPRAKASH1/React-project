import './ForgetPassword.css'
import React , {useEffect , useState} from 'react'
import Paper from '@mui/material/Paper';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { forgetUser } from '../../services/UserApi';

const ForgetPassword = () => {

  const [email,setEmail] = useState("");
  const [newPass,setNewPass] = useState("");
  const [conPass,setConPass] = useState("");

  const [same,setSame] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if(newPass !== conPass)
    {
      setSame(false);
    }
    else
    {
      setSame(true);
    }
  },[newPass,conPass])
  
  const HandleSubmit = async (event) => {
      event.preventDefault();
      if(same)
      {
        const success = await forgetUser({email,newPass});
        if(success)
        {
          navigate('/login');
        }
        else
        {
          alert("Account does not exist with this email");
        }
      }
      else
      {
        alert("Passwords are not same");
      }
  }
  
  return (
    <div className='forget-flex forget-body'>
      <Paper elevation={24} className='forget-flex forget-paper'  style={{backgroundColor:'transparent'}}>
        
        <AccountCircleSharpIcon fontSize='large' className='forget-icon'/>

        <form className='forget-flex forget-form' onSubmit={HandleSubmit}>

          <input type='email' className='forget-input' placeholder='Email' name='email' onChange={(event) => setEmail(event.target.value)} required />
          
          <input type='password' className='forget-input' placeholder='New Password' required name='newPassword' onChange={(event) => setNewPass(event.target.value)}/>

          <input type='password' className={`forget-input ${same ? 'white' : 'red'} `} placeholder='Confirm Password' required name='confirmPassword' onChange={(event) => setConPass(event.target.value)}/>
          
          <Button variant="contained" type='submit' className='forget-submit'>Change Password</Button>
        </form>
      </Paper>
    </div>
  )
}

export default ForgetPassword