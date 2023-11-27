import React ,{useContext, useEffect,useState} from 'react'
import './Cart.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { Books } from '../../SharedData'
import HoriItemCart from '../../components/horiitem/HoriItemCart'
import { UserContext } from '../../context/UserProvider'

const Cart = () => {
  const {userId} = useContext(UserContext);

  const [Carted, setCarted] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          id: userId,
        },
      });
      setCarted(response.data[0].cart);
    };
    fetchCart();
  }, []);
  
  return (
    <div className='cart-page'>
      <Navbar className='cart-nav'/>
      <div className='cart-body'>
      {
        Carted === null
        ?
        <div>Loading</div>
        :
        Books.map((Book,index) => {
          if(Carted.includes(index))
          {
            return (<HoriItemCart key={index} id={Book.id} name={Book.name} image={Book.image} price={Book.price} description={Book.description}/>)
          }
        })
      }
      </div>
      <Footer className='cart-footer'/>
    </div>
  )
}

export default Cart