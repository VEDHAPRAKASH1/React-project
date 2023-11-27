import React ,{useContext, useEffect,useState} from 'react'
import './Wishlist.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { UserContext } from '../../context/UserProvider'
import axios from 'axios'
import { Books } from '../../SharedData'
import HoriItem from '../../components/horiitem/HoriItem'

const Wishlist = () => {

  const {userId} = useContext(UserContext);

  const [Wishlisted, setWishlisted] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          id: userId,
        },
      });
      setWishlisted(response.data[0].wishlist);
    };
    fetchWishlist();
  }, []);

  return (
    <div className='wishlist-page'>
      <Navbar className='wishlist-nav'/>
      <div className='wishlist-body'>
      {
        Wishlisted === null
        ?
        <div>Loading</div>
        :
        Books.map((Book,index) => {
          if(Wishlisted.includes(index))
          {
            return (<HoriItem key={index} id={Book.id} name={Book.name} image={Book.image} price={Book.price} description={Book.description}/>)
          }
        })
      }
      </div>
      <Footer className='wishlist-footer'/>
    </div>
  )
}

export default Wishlist