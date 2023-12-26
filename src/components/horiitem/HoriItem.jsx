import React ,{useContext} from 'react'
import './HoriItem.css'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { UserContext } from '../../context/UserProvider'
import axios from 'axios';

const HoriItem = (props) => {

    const { userId } = useContext(UserContext);

    const handleRemove = async () => {

        const api_uri = "http://localhost:3001";
    
        let response = await axios.get(`${api_uri}/users`, {
            params: {
                id : userId
            }
        });
    
        response.data[0].wishlist = response.data[0].wishlist.filter(index => index!==props.book.id)
        props.func(response.data[0].wishlist)
        await axios.put(`${api_uri}/users/${userId}`,response.data[0])
    }

    const handleCart = async () => {

        const api_uri = "http://localhost:3001";
    
        let response = await axios.get(`${api_uri}/users`, {
            params: {
                id : userId
            }
        });
    
        if(!response.data[0].cart.includes(Number(props.book.id)))
        {
            response.data[0].cart.push(Number(props.book.id));
        }
        
        await axios.put(`${api_uri}/users/${userId}`,response.data[0])
        
        handleRemove();
    }

  return (
    <Paper elevation={24} spacing={10} className='hori-body'>
        <img src={props.book.image} alt="error" className='hori-img'/>
        <div className="hori-desc">
            <h2>{props.book.name}</h2>
        </div>
        <div className="hori-btn">
            <h4>${props.book.price}</h4>
            <Button variant="contained" style={{margin:'10px 0px 0px 5px',background:'black',width:'150px'}} onClick={handleCart}>Add to Cart</Button>
            <Button variant="contained" style={{margin:'10px 0px 0px 5px',background:'black',width:'150px'}} onClick={handleRemove}>Remove</Button>
        </div>
    </Paper>
  )
}

export default HoriItem