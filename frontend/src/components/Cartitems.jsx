import React,{useContext} from 'react'
import Allitems, { CartContext } from './Allitems.jsx'

const Cartitems = () => {
  const [cartitems]=useContext(CartContext)
  console.log([cartitems]);
  return (
    <>
    {
       Array.from(cartitems).map((items, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            
           
              <div className='itemslist'>

                <li>
                  <h1>Name:{items.Productname}</h1>
                  <h1> Price:{items.Price}</h1>
                  <h1>Category:{items.Category}</h1>
                 
                </li>
              </div>
            
          )


        })}

    </>
  )
}

export default Cartitems
