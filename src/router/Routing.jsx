import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/home/Home'
import Login from '../Pages/login/Login'
import SignUp from '../Pages/signUp/SignUp'
import ForgetPassword from '../Pages/forgetPassword/ForgetPassword'
import Wishlist from '../Pages/wishlist/Wishlist'
import Cart from '../Pages/cart/Cart'
import Item from '../Pages/item/Item'
import { Books } from '../SharedData'
import PrivateRoute from './PrivateRouting'

const Routing = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/wishlist' element={
          <PrivateRoute>
            <Wishlist /> 
          </PrivateRoute> }/>
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart /> 
          </PrivateRoute> }/>
        <Route path='/book/:id' element={<Item Books={Books}/>} />
    </Routes>
  )
}

export default Routing