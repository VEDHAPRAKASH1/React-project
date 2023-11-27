import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'

import { UserContext } from '../../context/UserProvider'
import { useContext } from 'react'

const Home = () => {
  const { userId } = useContext(UserContext);

  return (
    <div className='main'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default Home