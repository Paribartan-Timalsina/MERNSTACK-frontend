import React,{useContext, useState} from 'react'
import  { CartContext } from './Allitems.jsx'

const Cartitems = () => {
  const cartfromStorage=JSON.parse(localStorage.getItem("cart") || "[]")
  
  
console.log(cartfromStorage)
  return (
  
    <>
    {
       Array.from(cartfromStorage).map((items, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            
           
              <div className='itemslist'>

                <li>
                  <h1>Name:{items.Productname}</h1>
                  <h1> Price:{items.Price}</h1>
                 
                 
                </li>
              </div>
            
          )


        })}

    </>
  )
}

export default Cartitems
