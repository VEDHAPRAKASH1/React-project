import React , { useContext } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { CardActionArea } from '@mui/material'
import { Link }  from "react-router-dom"
import './Item.css'
import { UserContext } from '../../context/UserProvider'
import axios from 'axios';

const Item = (props) => {

  const { userId } = useContext(UserContext);

  const handleWishlist = async () => {

    const api_uri = "http://localhost:3001";

    let response = await axios.get(`${api_uri}/users`, {
        params: {
            id : userId
        }
    });

    if(!response.data[0].wishlist.includes(Number(props.id)))
    {
        response.data[0].wishlist.push(Number(props.id));
    }
    
    await axios.put(`${api_uri}/users/${userId}`,response.data[0])

    return true;
}

  const handleCart = async () => {

    const api_uri = "http://localhost:3001";

    let response = await axios.get(`${api_uri}/users`, {
        params: {
            id : userId
        }
    });

    if(!response.data[0].cart.includes(Number(props.id)))
    {
        response.data[0].cart.push(Number(props.id));
    }
    
    await axios.put(`${api_uri}/users/${userId}`,response.data[0])

    return true;
}

  return (
    <Card className="item-card" style={{padding:'10px',margin:'10px'}}>
        <CardActionArea component={Link} to={`/book/${props.id}`} style={{paddingLeft:'5px',paddingTop:'5px'}}>
            <img src={props.image} alt='error while fetching' style={{height:'350px',width:'220px'}}/>
            <h2>{props.name}</h2>
        </CardActionArea>
        <h4 style={{paddingLeft:'5px'}}>${props.price}</h4>
        {
          userId===0 || userId===null
          ?
          <div></div>
          :
          <div>
          <Button variant="contained" style={{margin:'10px 5px 0px 0px',background:'rgb(80,80,80)'}} onClick={handleWishlist}>Wishlist</Button>
          <Button variant="contained" style={{margin:'10px 0px 0px 5px',background:'black'}} onClick={handleCart}>Add to Cart</Button>
          </div>
        }
    </Card>
  )
}

export default Item