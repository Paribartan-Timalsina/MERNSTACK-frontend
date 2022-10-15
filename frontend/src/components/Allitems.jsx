import React, { useContext, useState } from 'react'
import { CartContext } from './Tabs'
import Cartitems from './Cartitems'

const Allitems = () => {
    const [cart,setcart]=useState([])
    const [items] =useContext(CartContext)
    const addtocart =  (items) => {
        setcart({...cart},items)
    }
        const postitemstoDB= async (cart)=>{
         const res = await fetch('http://localhost:5000/addingtocart',
           {
            method: "POST",
            headers: {
    
              'Content-Type': "application/json"
            },
            body: JSON.stringify(cart)
          })
        const data = await res.json()  
        return data
        }
      
    const gotocart=()=>{
      postitemstoDB(cart)
    console.log(cart)
    }
  return (
    <>
    <header>
       <button onClick={()=>gotocart()}>Go to cart ({cart.length})</button>
    </header>
    
 <div className='itemslist'>
      {
         
       Array.from(items).map((product, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            <>
           
              <div className='itemslist'>
                <li>
                  <h1>Name:{product.Productname}</h1>
                  <h1> Price:{product.Price}</h1>
                  <h1>Category:{product.Category}</h1>
                  <button onClick={() => addtocart(product)}>ADD TO CART</button>
                </li>
              </div>
            </>
          )


        })}

    </div> 

    </>
  )
}


export default Allitems
