import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='main'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default Home