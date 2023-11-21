import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import './Item.css'

const Item = ({Books}) => {
    const {id} = useParams();
    console.log(Books)
  return (
    <>
        <Navbar />
        <div className="item-body">
            <div className="item-left">
                <h1>dsagasgdf</h1>
                <p>{Books[id].name}</p>
            </div>
            <div className="item-right">
                <h1>sadfghjk</h1>
            </div>
        </div>
    </>
  )
}

export default Item