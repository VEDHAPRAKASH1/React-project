import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { CardActionArea } from '@mui/material'
import { Link }  from "react-router-dom"
import './Item.css'

const Item = (props) => {
  return (
    <Card className="item-card" style={{padding:'10px',margin:'10px'}}>
        <CardActionArea component={Link} to={`/book/${props.id}`} style={{paddingLeft:'5px',paddingTop:'5px'}}>
            <img src={props.image} alt='error while fetching' style={{height:'350px',width:'220px'}}/>
            <h2>{props.name}</h2>
        </CardActionArea>
        <h4 style={{paddingLeft:'5px'}}>${props.price}</h4>
        <Button variant="contained" type='submit' style={{margin:'10px 5px 0px 0px'}}>Wishlist</Button>
        <Button variant="contained" type='submit' style={{margin:'10px 0px 0px 5px'}}>Add to Cart</Button>
    </Card>
  )
}

export default Item