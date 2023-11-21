import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className='title'><Link to='/' className='no-text-decoration'>Book a Book</Link></h2>
      <Link to='/wishlist'><button className='btn navbar-wishlist'>Wishlist</button></Link>
      <Link to='/cart'><button className='btn navbar-cart'>Cart</button></Link>
      <Link to='/login'><button className='btn navbar-login'>Login</button></Link>
    </div>
  )
}

export default Navbar