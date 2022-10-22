import React,{useContext, useState} from 'react'
import  { CartContext } from './Allitems.jsx'

const Cartitems = () => {
  const [items,setItems]=useState([])
  const [cartitems]=useContext(CartContext)
  

  return (
   <>
   console.log(cartitems)
   </>
    // <>
    // {
    //    Array.from(cartitems).map((items, key) => {
    //       // setitemname(items.name)
    //       // setitemprice(items.price)
    //       return (
            
           
    //           <div className='itemslist'>

    //             <li>
    //               <h1>Name:{items.Productname}</h1>
    //               <h1> Price:{items.Price}</h1>
    //               <h1>Category:{items.Category}</h1>
                 
    //             </li>
    //           </div>
            
    //       )


    //     })}

    // </>
  )
}

export default Cartitems
