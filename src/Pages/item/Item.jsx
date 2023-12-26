import React , { useContext } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import { Button } from '@mui/material';
import './Item.css'
import { UserContext } from '../../context/UserProvider';
import axios from 'axios';

const Item = ({Books}) => {

    const { userId } = useContext( UserContext );

    const {id} = useParams();

    const navigate = useNavigate();

    const handleWishlist = async () => {

        const api_uri = "http://localhost:3001";

        let response = await axios.get(`${api_uri}/users`, {
            params: {
                id : userId
            }
        });

        if(!response.data[0].wishlist.includes(Number(id)))
        {
            response.data[0].wishlist.push(Number(id));
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

        if(!response.data[0].cart.includes(Number(id)))
        {
            response.data[0].cart.push(Number(id));
        }
        
        await axios.put(`${api_uri}/users/${userId}`,response.data[0])
    
        return true;
    }

    return (
        <div className="item-page">
            <Navbar className="item-nav" />
            <div className="item-body">
                <div className="item-left">
                    <h1>{Books[id].name}</h1>
                    <img src={Books[id].image} alt='error while loading' style={{height:'70%'}}/>
                </div>
                <div className="item-right">
                    <div className="item-desc">
                        <h3>Description</h3>
                        <p>{Books[id].description}</p>
                        <br />
                        <span><span style={{fontWeight:'700'}}>Writer : </span>{Books[id].writer}</span>
                    </div>
                    <div className="item-money">
                        <div className="item-price">${Books[id].price}</div>
                        <div className='item-wish'>
                        { userId===0 
                        ?
                            <>
                                <Button variant="contained" style={{background:'black',width:'60%',fontSize:'large'}}>Manage Product</Button>
                            </>
                        :
                            <>
                            { userId===null 
                                ?
                                <>
                                    <Button variant="contained" style={{background:'black',width:'60%',fontSize:'large'}} onClick={() => {navigate('/login')}}>Login to Buy</Button>
                                </>
                                :
                                <>
                                    <Button variant="contained" style={{background:'black',width:'30%',fontSize:'large'}} onClick={handleWishlist}>Wishlist</Button>
                                    <Button variant="contained" style={{background:'black',width:'30%',fontSize:'large'}}onClick={handleCart}>Add to Cart</Button>
                                </>
                            }
                            </>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item