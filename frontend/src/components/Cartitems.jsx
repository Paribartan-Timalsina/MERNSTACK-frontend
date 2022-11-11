import React,{useContext, useState} from 'react'
import  { cartContext } from './Productdetail'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from './actions/productAction'
import {connect} from "react-redux"
import { useEffect } from 'react'
const Cartitems = ({cart}) => {
  console.log(cart)
  const dispatch=useDispatch()
  const cartList=useContext(cartContext)
 useEffect(()=>{
localStorage.setItem("newcart",JSON.stringify(cart))
 },[cart])
  
  const   paymoney = async (items)=>{
    try{
    const res= await fetch("/create-checkout-session",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // items: [
        //   { id: 1, quantity: 3 },
        //   { id: 2, quantity: 1 },
        // ],
        items
      }),
    })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
  }catch(err){
    console.log(err)
  }
  }
  const quantitychange=(items,e)=>{
    console.log(e)
dispatch(increment(items,e))
  }
//   const cartProducts=useSelector((state)=>state.cartProducts.cartitems)
// console.log(cartProducts)
  return (
  
    <>
   
    {
       Array.from(cart).map((items, key) => {
        // const { _id, Productname, Price, Category } = cartProducts
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            
           
              <div className='itemslist'>

                <li>
                  <h1>Name:{items.name}</h1>
                  <h1> Price:{items.price}</h1>
                  <input type="number" min="1" value={items.stock} onChange={(e)=>quantitychange(items,e.target.value)} />
                 <h3>Total:{items.price*items.stock}</h3>
                 
                </li>
              </div>
            
          )


        }
        
        )}
<button onClick={()=>paymoney(cart)}>Checkout</button>
    </>
  )
}
const mapStateToProps=state=>{
  return{
    cart:state.cartProducts.cartitems
  }
}

export default connect(mapStateToProps)(Cartitems)
