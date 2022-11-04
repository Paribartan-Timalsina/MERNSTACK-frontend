import React,{useContext, useState} from 'react'
import  { cartContext } from './Productdetail'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Cartitems = () => {
  const cartList=useContext(cartContext)
  const cartfromStorage=JSON.parse(localStorage.getItem("cart") || "[]")
 
  const cartProducts=useSelector((state)=>state.cartProducts.cartitems)
console.log(cartProducts)
  return (
  
    <>
    {
       Array.from(cartProducts).map((items, key) => {
        const { _id, Productname, Price, Category } = cartProducts
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            
           
              <div className='itemslist'>

                <li>
                  <h1>Name:{Productname}</h1>
                  <h1> Price:{Price}</h1>
                 
                 
                </li>
              </div>
            
          )


        })}

    </>
  )
}

export default Cartitems
