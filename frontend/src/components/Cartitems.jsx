import React from 'react'
import Allitems from './Allitems'
const Cartitems = (items) => {
  return (
    <div className='itemslist'>
      
      {
         
        items.map((items, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            <>
           
              <div className='itemslist'>
                <li>
                  <h1>Name:{items.Productname}</h1>
                  <h1> Price:{items.Price}</h1>
                  <h1>Category:{items.Category}</h1>
                 
                </li>
              </div>
            </>
          )


        })}

    </div> 

  )
}

export default Cartitems
