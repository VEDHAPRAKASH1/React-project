import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

const Navbar = () => {

  const { userId , logOut } = useContext(UserContext);

  return (
    <div className='navbar'>
      <h2 className='title'><Link to='/' className='no-text-decoration'>Book a Book</Link></h2>
      { userId === 0 
        ?
        <>
          <Link to='/wishlist'><button className='btn navbar-wishlist'>Manage Products</button></Link> 
          <Link to='/wishlist'><button className='btn navbar-wishlist'>Orders</button></Link> 
          <button className='btn navbar-login' onClick={logOut}>Log Out</button>
        </> 
        :
        <>
        {
          userId === null
          ?
            <Link to='/login'><button className='btn navbar-login'>Login</button></Link>
          :
          <>
            <Link to='/wishlist'><button className='btn navbar-wishlist'>Wishlist</button></Link>
            <Link to='/cart'><button className='btn navbar-cart'>Cart</button></Link>
            <button className='btn navbar-login' onClick={logOut}>Log Out</button>
          </>
        }
        </>
      }
    </div>
  )
}

export default Navbar