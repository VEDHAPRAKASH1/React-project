import React from 'react'
import { Books } from '../../SharedData'
import Stack from '@mui/material/Stack'
import Item from '../item/Item'

const Body = () => {
  return (
    <>
    <Stack direction="row" useFlexGap flexWrap='wrap' spacing={10} style={{alignItems:'center',justifyContent:'center',padding:'40px 0px'}}>
        {
          Books.map((Book,index) => {
            return (
              <Item key={index} id={Book.id} name={Book.name} image={Book.image} price={Book.price} description={Book.description}/>
              )
            })
          }
    </Stack>
    </>
  )
}

export default Body